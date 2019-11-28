import React, { useEffect } from 'react';
import { View, 
    Button, 
    StyleSheet, 
    Alert, 
    Image
} from 'react-native';
import { authenticationService } from '../services/authenticationService';

export default function Login (props){

    async function login () {
        const { navigate } = props.navigation;
        const { authenticate } = authenticationService;
        const user = await authenticate();
        if(user) navigate('Home');
    }

    return <View style={styles.container}>
        <Image
            source={require('../assets/logo.png')}
        />
        <Button
            color = 'black'              
            title = 'Login with IDS4'
            onPress = {login}
            style = {styles.button}
        />
    </View>
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        marginTop: '10px'
    },
    logo:{
       width: '50px' ,
       height: '50px'
    }
})