import { TabNavigator, StackNavigator,DrawerNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import RecipesScreen from '../screens/RecipesScreen';
import DrawerMenu from './DrawerMenu';

export const AuthStack = StackNavigator({
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen }
},{
    initialRouteName: 'Register',
})

const HomeStack = StackNavigator({
    Home: { screen: HomeScreen }
})

const RecipesStack = StackNavigator({
    Recipes: { screen: RecipesScreen }
})

export const NewAppNavigator = DrawerNavigator({
    Home: {screen: HomeStack},
    Recipes: {screen: RecipesStack},
},{
    initialRouteName:'Home',
    contentComponent: DrawerMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
})

export const AppNavigator = TabNavigator({
    Home: { screen: HomeStack },
    Recipes: { screen: RecipesStack },
},{
    initialRouteName: 'Home',
    
})