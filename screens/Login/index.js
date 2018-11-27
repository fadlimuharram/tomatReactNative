import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import LoginScreen from './LoginScreen';
import HomeScreen from '../Home/index';
import SideBar from '../Sidebar';


const LoginScreenRouter = DrawerNavigator({
  LoginScreen: {screen: LoginScreen},
  HomeScreen: {screen: HomeScreen}
},{
  contentComponent: props =>(<SideBar {...props} />)
});

export default LoginScreenRouter;