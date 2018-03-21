import Token from './Token';
import { editOrCreate, getOrDelete } from './Utils';
import Configs from '../AppConfigs';

const { baseUrl, categories } = Configs.api;
const categoriesUrl = `${baseUrl}${categories}`

/**
 * Creates a category
 * @param {object} data The data of the category to add
 * @param {function} callback The function to handle errors that occur during addition of a category
 */
export const createCategory = async (data, callback) =>
  await editOrCreate(categoriesUrl, data, callback)

/**
   *
   * @param {object} data The new data of the category to edit
   * @param {number} categoryId The id of the category to edit
   * @param {function} callback The function to handle errors
   */
export const editCategory = async (data, categoryId, callback) =>
  await editOrCreate(`${categoriesUrl}${categoryId}`, data, callback,"PUT")

/**
 * Deletes a category whose id is given
 * @param {number} categoryId The id of the category to be deleted
 * @param {string} callback The function to handle errors
 */
export const deleteCategory = async (categoryId, callback) =>
  getOrDelete(`${categoriesUrl}${categoryId}`, callback, 'DELETE')

/**
 * Gets all user categories
 * @param {function} callback The function to handle errors
 */
export const getCategories = async callback =>
  await getOrDelete(categoriesUrl, callback)

/**
 * Gets a category whose id is given
 * @param {number} categoryId The Id of the category to get
 * @param {function} callback The function to handle errors
 */
export const getCategory = async (categoryId, callback) =>
  await getOrDelete(`${categoriesUrl}${categoryId}`, callback)
