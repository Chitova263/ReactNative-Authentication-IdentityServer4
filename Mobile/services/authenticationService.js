import { authorize,
    revoke,
    refresh,
} from 'react-native-app-auth';
import { config, 
    storage_key 
} from '../config/oidc-config';
import AsyncStorage from '@react-native-community/async-storage';


export const authenticationService = {
    authenticate,
    isAuthenticated,
    signOut,
    getCurrentUser,
}

async function authenticate() {
    try {
        const user = await authorize(config);
        if(user){
            console.log("Authenticate",user['accessToken']);
            await AsyncStorage.setItem(storage_key, JSON.stringify(user));
            return user;
        }
    } catch (error) {
        console.log(error)
    }
}

async function signOut() {
    try {
        const user = JSON.parse(await AsyncStorage.getItem(storage_key));
        console.log(user);
        if(user){
            await revoke(config, {
                tokenToRevoke: user['accessToken'],
            });
            await AsyncStorage.removeItem(storage_key);
        }
    } catch (error) {
        console.log(error)
    }
}

async function isAuthenticated() {
    try {
        const user = JSON.parse(await AsyncStorage.getItem(storage_key));
        console.log(user)
        if(user) {
            if(!isTokenExpired(user['accessTokenExpirationDate']))
            {
                return true;
            }
            return false;
        }
    } catch (error) {
      console.log(error);
    }

    function isTokenExpired(expirationDate) {
        if(new Date(expirationDate) < new Date())
        {
            return true;
        }
        return false;
    }
}

async function getCurrentUser() {
    if (await isAuthenticated()) {
        const user = JSON.parse(await AsyncStorage.getItem(storage_key));
        return user;
    }
    return null;
}
