import { AppAuth } from 'expo';
import { AsyncStorage, Alert } from 'react-native';
import { OIDC_CONFIG, STORAGE_KEY } from '../config/oidc-config';

export default class AuthService {
    signInAsync = async() => {
        const authState = await AppAuth.authAsync(OIDC_CONFIG);
        await cacheAuthAsync(authState);
        Alert.alert('signInAsync', JSON.stringify(authState));
        return authState;
    }

    //save token to localstorage
    cacheAuthAsync = authState => {
        Alert.alert('caching authState', JSON.stringify(authState));
        return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(authState));
    }

    checkAsyncStorage = async() => {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        return value;
    }

    //check if user is signed in or not before starting app
    getCachedAuthAsync = async() => {
        /* First we will try and get the cached auth */
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        const authState = JSON.parse(value);
        Alert.alert(value, value);
        console.log('getCachedAuthAsync', authState);
        if (authState) {
          if (checkIfTokenExpired(authState)) {
            return refreshAuthAsync(authState);
          } else {
            return authState;
          }
        }
        return null;
    }

    checkIfTokenExpired = ({ accessTokenExpirationDate }) =>  {
        return new Date(accessTokenExpirationDate) < new Date();
    }
    
    refreshAuthAsync = async({ refreshToken }) => {
        const authState = await AppAuth.refreshAsync(config, refreshToken);
        Alert.alert('refreshAuthAsync', authState);
        console.log('refreshAuthAsync', authState);
        await cacheAuthAsync(authState);
        return authState;
    }
}