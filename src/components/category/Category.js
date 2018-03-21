import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import { Row } from '../user/ProfileInfo'

const Category = props => {
  const { created, edited, name, owner_details, id } = props
  const owner = `${owner_details.firstname} ${owner_details.lastname}`
  return (
    <Card title={name}>
      <Row title='Category name' value={name} />
      <Row title='Owner' value={owner} />
      <Row title='Created' value={created} isTime />
      <Row title='Last edited' value={edited} isTime />
      <View style={styles.buttonsContainer}>
        <Icon
          type='font-awesome'
          name='edit'
          onPress={() => props.handleEditPress({ id, name })}
          color='green'
          containerStyle={styles.icon}
          size={20}
        />
        <Icon
          type='font-awesome'
          name='trash'
          onPress={() => props.handleDeletePress({ id, name })}
          color='red'
          containerStyle={styles.icon}
          size={20}
        />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  icon: {
    marginRight: 10
  }
})

export default Category
