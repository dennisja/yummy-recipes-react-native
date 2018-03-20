import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Icon, Card, Button } from 'react-native-elements'
import { editUserData } from '../../api/User'
class EditProfile extends Component {
  state = {
    firstname: this.props.userData.firstname,
    lastname: this.props.userData.lastname,
    email: this.props.userData.email,
    loading: false
  }

  _handleEditErrors = errors => {
    if ('errors' in errors) {
      // erros in registration from the api
      console.log(errors)
      return
    }
    // tell user request can't be made
    console.log(errors)
  }

  _handleEditProfile = async () => {
    const { firstname, lastname, email } = this.state
    this.setState({ loading: true })
    const response = await editUserData(
      { firstname, lastname, email },
      this._handleEditErrors
    )
    this.setState({ loading: false })
    if (response) {
      // tell user that he has successfully registered
      this.props.onEditUserData(response)
    }
  }

  render () {
    const { firstname, lastname, email, loading } = this.state
    const { isInModal, closeModal } = this.props

    return (
      <View style={styles.container} behavior='padding'>
        <Card title='Edit Profile'>
          <Input
            placeholder='firstname'
            leftIcon={<Icon name='user' size={24} type='font-awesome' />}
            returnKeyType='next'
            autoCorrect={false}
            autoFocus
            autoCapitalize='words'
            ref={view => (this._firstnameField = view)}
            onSubmitEditing={() => this._lastnameField.focus()}
            onChangeText={firstname => this.setState({ firstname })}
            value={firstname}
          />

          <Input
            placeholder='lastname'
            leftIcon={<Icon name='user' size={24} type='font-awesome' />}
            autoCapitalize='words'
            autoCorrect={false}
            returnKeyType='next'
            ref={view => (this._lastnameField = view)}
            onSubmitEditing={() => this._emailField.focus()}
            onChangeText={lastname => this.setState({ lastname })}
            value={lastname}
          />
          <Input
            value={email}
            placeholder='email'
            leftIcon={<Icon name='envelope' size={18} type='font-awesome' />}
            autoCapitalize='none'
            keyboardType='email-address'
            autoCorrect={false}
            ref={view => (this._emailField = view)}
            onChangeText={email => this.setState({ email })}
            value={email}
          />
          <Button
            title='Edit Profile'
            loading={this.state.loading}
            onPress={this._handleEditProfile}
            buttonStyle={
              loading ? styles.buttonStyle : { paddingHorizontal: 5 }
            }
            loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
            containerStyle={styles.buttonContainerStyle}
          />

          {isInModal &&
            <Button
              clear
              title='Close'
              onPress={closeModal}
              titleStyle={{ color: 'blue' }}
            />}
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainerStyle: {
    marginTop: 15
  }
})
export default EditProfile
