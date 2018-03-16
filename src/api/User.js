/**
 * Users.js
 * Contains methods to make api requests of users
 */

import Configs from '../AppConfigs';
import base64 from 'base-64';

const { baseUrl, registerUrl, loginUrl} = Configs.api;

/**
 * 
 * @param {oject} userData An object containing necessary data to register a user i.e {email, password, firstname, lastname, c_password}
 * @param {function} errorHandler The function to handle errors in our application
 */
export const registerUser = async (userData, errorHandler) => {
    try {
        const response = await fetch(`${baseUrl + registerUrl}`, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const jsonResponse = await response.json();
        if(!response.ok){
            errorHandler(jsonResponse)
            return;
        }
        return jsonResponse;
    } catch (error) {
        errorHandler(error);
    }
}


/**
 * 
 * @param {object} userData An object containing login details of a user i.e email and password
 * @param {object} errorHandler A callback function to handle errors that result from the application
 */
export const loginUser = async (userData, errorHandler) => {
    try {
        
        const {email:username, password} = userData;
        const loginCredentials = base64.encode(`${username}:${password}`);
        const response = await fetch(`${baseUrl + loginUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${loginCredentials}`
            }
        })
        const jsonResponse = await response.json();
        if(!response.ok){
            errorHandler(jsonResponse)
        }
        return jsonResponse;
    }catch (error) {
        errorHandler(error)
    }
}