import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Icon, Avatar } from 'react-native-elements'

const UserIntro = ({ userData }) => (
  <View style={styles.basicInfoContainer}>
    <View style={styles.imageContainer}>
      <Avatar rounded large icon={{ name: 'user', type: 'font-awesome' }} />
    </View>
    <View style={styles.textInfoContainer}>
      <View style={styles.nameContainer}>
        <Text
          style={styles.userName}
        >{`${userData.firstname} ${userData.lastname}`}</Text>
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
)

UserIntro.propTypes = {}

const styles = StyleSheet.create({
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
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  }
})

export default UserIntro
