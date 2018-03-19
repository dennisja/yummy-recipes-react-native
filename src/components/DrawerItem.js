import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const DrawerItem = ({ name, iconType: Icon, iconName }, context) => (
  <TouchableOpacity
    onPress={context.logoutUser}
    style={styles.drawerItemOuterContainer}
  >
    <View style={styles.drawerItemInnerContainer}>
      <Icon name={iconName} size={24} style={styles.drawerItemIcon} />
      <Text style={styles.drawerItemText}>{name}</Text>
    </View>
  </TouchableOpacity>
)

DrawerItem.propTypes = {
  name: PropTypes.string.isRequired,
  iconType: PropTypes.func,
  iconName: PropTypes.string
}

DrawerItem.contextTypes = {
  logoutUser: PropTypes.func
}

DrawerItem.defaultProps = {
  iconType: FontAwesome,
  iconName: 'sign-out'
}

const styles = StyleSheet.create({
  drawerItemOuterContainer: {},
  drawerItemInnerContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  drawerItemIcon: { color: '#6e6e6e' },
  drawerItemText: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 'bold',
    marginHorizontal: 30
  }
})

export default DrawerItem
