import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

class CategoriesScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => <FontAwesome name='tags' size={24} color={tintColor}/>
  }
  render () {
    return (
      <View>
        <Text> Categories screen </Text>
        <Text onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          {' '}Open Drawer{' '}
        </Text>
      </View>
    )
  }
}

export default CategoriesScreen
