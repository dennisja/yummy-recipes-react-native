import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon, Header } from 'react-native-elements'

class ProfileScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon color={tintColor} name='user' type='font-awesome' />
    ),
    header: null
  }
  render () {
    return (
      <View>
        <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => this.props.navigation.navigate('DrawerOpen')
          }}
          centerComponent={{ text: 'Profile', style: {color: '#fff'} }}
        />

        <Text> Profile Screen </Text>
      </View>
    )
  }
}

export default ProfileScreen
