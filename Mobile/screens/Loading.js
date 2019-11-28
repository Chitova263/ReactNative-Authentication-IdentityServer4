import React, { useEffect } from 'react'
import { 
    StyleSheet, 
    View, 
    Button,
    ActivityIndicator, 
    Alert, 
        } from 'react-native';

import { authenticationService } from '../services/authenticationService';

export default function Loading (props) {

    useEffect(() => {
        bootstrapAsync();
    }, [])
   
    async function bootstrapAsync() {
        const { isAuthenticated } = authenticationService;
        const { navigate } = props.navigation;
        const authenticated = await isAuthenticated();
        if(authenticated){
            navigate('Home')
        } else {
            navigate('Login')
        }
    }
   
    return <View style={styles.container}>
        <ActivityIndicator size='large'/>
    </View>
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})