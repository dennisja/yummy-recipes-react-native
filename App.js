import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, ActivityIndicator } from 'react-native';
import { AppNavigator, AuthStack, NewAppNavigator } from './src/components/Navigation';
import Token from './src/api/Token';

export default class App extends React.Component {
  state = {
    loggedIn: null,
  }

  componentWillMount = async () => {
    const userToken = await Token.getTokenWithoutHttpCall();
    console.log(userToken);
    if (userToken) {
      this.setState({ loggedIn: true });
      return;
    }
    this.setState({ loggedIn: false });
  };

  renderInitialView = () => {
    switch (this.state.loggedIn) {
      case null:
        return <ActivityIndicator />
      case false:
        return <AuthStack />
      case true:
        return <NewAppNavigator />
    }
  }


  render() {
    return (
        this.renderInitialView()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
