import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView} from 'react-native';
import { Icon, } from 'react-native-elements';
import defaultPic from '../assets/images/default.jpeg';
import bg from '../assets/images/bg.jpeg';
import { DrawerItems, SafeAreaView } from 'react-navigation';

const DrawerMenu = props => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                <ImageBackground source={bg} style={styles.backgroundImage}>
                    <Image source={defaultPic} style={styles.userImage} />
                </ImageBackground>
                <ScrollView>
                    <DrawerItems {...props} />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
};

DrawerMenu.propTypes = {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: null,
        height: null,
        paddingVertical: 20,
        alignItems: 'center',
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
})
export default DrawerMenu;