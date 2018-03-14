import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Input, Card } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

class RegisterScreen extends Component {
  state={
    firstname: '',
    lastname: '',
    email: '',
    password:'',
    c_password:'',
  }

  render() {
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
            onSubmitEditing={()=>this._lastnameField.focus()}
            onChangeText={firstname=>this.setState({firstname})} />

          <Input placeholder='lastname'
            leftIcon={<FontAwesome name="user" size={24} />}
            autoCapitalize='words'
            autoCorrect={false}
            returnKeyType='next'
            ref={view => this._lastnameField = view}
            onSubmitEditing={()=>this._emailField.focus()}
            onChangeText={lastname=>this.setState({lastname})}
          />

          <Input placeholder='email'
            keyboardType='email-address'
            leftIcon={<FontAwesome name="envelope" size={18} />}
            returnKeyType='next'
            autoCorrect={false}
            autoCapitalize='none'
            ref={view => this._emailField = view}
            onSubmitEditing={()=>this._passwordField.focus()}
            onChangeText={email=>this.setState({email})} />

          <Input placeholder='password'
            leftIcon={<FontAwesome name="lock" size={24} />}
            secureTextEntry
            returnKeyType='next'
            ref={view => this._passwordField = view}
            onSubmitEditing={() => this._confirmPasswordField.focus()}
            onChange={this.handleInputChange}
            onChangeText={password=>this.setState({password})} />

          <Input placeholder='confirm password'
            leftIcon={<FontAwesome name="lock" size={24} />}
            secureTextEntry
            ref={view => this._confirmPasswordField = view}
            onChange={c_password=>this.setState({c_password})} />

        </Card>
      </View>
    );
  }
}

export default RegisterScreen;
