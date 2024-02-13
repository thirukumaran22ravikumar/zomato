import React from "react";
//import { View,Text,StyleSheet} from "react-native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"
import {colors} from "../global/styles"
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from '../screens/SearchScreeen'
import MyOrderScreen from '../screens/MyOrderScreen'
import MyAccountScreen from "../screens/MyAccountScreen";
import { ClientStack } from "./clientStack";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <ClientTabs.Navigator
            tabBarOption = {{
                activeTintColor : colors.buttons
            }}
        
        >
            <ClientTabs.Screen 
                name="HomeScreens"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: "Home",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name="home"
                                type="material"
                                color={color}
                                size={size}
                            
                            />

                        ),
                        headerShown: false 

                    }
                }
            
            />
            <ClientTabs.Screen 
                name="Search Screen"
                component={ClientStack}
                options={
                    {
                        tabBarLabel: "Search",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name="search"
                                type="material"
                                color={color}
                                size={size}
                            
                            />

                        )

                    }
                }
            
            />
            <ClientTabs.Screen 
                name="My OrdersScreen"
                component={MyOrderScreen}
                options={
                    {
                        tabBarLabel: "My Orders",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name="view-list"
                                type="material"
                                color={color}
                                size={size}
                            
                            />

                        )

                    }
                }
            
            />
            <ClientTabs.Screen 
                name="My Account"
                component={MyAccountScreen}
                options={
                    {
                        tabBarLabel: "My Account",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name="person"
                                type="material"
                                color={color}
                                size={size}
                            
                            />

                        )

                    }
                }
            
            />

        </ClientTabs.Navigator>
    )
       
} 