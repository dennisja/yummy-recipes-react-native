import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

class RecipesScreen extends Component {
  render() {
    return (
      <View>
        <Text onPress={()=>this.props.navigation.navigate('Home')}> Recipes Screen </Text>
      </View>
    );
  }
}

export default RecipesScreen;
