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
 */
export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${baseUrl + registerUrl}`, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.log(error);
    }
}


/**
 * 
 * @param {object} userData An object containing login details of a user i.e email and password
 */
export const loginUser = async (userData) => {
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
        return jsonResponse;
    }catch (error) {
        console.log(error)
    }
}