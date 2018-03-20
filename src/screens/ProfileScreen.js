import React, { Component } from 'react'
import { View, Text, StyleSheet,ScrollView } from 'react-native'
import { Icon, Header, } from 'react-native-elements'
import Token from '../api/Token'
import ProfileInfo from '../components/user/ProfileInfo';
import EditProfile from '../components/user/EditProfile';
import ChangePassword from '../components/user/ChangePassword';
import UserIntro from '../components/user/UserIntro';

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
    }
  }

  componentDidMount = async () => {
    const userData = await Token.getUserData()
    this.setState({ userData })
  }

  render () {
    const { userData } = this.state

    return (
      <View styel={styles.container}>
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
        
        <UserIntro userData={userData}/>
        <ScrollView>
          <ProfileInfo {...userData} />
          <EditProfile />
          <ChangePassword />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
})

export default ProfileScreen
