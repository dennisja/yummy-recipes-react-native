import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import {Header} from 'react-native-elements';
class CategoriesScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <FontAwesome name='tags' size={24} color={tintColor} />
    ),
    header: null,
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
          centerComponent={{ text: 'Categories', style: { color: '#fff' } }}
        />
        <Text> Categories screen </Text>
      </View>
    )
  }
}

export default CategoriesScreen
