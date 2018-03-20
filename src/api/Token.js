import { AsyncStorage } from 'react-native';


const USER_TOKEN_KEY = 'userToken'
const USER_DATA_KEY = 'userData'
export default class Token {
    static getTokenWithoutHttpCall = async () => {
        try{
            return await AsyncStorage.getItem(USER_TOKEN_KEY)
        }catch(error){
            return null
        }
    }

    static addToken = async (data)=>{
        try {
            await AsyncStorage.setItem(USER_TOKEN_KEY, data.token)
            await AsyncStorage.setItem(USER_DATA_KEY, data.data)
            return true;
        } catch (error) {
            // add error to error logs
            return false
        }
    }
    
    static removeToken = async ()=>{
        try{
            AsyncStorage.removeItem(USER_TOKEN_KEY)
            return true;
        }catch(error){
            return false;
        }
    }

    static getUserData = async ()=>{
        try {
            return await AsyncStorage.getItem(USER_DATA_KEY);
        } catch (error) {
            return null;
        }
    }
}