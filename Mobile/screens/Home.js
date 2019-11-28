import React, { Component } from 'react'
import { StyleSheet, 
    View, 
    Text,
    Button, 
} from 'react-native';

import { authenticationService } from '../services/authenticationService';

export default function Home() {
   
    async function signOut() {
        await authenticationService.signOut()
    }

    return <View style={styles.container}>
        <Text>Home Component</Text>
        <Button
            title='Sign Out'
            onPress={signOut}
        />
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})