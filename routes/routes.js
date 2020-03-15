import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomePage from './../containers/HomePage/home.page'
import Login from './../containers/Login/login'

const screens = {
    HomePage: {
        screen: HomePage
    },
    Login: {
        screen: Login
    }
}

const routes = createStackNavigator(screens);

export default createAppContainer(routes)