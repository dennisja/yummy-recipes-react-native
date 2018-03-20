import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'

const Row = props => (
  <View style={styles.rowContainer}>
    <Text style={[styles.text, styles.titleText]}>{props.title}:{' '}</Text>
    <Text style={[styles.text, styles.valueText]}>{props.value}</Text>
  </View>
)

Row.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

const ProfileInfo = props => {
  return (
    <View style={styles.infoContainer}>
      <Row title={'First Name'} value={props.firstname} />
      <Row title={'Last Name'} value={props.lastname} />
      <Row title={'Email'} value={props.email} />
    </View>
  )
}

ProfileInfo.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    paddingVertical: 15
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: '#bbb',
    borderWidth: 0.5
  },
  titleText: {
    color: 'rgba(0,0,0,0.7)'
  },
  valueText: {},
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
export default ProfileInfo
