import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Card, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

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

  _handleSignUp = () => {
    const { loading, ...userData } = this.state;
    this.setState({ loading: true })
  }

  render() {
    const { loading, email, firstname, lastname, password, c_password } = this.state;
    return (
      <View>
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
            buttonStyle={loading ? styles.buttonStyle : {}}
            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            containerStyle={styles.buttonContainerStyle} />

        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    marginTop: 20,
  },
  buttonStyle: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  }
})

export default RegisterScreen;
