/**
 * Users.js
 * Contains methods to make api requests of users
 */

import Configs from '../AppConfigs'
import base64 from 'base-64'
import Token from './Token'
import { sendData, getData, getOrDelete, editOrCreate } from './Utils'

const { baseUrl, registerUrl, loginUrl, users } = Configs.api
const userUrl = `${baseUrl + users}`

/**
 * Registers a user
 * @param {Object} userData An object containing necessary data to register a user i.e {email, password, firstname, lastname, c_password}
 * @param {function} errorHandler The function to handle errors in our application
 */
export const registerUser = async (userData, errorHandler) =>
  editOrCreate(`${baseUrl + registerUrl}`, userData, errorHandler)

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
export const getUserData = async (userId, errorHandler) =>
  getOrDelete(`${userUrl}${userId}/`, errorHandler)

/**
 * Edits userdata
 * @param {Object} newUserData An object containing the new user data
 * @param {function} errorHandler A function to handle errors that occur
 */
export const editUserData = async (newUserData, errorHandler) =>
  editOrCreate(userUrl, newUserData, errorHandler, 'PUT')

/**
 * Changes user password
 * @param {Object} newPasswordData An object containing user data
 * @param {function} errorHandler A function to handle errors that occur
 */
export const changeUserPassword = async (newPasswordData, errorHandler) =>
  await editOrCreate(userUrl, newPasswordData, errorHandler, 'PATCH')
