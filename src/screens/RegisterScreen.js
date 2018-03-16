import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Card, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { registerUser } from '../api/User';

class RegisterScreen extends Component {
  static initialState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    c_password: '',
    loading: false,
  }

  state = RegisterScreen.initialState;

  _handleSignUpErrors = (errors)=>{
    if('errors' in errors){
      // erros in registration from the api
      return;
    }
    // tell user request can't be made
  }

  _handleSignUp = async () => {
    const { loading, ...userData } = this.state;
    this.setState({ loading: true })
    const response = await registerUser(userData, this._handleSignUpErrors);
    if(response){
      //tell user that he has successfully registered
      console.log(response.messages)
      this.setState(RegisterScreen.initialState)
      return;
    }
    this.setState({ loading: false })
  }

  render() {
    const { loading, email, firstname, lastname, password, c_password } = this.state;

    return (
      <View style={styles.container}>
        <Card title="Register">
          <Input placeholder='firstname'
            leftIcon={<FontAwesome name="user" size={24} />}
            returnKeyType='next'
            autoCorrect={false}
            autoFocus
            autoCapitalize='words'
            ref={view => this._firstnameField = view}
            onSubmitEditing={() => this._lastnameField.focus()}
            onChangeText={firstname => this.setState({ firstname })}
            value={firstname} />

          <Input placeholder='lastname'
            leftIcon={<FontAwesome name="user" size={24} />}
            autoCapitalize='words'
            autoCorrect={false}
            returnKeyType='next'
            ref={view => this._lastnameField = view}
            onSubmitEditing={() => this._emailField.focus()}
            onChangeText={lastname => this.setState({ lastname })}
            value={lastname}
          />

          <Input placeholder='email'
            keyboardType='email-address'
            leftIcon={<FontAwesome name="envelope" size={18} />}
            returnKeyType='next'
            autoCorrect={false}
            autoCapitalize='none'
            ref={view => this._emailField = view}
            onSubmitEditing={() => this._passwordField.focus()}
            onChangeText={email => this.setState({ email })}
            value={email}
          />

          <Input placeholder='password'
            leftIcon={<FontAwesome name="lock" size={24} />}
            secureTextEntry
            returnKeyType='next'
            ref={view => this._passwordField = view}
            onSubmitEditing={() => this._confirmPasswordField.focus()}
            onChangeText={password => this.setState({ password })}
            value={password} />

          <Input placeholder='confirm password'
            leftIcon={<FontAwesome name="lock" size={24} />}
            secureTextEntry
            ref={view => this._confirmPasswordField = view}
            onChangeText={c_password => this.setState({ c_password })}
            value={c_password} />

          <Button
            title='Register'
            loading={this.state.loading}
            onPress={this._handleSignUp}
            buttonStyle={loading ? styles.buttonStyle : { paddingHorizontal: 5 }}
            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            containerStyle={styles.buttonContainerStyle} />

          <View style={styles.loginButton}>
            <Button title='Already Have an account? Login' onPress={() => this.props.navigation.navigate('Login')} />
          </View>
        </Card>
      </View>
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
  loginButton: {
    marginTop: 10,
  }
})

export default RegisterScreen;
