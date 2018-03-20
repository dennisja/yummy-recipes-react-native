import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Card, Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import { FontAwesome } from '@expo/vector-icons';
import CardTitle from '../components/CardTitle';
import { loginUser } from '../api/User'
import Token from '../api/Token';


class LoginScreen extends Component {
  static initialState = {
    email: '',
    password: '',
    loading: false,
  }

  static contextTypes = {
    loginUser: PropTypes.func,
  }

  state = LoginScreen.initialState

  _handleSignInErrors = (errorObject)=>{
    if('errors' in errorObject){
      // display errors from the api to the user
      console.log(errorObject.errors)
      return;
    }
    // tell user that request cant be made
    console.log(errorObject.message)
  }

  _handleSignIn = async () => {
    const { loading, ...loginDetails } = this.state;
    this.setState({ loading: true })
    const response = await loginUser(loginDetails, this._handleSignInErrors);
    if(response){
      await Token.addToken(response)
      this.setState(LoginScreen.initialState)
      this.context.loginUser()
      return;
    }
    this.setState({loading: false})
  }

  render() {
    const { email, password, loading } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Card title={<CardTitle titleText="Login" titleIconName={'sign-in'} />}>
          <Input
            value={email}
            placeholder="email"
            leftIcon={<FontAwesome name='envelope' size={18} />}
            autoCapitalize='none'
            autoFocus
            returnKeyType='next'
            onSubmitEditing={() => this._passwordField.focus()}
            onChangeText={email => this.setState({ email })}
            value={email} />

          <Input
            placeholder="password"
            leftIcon={<FontAwesome name='lock' size={24} />}
            value={password}
            ref={view => this._passwordField = view}
            onChangeText={password => this.setState({ password })}
            value={password}
            blurOnSubmit
            secureTextEntry />

          <Button
            title='Login'
            loading={this.state.loading}
            onPress={this._handleSignIn}
            buttonStyle={loading ? styles.buttonStyle : { paddingHorizontal: 5 }}
            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            containerStyle={styles.buttonContainerStyle} />

          <View style={styles.regButton}>
            <Button title='Dont have an account? Register' onPress={() => { this.props.navigation.navigate('Register') }} />
          </View>
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  buttonContainerStyle: {
    marginTop: 20,
  },
  buttonStyle: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  regButton: {
    marginTop: 10,
  }
})

export default LoginScreen;
