import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import { Icon } from 'react-native-elements';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor})=>(
      <Icon name='home' size={24} color={tintColor}/>
    )
  }
  render() {
    return (
      <View>
        <Text onPress={()=>this.props.navigation.navigate('Recipes')}> Home </Text>
        <Text onPress={()=>this.props.navigation.navigate('DrawerOpen')}>Open `drawer</Text>
      </View>
    );
  }
}

export default HomeScreen;
