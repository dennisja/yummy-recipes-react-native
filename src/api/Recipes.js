import Token from './Token'
import { sendData } from './User'
import Configs from '../AppConfigs'
import { getOrDelete, editOrCreate } from './Utils';
const { baseUrl, recipesUrl } = Configs.api

const combinedRecipeUrl = `${baseUrl}${recipesUrl}`

/**
 * Creates a new recipe
 * @param {object} data The recipe data to send to the endpoint
 * @param {function} errorHandler The function to handle errors
 */
export const createRecipe = async (data, errorHandler) =>
  await editOrCreate(combinedRecipeUrl, data, errorHandler)

/**
 * Edits a recipe
 * @param {object} data The new recipe data to send to the editing end point
 * @param {number} recipeId The id of the recipe
 * @param {function} errorHandler The function to handle errors that occur
 */
export const editRecipe = async (data, recipeId, errorHandler) =>
  await editOrCreate(combinedRecipeUrl + recipeId, data, errorHandler, 'PUT')

/**
 *
 * @param {number} recipeId The id of the recipe to delete
 * @param {function} errorHandler The function to handle errors
 */
export const deleteRecipe = async (recipeId, errorHandler) =>
  await getOrDelete(combinedRecipeUrl + recipeId, errorHandler, 'DELETE')

  /**
   * Gets all user recipes
   * @param {function} errorHandler Function to handle errors
   */
export const getRecipes = async errorHandler => await getOrDelete(combinedRecipeUrl, errorHandler)

export const getRecipe = async (recipeId,errorHandler) => await getOrDelete(combinedRecipeUrl+recipeId, errorHandler)
