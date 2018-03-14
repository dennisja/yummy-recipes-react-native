import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CardTitle = ({titleText, titleTextStyle, titleIconName, iconType:Icon, size, ...rest})=>(
    <View style={styles.titleContainer}>
        {titleIconName && <Icon name={titleIconName} size={size} {...rest} />}  
        <Text style={[titleTextStyle, styles.defaultTextStyles]}>{titleText}</Text>
    </View>
);

CardTitle.propTypes = {
    size: PropTypes.number,
    titleText: PropTypes.string.isRequired,
    titleIconName: PropTypes.string
};

CardTitle.defaultProps = {
    size: 24,
    titleIconName: null,
    iconType: FontAwesome,
}

const styles = StyleSheet.create({
    titleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e8ee',
        paddingBottom: 15,
        paddingTop: 5,
    },
    defaultTextStyles:{
        marginLeft: 10,
    },
})

export default CardTitle;
