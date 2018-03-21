import React, { Component } from 'react'
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements'

import { getCategories, getCategory } from '../api/Categories'
import AddCategoryForm from '../components/category/AddCategory'
import EditCategoryForm from '../components/category/EditCategory'
import AddButton from '../components/utils/CustomFab'
class CategoriesScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name='tags' type='font-awesome' size={24} color={tintColor} />
    ),
    header: null
  }

  state = {
    modalVisible: false,
    modalComponent: null
  }

  handleErrors (errors) {
    console.log(errors)
  }

  _hideModal = () => {
    this.setState({ modalVisible: false, modalComponent: null })
  }

  _showModal = modalComponent => {
    this.setState({ modalComponent, modalVisible: true })
  }

  componentDidMount = async () => {
    const response = await getCategories(this.handleErrors)
    console.log(await getCategory(22, this.handleErrors))
  }

  _renderModalComponent = () => {
    switch (this.state.modalComponent) {
      case 'add-category':
        return <AddCategoryForm />

      case 'edit-category':
        return (
          <EditCategoryForm categoryId={22} categoryName={'Latest Edited'} />
        )
      default:
        return null
    }
  }
  render () {
    const { modalVisible } = this.state
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
