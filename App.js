import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ActivityIndicator
} from 'react-native'
import {
  AppNavigator,
  AuthStack,
  NewAppNavigator
} from './src/components/Navigation'
import Token from './src/api/Token'
import PropTypes from 'prop-types'

export default class App extends React.Component {
  static childContextTypes = {
    loginUser: PropTypes.func,
    logoutUser: PropTypes.func
  }

  getChildContext = () => ({
    loginUser: this.loginUser,
    logoutUser: this.logoutUser
  })

  state = {
    loggedIn: null
  }

  componentDidMount = async () => {
    await this.authenticateUser()
  }

  componentDidUpdate = async () => {
    await this.authenticateUser()
  }

  authenticateUser = async () => {
    const userToken = await Token.getTokenWithoutHttpCall()
    if (userToken) {
      this.setState({ loggedIn: true })
      return
    }
    this.setState({ loggedIn: false })
  }

  loginUser = () => {
    this.setState({ loggedIn: true })
  }

  logoutUser = async () => {
    this.setState({ loggedIn: false })
    await AsyncStorage.clear()
  }

  renderInitialView = () => {
    switch (this.state.loggedIn) {
      case null:
        return <ActivityIndicator />
      case false:
        return <AuthStack />
      case true:
        return <NewAppNavigator />
      default:
        return <AppNavigator />
    }
  }

  render () {
    return this.renderInitialView()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
