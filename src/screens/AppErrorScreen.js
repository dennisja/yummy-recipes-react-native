/**
 * AppErrorScreen
 * The screen to show if an error that is not caught occurs in the application
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AppErrorScreen extends Component {
    componentDidCatch(error, info) {

    }
    render() {
        return (
            <View style={styles.container}>
                <Text> An Error Occured </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AppErrorScreen;
