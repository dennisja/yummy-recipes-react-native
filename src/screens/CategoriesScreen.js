import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Header } from 'react-native-elements'
import { getCategories, getCategory } from '../api/Categories'
import AddCategoryForm from '../components/category/AddCategory'
import EditCategoryForm from '../components/category/EditCategory'
class CategoriesScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <FontAwesome name='tags' size={24} color={tintColor} />
    ),
    header: null
  }

  handleErrors (errors) {
    console.log(errors)
  }

  componentDidMount = async () => {
    const response = await getCategories(this.handleErrors)
    console.log(await getCategory(22, this.handleErrors))
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
        <AddCategoryForm />
        <EditCategoryForm categoryId={22} categoryName={'Latest Edited'}/>
      </View>
    )
  }
}

export default CategoriesScreen
