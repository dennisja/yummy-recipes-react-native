import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  AsyncStorage
} from 'react-native'
import { Constants } from 'expo'
import { Icon, Header } from 'react-native-elements'
import Token from '../api/Token'
import ProfileInfo from '../components/user/ProfileInfo'
import EditProfile from '../components/user/EditProfile'
import ChangePassword from '../components/user/ChangePassword'
import UserIntro from '../components/user/UserIntro'

class ProfileScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon color={tintColor} name='user' type='font-awesome' />
    ),
    header: null
  }

  state = {
    userData: {
      firstname: '',
      lastname: '',
      email: '',
      id: ''
    },
    showModal: false,
    elementToShow: null
  }

  componentDidMount = async () => {
    const userData = await Token.getUserData()
    this.setState({ userData })
  }

  onChangePassword = responseData => {
    console.log(responseData)
    this.setState({
      showModal: false,
      elementToShow: null
    })
  }

  onChangePasswordClick = () => {
    this.setState({
      showModal: true,
      elementToShow: 'change-password'
    })
  }

  onEditUserData = responseData => {
    console.log(responseData)
    this.setState({
      showModal: false,
      elementToShow: null,
      userData: responseData['new_user_details']
    })
    // update user data in async storage
    AsyncStorage.setItem(
      'userData',
      JSON.stringify(responseData['new_user_details'])
    )
  }

  onEditUserDataClick = () => {
    this.setState({
      showModal: true,
      elementToShow: 'edit-profile'
    })
  }

  _handleModalClose = () => {
    this.setState({
      showModal: false,
      elementToShow: null
    })
  }

  renderForm = () => {
    switch (this.state.elementToShow) {
      case 'edit-profile':
        return (
          <EditProfile
            onEditUserData={this.onEditUserData}
            isInModal
            closeModal={this._handleModalClose}
            userData={this.state.userData}
          />
        )
      case 'change-password':
        return (
          <ChangePassword
            onChangePassword={this.onChangePassword}
            isInModal
            closeModal={this._handleModalClose}
          />
        )
      default:
        return null
    }
  }

  render () {
    const { userData, showModal } = this.state

    return (
      <View style={styles.container}>
        <View style={{ height: Constants.statusBarHeight }} />
        <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => this.props.navigation.navigate('DrawerOpen')
          }}
          centerComponent={{
            text: `${userData.firstname} ${userData.lastname}` || 'Profile',
            style: { color: '#fff' }
          }}
        />

        <UserIntro
          userData={userData}
          onEditProfileClick={this.onEditUserDataClick}
          onChangePasswordClick={this.onChangePasswordClick}
        />
        <ProfileInfo {...userData} />
        <Modal
          style={styles.modal}
          visible={showModal}
          transparent
          animationType='slide'
          onRequestClose={this._handleModalClose}
        >
          <View style={styles.modalBackground} />
          {this.renderForm()}
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  modalBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modal: {
    ...StyleSheet.absoluteFillObject, // means the same as the commented styles below
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ProfileScreen
