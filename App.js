/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import configureStore from './configureStore'
import { Provider } from 'react-redux';
import Login from './containers/Login/index'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginForm from './containers/Login/components/index'
import UserTikets from './containers/user.ticket/index'
import Main from './containers/Main/index'
import SignUp from './containers/sign.up/index'

const initialState = {};
const store = configureStore(initialState);

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <Provider store={store}>

      <NavigationContainer initialRouteName="MainScreen">

        <Stack.Navigator
          screenOptions={
            {
              headerTitleAlign: "center",
              headerTintColor: "red",
              headerTitleStyle: {
                color: "#000000"
              },

            }

          }
        >
          <Stack.Screen
            name="MainScreen"
            component={Main}
            options = {{
              headerShown:false
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,

            }}
          />
          <Stack.Screen
            name="loginForm"
            component={LoginForm}
            options={{
              headerTitle: "Sign In",
              headerTitleAlign: "center"
            }
            }
          />
          <Stack.Screen
            name="UserTicket"
            component={UserTikets}
            options={{
              headerTitle: "My Tickets",
              headerTitleAlign: "center"

            }}
          />
          <Stack.Screen 
               name = "signUp"
               component = {SignUp}
               options={{
                 headerTitle :"Sign Up",
                 headerTitleAlign: "center"
               }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
