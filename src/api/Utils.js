import Token from './Token'
export const headers = {
  'Content-Type': 'application/json'
}
/**
 * Send data to the api
 * @param {object} data The data to send to the web service
 * @param {string} url The end point where dat is to be sent
 * @param {string} method The method used to send data. It defaults to POST
 */
export const sendData = async (data, url, method = 'POST') => {
  headers['x-access-token'] = await Token.getTokenWithoutHttpCall()
  const response = await fetch(url, {
    method,
    body: JSON.stringify(data),
    headers
  })
  return response
}

/**
 * Send or retrieves data from end points where no data is to be sent
 * @param {string} url The end point to get or send data from or to
 * @param {string} method The method to use
 */
export const getData = async (url, method = 'GET') => {
  headers['x-access-token'] = await Token.getTokenWithoutHttpCall()
  return await fetch(url, {
    method,
    headers
  })
}

/**
 * Gets or deletes category
 * @param {string} url The end point to get or delete data from
 * @param {function} callback The function to handle errors that occur
 * @param {string} method The method to use on the endpoint
 */
export const getOrDelete = async (url, callback, method = 'GET') => {
  try {
    const response = await getData(url, method)
    const jsonResponse = await response.json()
    if (!response.ok) {
      callback(jsonResponse)
      return
    }
    return jsonResponse
  } catch (error) {
    callback(error)
  }
}

/**
 * Edits or Creates a category
 * @param {string} url The url of the end point to handle the action
 * @param {object} data The data to send to the endpoint
 * @param {function} callback The callback function to handle errors
 * @param {string} method The method to use when accessing the end point
 */
export const editOrCreate = async (url, data, callback, method = 'POST') => {
  try {
    const response = await sendData(data, url, method)
    const jsonResponse = await response.json()
    if (!response.ok) {
      callback(jsonResponse)
      return
    }
    return jsonResponse
  } catch (error) {
    callback(error)
  }
}
