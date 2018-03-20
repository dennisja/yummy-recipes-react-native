import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Input, Icon, Card, Button } from 'react-native-elements'

class EditProfile extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    loading: false
  }

  _handleEditProfile = () => {}

  render () {
    const { firstname, lastname, email, loading } = this.state

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
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
        </Card>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainerStyle: {
    marginTop: 15
  }
})
export default EditProfile
