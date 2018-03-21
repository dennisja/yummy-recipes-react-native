import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Alert
} from 'react-native'
import { Header, Icon } from 'react-native-elements'

import {
  getCategories,
  getCategory,
  editCategory,
  deleteCategory
} from '../api/Categories'
import AddCategoryForm from '../components/category/AddCategory'
import EditCategoryForm from '../components/category/EditCategory'
import AddButton from '../components/utils/CustomFab'
import CategoryDetails from '../components/category/Category'
class CategoriesScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name='tags' type='font-awesome' size={24} color={tintColor} />
    ),
    header: null
  }

  state = {
    modalVisible: false,
    modalComponent: null,
    categories: [],
    loadingCategories: true,
    selectedCategory: null,
    showDeletePopup: false
  }

  handleErrors (errors) {
    console.log(errors)
  }

  _hideModal = () => {
    this.setState({
      modalVisible: false,
      modalComponent: null,
      selectedCategory: null
    })
  }

  _showModal = modalComponent => {
    this.setState({ modalComponent, modalVisible: true })
  }

  _fetchCategories = async () => {
    const response = await getCategories(this.handleErrors)
    await this.setState({ loadingCategories: false })
    if (response) {
      const categories = response.recipe_cats
      await this.setState({ categories: [...categories] })
    }
  }

  onAddCategory = async response => {
    this._hideModal()
    await this._fetchCategories()
    // tell user that he/she has added a category
    console.log(response)
  }

  componentDidMount = async () => {
    await this._fetchCategories()
  }

  _renderModalComponent = () => {
    const { selectedCategory, modalComponent } = this.state
    switch (modalComponent) {
      case 'add-category':
        return <AddCategoryForm onAddCategory={this.onAddCategory} />

      case 'edit-category':
        return (
          <EditCategoryForm
            categoryId={selectedCategory.id}
            categoryName={selectedCategory.name}
            handleEditCategory={this.handleEditCategory}
          />
        )
      default:
        return null
    }
  }

  onPressDeleteCategory = category => {
    const { name, id } = category
    Alert.alert(
      `Delete ${name}`,
      `Are you sure you want to delete category ${name}`,
      [
        { text: 'Cancel', onPress: () => false, style: 'cancel' },
        { text: 'OK', onPress: () => this.handleDeleteCategory(id) }
      ],
      { cancelable: false }
    )
  }

  handleDeleteCategory = async categoryId => {
    const response = await deleteCategory(categoryId, this.handleErrors)
    if(response){
      this._fetchCategories();
      console.log(response)
    }
    return;
  }

  onPressEditCategory = selectedCategory => {
    this._showModal('edit-category')
    this.setState({ selectedCategory })
  }

  handleEditCategory = response => {
    const category = response.recipe_cat
    this.setState(
      prevState => ({
        categories: [
          category,
          ...prevState.categories.filter(cat => category.id !== cat.id)
        ]
      }),
      () => {
        this._hideModal()
      }
    )
  }

  render () {
    const { modalVisible, categories, loadingCategories } = this.state
    const modalConfigs = {
      animationType: 'fade',
      transparent: true,
      visible: modalVisible,
      onRequestClose: this._hideModal
    }

    return (
      <View style={styles.container}>
        <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => this.props.navigation.navigate('DrawerOpen')
          }}
          centerComponent={{ text: 'Categories', style: { color: '#fff' } }}
        />

        {loadingCategories
          ? <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size='large' />
          </View>
          : <FlatList
            data={categories}
            renderItem={({ item }) => (
              <CategoryDetails
                {...item}
                handleEditPress={this.onPressEditCategory}
                handleDeletePress={this.onPressDeleteCategory}
                />
              )}
            keyExtractor={item => item.id}
            extraData={{ categories }}
            refreshing
            />}

        <Modal {...modalConfigs}>
          <View style={styles.modalBackground} />
          <TouchableOpacity
            style={styles.modalContainer}
            onPressOut={this._hideModal}
          >
            {this._renderModalComponent()}
          </TouchableOpacity>
        </Modal>
        <AddButton onPress={() => this._showModal('add-category')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerLoading: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
})
export default CategoriesScreen
