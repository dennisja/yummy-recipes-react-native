import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import CategoryForm from './CategoryForm'
import { editCategory } from '../../api/Categories'

class EditCategory extends Component {
  static propTypes = {
    categoryName: PropTypes.string.isRequired,
    categoryId: PropTypes.number.isRequired
  }

  state = { cat_name: this.props.categoryName, loading: false }

  _handleEditErrors = errors => {
    console.log(errors)
  }

  _handleEditCategory = async () => {
    await this.setState({ loading: true })
    const { cat_name } = this.state
    const response = await editCategory(
      { cat_name },
      this.props.categoryId,
      this._handleEditErrors
    )
    await this.setState({ loading: false })
    if (response) {
      this.props.handleEditCategory(response)
    }
  }

  _handleNameChange = async cat_name => {
    this.setState({ cat_name })
  }

  render () {
    const { loading, cat_name } = this.state

    return (
      <View>
        <CategoryForm
          loading={loading}
          handleNameChange={this._handleNameChange}
          handleSubmit={this._handleEditCategory}
          cat_name={cat_name}
          iconName='pencil'
          placeholder='Edit Category'
        />
      </View>
    )
  }
}

export default EditCategory
