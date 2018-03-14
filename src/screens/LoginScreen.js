import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Card, Button } from 'react-native-elements';
import CardTitle from '../components/CardTitle';
import { FontAwesome } from '@expo/vector-icons';


class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
  }

  _handleSignIn = () => {
    const { loading, ...loginDetails } = this.state;
    console.log(loginDetails)
    this.setState({ loading: true })
  }

  render() {
    const { email, password, loading } = this.state;

    return (
      <View>
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

export default LoginScreen;
