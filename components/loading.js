import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, Alert, AsyncStorage } from 'react-native';
import { OIDC_CONFIG, STORAGE_KEY } from '../config/oidc-config';

export default class Loading extends Component {
    constructor(props){
        super(props);
        this._bootstrapAsync();
    }
   
    _bootstrapAsync = () => {
        const { navigate } = this.props.navigation;
        AsyncStorage.getItem(STORAGE_KEY, (err, authState) => {
            if(authState !== null){
                Alert.alert('authState Found', JSON.stringify(authState));
                navigate('Home');
            } else {
                Alert.alert('authState Not Found', JSON.stringify(err));
                navigate('Login')
            }         
        });
    }

    render() {
        return <View style={styles.container}>
            <ActivityIndicator size='large'/>
        </View>
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})