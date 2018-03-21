import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

const Fab = props => {
  const { onPress, iconName, iconType } = props
  return (
    <View style={styles.addButtonContainer}>
      <Icon
        name={iconName}
        raised
        type={iconType}
        containerStyle={{ backgroundColor: 'green' }}
        color='#fff'
        onPress={onPress}
      />
    </View>
  )
}

Fab.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string,
  iconType: PropTypes.string
}

Fab.defaultProps = {
  iconName: 'plus',
  iconType: 'font-awesome'
}

const styles = StyleSheet.create({
  addButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Fab
