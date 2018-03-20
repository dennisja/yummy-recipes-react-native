import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Icon, Button, Input, Card } from 'react-native-elements'
import { changeUserPassword } from '../../api/User'
class ChangePassword extends Component {
  state = {
    current_password: '',
    new_password: '',
    new_password_again: '',
    loading: false
  }

  _handleErrors = errors => {
    if ('errors' in errors) {
      // erros in registration from the api
      //   const { errors } = errors
      console.log(errors)
      return
    }
    // tell user request can't be made
    console.log(errors)
  }

  _handleChangePassword = async () => {
    const { current_password, new_password, new_password_again } = this.state
    this.setState({ loading: true })
    const response = await changeUserPassword(
      { current_password, new_password, new_password_again },
      this._handleErrors
    )
    this.setState({ loading: false })
    if (response) {
      this.props.onChangePassword(response)
    }
  }

  render () {
    const {
      current_password,
      new_password,
      new_password_again,
      loading
    } = this.state
    const { isInModal, closeModal } = this.props
    return (
      <View style={styles.container} behavior='padding'>
        <Card title='ChangePassword'>
          <Input
            placeholder='current password'
            leftIcon={<Icon name='lock' type='font-awesome' size={24} />}
            secureTextEntry
            returnKeyType='next'
            onSubmitEditing={() => this._newPasswordField.focus()}
            onChangeText={current_password =>
              this.setState({ current_password })}
            value={current_password}
          />
          <Input
            placeholder='new password'
            leftIcon={<Icon name='lock' type='font-awesome' size={24} />}
            secureTextEntry
            returnKeyType='next'
            ref={view => (this._newPasswordField = view)}
            onSubmitEditing={() => this._confirmNewPasswordField.focus()}
            onChangeText={new_password => this.setState({ new_password })}
            value={new_password}
          />
          <Input
            placeholder='confirm new password'
            leftIcon={<Icon name='lock' type='font-awesome' size={24} />}
            secureTextEntry
            returnKeyType='next'
            ref={view => (this._confirmNewPasswordField = view)}
            onChangeText={new_password_again =>
              this.setState({ new_password_again })}
            value={new_password_again}
          />

          <Button
            title='Change Password'
            loading={this.state.loading}
            onPress={this._handleChangePassword}
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
    marginTop: 20
  }
})

export default ChangePassword
