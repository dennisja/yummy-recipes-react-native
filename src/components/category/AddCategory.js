import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button, Icon, Card } from 'react-native-elements'
import { createCategory } from '../../api/Categories';
import CategoryForm from './CategoryForm';

class AddCategory extends Component {
  state = {
    cat_name: '',
    loading: false
  }

  _handleAddCategoryErrors = (errors)=>{
    console.log(errors)
  }

  _handleAddCategory = async ()=>{
    const {cat_name} = this.state;
    await this.setState({loading: true})
    const response = await createCategory({cat_name}, this._handleAddCategoryErrors)
    if(response){
        // tell user that he or she has successfuly added a category
        console.log(response);
    }
    this.setState({loading: false})
  }

  _handleNameChange = (cat_name) => {
      this.setState({cat_name})
  }

  render () {
    const { cat_name, loading } = this.state
    return (
      <View>
        <CategoryForm 
            loading={loading}
            handleNameChange={this._handleNameChange}
            handleSubmit={this._handleAddCategory}
            cat_name={cat_name}
            iconName="plus"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default AddCategory
