import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Header } from 'react-native-elements'
import Token from '../api/Token'
class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name='home' size={24} color={tintColor} />
    ),
    header: null,
  }

  componentDidMount = async () => {
    console.log(await Token.getTokenWithoutHttpCall())
  }

  render () {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', onPress: ()=>this.props.navigation.navigate('DrawerOpen') }}
          centerComponent={{ text: 'Home', style: { color: '#fff' } }}
        />
        <Text onPress={() => this.props.navigation.navigate('Recipes')}>
          {' '}Home{' '}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default HomeScreen
