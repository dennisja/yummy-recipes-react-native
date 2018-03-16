import { AsyncStorage } from 'react-native';


const USER_TOKEN_KEY = 'userToken'
export default class Token {
    static getTokenWithoutHttpCall = async () => {
        try{
            return await AsyncStorage.getItem(USER_TOKEN_KEY)
        }catch(error){
            return null
        }
    }

    static addToken = async (token)=>{
        try {
            AsyncStorage.setItem(USER_TOKEN_KEY, token)
            return true;
        } catch (error) {
            // add error to error logs
            return false
        }
    }
}