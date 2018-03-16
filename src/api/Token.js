import { AsyncStorage } from 'react-native';

class Token {
    static getTokenWithoutHttpCall = async () => {
        return await AsyncStorage.getItem('userToken')
    }
}