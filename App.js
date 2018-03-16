import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, ActivityIndicator } from 'react-native';
import { AppNavigator, AuthStack } from './src/components/Navigation';

export default class App extends React.Component {
  state = {
    loggedIn: null,
  }

  componentWillMount = async () => {
    // const stopAt = Date.now()+ 5000;
    // while( Date.now() < stopAt){}
    const userToken = await AsyncStorage.getItem('userToken');
    if (this.state.loggedIn) {
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
        return <AppNavigator />
    }
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderInitialView()}
      </View>
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
