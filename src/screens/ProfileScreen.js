import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Icon, Header, Button, Avatar } from 'react-native-elements'
import Token from '../api/Token'
import ProfileInfo from '../components/user/ProfileInfo';

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

        <View style={styles.basicInfoContainer}>
          <View style={styles.imageContainer}>
            <Avatar
            rounded
            large
            icon={{name:'user', type:'font-awesome'}}
            />
          </View>
          <View style={styles.textInfoContainer}>
            <View style={styles.nameContainer}>
              <Text>{`${userData.firstname} ${userData.lastname}`}</Text>
            </View>
            <View style={styles.optionContainer}>
              <Icon
                type='font-awesome'
                name='edit'
                size={24}
                onPress={() => alert('Edit Profile')}
              />
              <Button
                title='Change Password'
                clear
                titleStyle={{ color: 'blue' }}
                onPress={() => alert('Change Password')}
              />
            </View>
          </View>
        </View>
        <ProfileInfo {...userData} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  basicInfoContainer: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: '#bbb',
    backgroundColor: '#fff',
    borderRadius: 5
  },
  textInfoContainer: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameContainer: {},
  optionContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1
  }
})

export default ProfileScreen
