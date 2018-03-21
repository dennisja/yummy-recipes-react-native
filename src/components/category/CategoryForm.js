import React from 'react'
import PropTypes from 'prop-types'
import { Card, Input, Icon, Button } from 'react-native-elements'
import { StyleSheet } from 'react-native';

const CategoryForm = props => {
  const {
    cat_name,
    handleSubmit,
    handleNameChange,
    iconName,
    placeholder,
    loading
  } = props
  return (
    <Card title={placeholder}>
      <Input
        value={cat_name}
        placeholder={placeholder}
        autoCapitalize='words'
        onChangeText={handleNameChange}
        leftIcon={<Icon name={iconName} type='font-awesome' />}
      />
      <Button
        title={placeholder}
        loading={loading}
        onPress={handleSubmit}
        loadingProps={{ size: 'large', color: 'rgba(255, 98, 0, 0.8)' }}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles[`button${loading ? 'Loading' : ''}`]}
      />
    </Card>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15
  },
  button: {},
  buttonLoading: {
    paddingHorizontal: 5
  }
})

CategoryForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  cat_name: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  iconName: PropTypes.string,
  placeholder: PropTypes.string
}

CategoryForm.defaultProps = {
  placeholder: 'Add Category',
  iconName: 'tags'
}

export default CategoryForm
