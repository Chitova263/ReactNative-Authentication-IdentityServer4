import React, { Component } from 'react';
import { View, Button, StyleSheet, Alert , Text, AsyncStorage} from 'react-native';
import { OIDC_CONFIG, STORAGE_KEY } from '../config/oidc-config';
import { AppAuth } from 'expo';

export default class Login extends Component {

    static navigationOptions = {
        title: 'Please Sign In'
    };

    componentDidMount() {
        console.log("Props In Login",JSON.stringify(this.props));
        Alert.alert("Props In Login",JSON.stringify(this.props))
    }

    _loginAsync = async() => {
        const { navigate } = this.props.navigation;
        try {
            const authState = await AppAuth.authAsync(OIDC_CONFIG);
            if(authState){
                console.log("authState", JSON.stringify(authState));
                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(authState));
                navigate('Home');
            }      
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return <View style={styles.container}>
            <Button              
                title = 'Login With Identity Server'
                onPress = {this._loginAsync}
            />
            <Text></Text>
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