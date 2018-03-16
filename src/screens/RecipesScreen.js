import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import { Icon } from 'react-native-elements'
class RecipesScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor})=>(
      <Icon name='cutlery' size={24} color={tintColor} type='font-awesome'/>
    )
  }
  render() {
    return (
      <View>
        <Text onPress={()=>this.props.navigation.navigate('Home')}> Recipes Screen </Text>
        <Text onPress={()=>this.props.navigation.navigate('DrawerOpen')}>Open `drawer</Text>
      </View>
    );
  }
}

export default RecipesScreen;
