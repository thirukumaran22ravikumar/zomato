import 'react-native-gesture-handler';
import React from "react";
//import {createStackNavigator,TransitionsPresets} from "@react-navigation/native-stack"
//import { createNativeStackNavigator, TransitionPresets} from '@react-navigation/native-stack';
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import RootClientTabs from "./ClientTabs";
import RestaurantMapScreen from "../screens/RestaurantsMapScreen";
import DrawerNavigator from "./DrawerNavigator";

const Auth = createNativeStackNavigator();
export default function AuthStack(){
    return(
        <Auth.Navigator
            screenOptions={{
                headerShown: false,
                // You can define your custom transition here
                animation: 'slide_from_bottom', // This is an example, replace it with your custom transition
            }}
          >
            <Auth.Screen
                name = "SignInWelcomeScreen"
                component = {SignInWelcomeScreen}
                // options={{
                //     headerShown: false,
                //     ...TransitionPresets.RevealFromBottomAndroid
                // }}
            /> 


            <Auth.Screen
                name = "HomeScreen"
                component = {HomeScreen}
                // options={{
                //     headerShown: false,
                //     ...TransitionPresets.RevealFromBottomAndroid
                // }}
            /> 
            <Auth.Screen
                name = "SignInScreen"
                component = {SignInScreen}
                // options={{
                //     headerShown: false,
                //     ...TransitionPresets.RevealFromBottomAndroid
                // }}
            />
            <Auth.Screen
                name = "RootClientTabs"
                component = {RootClientTabs}
                // options={{
                //     headerShown: false,
                //     ...TransitionPresets.RevealFromBottomAndroid
                // }}
            />
            <Auth.Screen
                name = "DrawerNavigator"
                component = {DrawerNavigator}
                // options={{
                //     headerShown: false,
                //     ...TransitionPresets.RevealFromBottomAndroid
                // }}
            />
            <Auth.Screen
                name = "RestaurentMapScreen"
                component = {RestaurantMapScreen}
                // options={{
                //     headerShown: false,
                //     ...TransitionPresets.RevealFromBottomAndroid
                // }}
            />
        </Auth.Navigator>
    )
} 