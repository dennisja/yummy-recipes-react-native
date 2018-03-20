/**
 * Users.js
 * Contains methods to make api requests of users
 */

import Configs from '../AppConfigs'
import base64 from 'base-64'
import Token from './Token'

const { baseUrl, registerUrl, loginUrl, users } = Configs.api
const userUrl = `${baseUrl + users}`
const headers = {
  'Content-Type': 'application/json'
}

/**
 *
 * @param {object} data The data to send to the web service
 * @param {string} url The end point where dat is to be sent
 * @param {string} method The method used to send data. It defaults to POST
 */
const sendData = async (data, url, method = 'POST') => {
  headers['x-access-token'] = await Token.getTokenWithoutHttpCall()
  const response = await fetch(url, {
    method,
    body: JSON.stringify(data),
    headers
  })
  return response
}

/**
 * Registers a user
 * @param {Object} userData An object containing necessary data to register a user i.e {email, password, firstname, lastname, c_password}
 * @param {function} errorHandler The function to handle errors in our application
 */
export const registerUser = async (userData, errorHandler) => {
  try {
    const response = await sendData(userData, `${baseUrl + registerUrl}`, "POST")
    const jsonResponse = await response.json()
    if (!response.ok) {
      errorHandler(jsonResponse)
      return
    }
    return jsonResponse
  } catch (error) {
    errorHandler(error)
  }
}

/**
 * Logs in a user
 * @param {object} userData An object containing login details of a user i.e email and password
 * @param {object} errorHandler A callback function to handle errors that result from the application
 */
export const loginUser = async (userData, errorHandler) => {
  try {
    const { email: username, password } = userData
    const loginCredentials = base64.encode(`${username}:${password}`)
    const response = await fetch(`${baseUrl + loginUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${loginCredentials}`
      }
    })
    const jsonResponse = await response.json()
    if (!response.ok) {
      errorHandler(jsonResponse)
      return
    }
    return jsonResponse
  } catch (error) {
    errorHandler(error)
  }
}

/**
 * Gets user data from the api
 * @param {number} userId The id of the user whose data is required
 * @param {function} errorHandler The function to handle errors that occur
 */
export const getUserData = async (userId, errorHandler) => {
  try {
    headers['x-access-token'] = await Token.getTokenWithoutHttpCall()

    const response = await fetch(`${userUrl}${userId}/`, {
      method: 'GET',
      headers
    })
    const jsonResponse = await response.json()
    if (!response.ok) {
      errorHandler(jsonResponse)
      return
    }
    return jsonResponse
  } catch (error) {
    errorHandler(error)
  }
}

/**
 * Edits userdata
 * @param {Object} newUserData An object containing the new user data
 * @param {function} errorHandler A function to handle errors that occur
 */
export const editUserData = async (newUserData, errorHandler) => {
  try {
    const response = await sendData(newUserData, userUrl, 'PUT')
    const jsonResponse = await response.json()

    if (!response.ok) {
      errorHandler(jsonResponse)
      return
    }

    return jsonResponse
  } catch (error) {
    errorHandler(error)
  }
}

/**
 * Changes user password
 * @param {Object} newPasswordData An object containing user data
 * @param {function} errorHandler A function to handle errors that occur
 */
export const changeUserPassword = async (newPasswordData, errorHandler) => {
  try {
    headers['x-access-token'] = await Token.getTokenWithoutHttpCall()
    const response = await sendData(newPasswordData, userUrl, 'PATCH')
    const jsonResponse = await response.json()

    if (!response.ok) {
      errorHandler(jsonResponse)
      return
    }
    return jsonResponse
  } catch (error) {
    errorHandler(error)
  }
}
