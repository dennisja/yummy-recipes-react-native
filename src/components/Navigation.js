import { TabNavigator, StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import RecipesScreen from '../screens/RecipesScreen';

export const AuthStack = StackNavigator({
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen }
},{
    initialRouteName: 'Login',
})

const HomeStack = StackNavigator({
    Home: { screen: HomeScreen }
})

const RecipesStack = StackNavigator({
    Recipes: { screen: RecipesScreen }
})

export const AppNavigator = TabNavigator({
    Home: { screen: HomeStack },
    Recipes: { screen: RecipesStack },
},{
    initialRouteName: 'Home'
})