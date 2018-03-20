import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import { Icon, Header } from 'react-native-elements'
class RecipesScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor})=>(
      <Icon name='cutlery' size={20} color={tintColor} type='font-awesome'/>
    ),
    header: null,
  }
  render() {
    
    return (
      <View>
        <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => this.props.navigation.navigate('DrawerOpen')
          }}
          centerComponent={{ text: 'Recipes', style: { color: '#fff' } }}
        />
        <Text onPress={()=>this.props.navigation.navigate('Home')}> Recipes Screen </Text>
        <Text onPress={()=>this.props.navigation.navigate('DrawerOpen')}>Open `drawer</Text>
      </View>
    );
  }
}

export default RecipesScreen;
