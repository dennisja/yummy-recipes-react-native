import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import TimeAgo from 'react-native-timeago'

export const Row = props => (
  <View style={[styles.rowContainer, props.containerStyle]}>
    <Text style={[styles.text, styles.titleText]}>{props.title}:{' '}</Text>
    {!props.isTime
      ? <Text style={[styles.text, styles.valueText]}>{props.value}</Text>
      : <TimeAgo time={props.value} style={[styles.text, styles.valueText]} />}
  </View>
)

Row.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isTime: PropTypes.bool
}

Row.defaultProps = {
  isTime: false,
  containerStyle: {},
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
