import { StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { createNativeStackNavigator,TransitionPresets } from '@react-navigation/native-stack'
import SearchScreen from '../screens/SearchScreeen'
import SearchResultScreen from '../screens/SearchResultScreen'
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MenuProductScreen from '../screens/MenuProductScreen';
//import PreferenceScreen from '../screens/PreferenceScreen';

const client = createNativeStackNavigator()

export function ClientStack({navigation,route}) {

    useLayoutEffect(()=>{

        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName === "RestaurantHomeScreen" || "MenuProductScreen"){
            navigation.setOptions({tabBarVisible:false})
        }else{
            navigation.setOptions({tabBarVisible:true})
        }
        
        
    },[navigation,route])

  return (
    <client.Navigator>
        <client.Screen 
            name = "SearchScreen"
            component={SearchScreen}
            options = {
                ()=>({
                    headerShown:false
                })
            }
        />

        <client.Screen 
            name = "SearchResultScreen"
            component={SearchResultScreen}
            options = {
                ()=>({
                    headerShown:false
                })
            }
        />

        <client.Screen 
            name = "RestaurantHomeScreen"
            component={RestaurantHomeScreen}
            options = {
                ()=>({
                    headerShown:false
                })
            }
        />
        <client.Screen 
                name ="MenuProductScreen"
                component ={MenuProductScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
        /> 
        {/* <ClientSearch.Screen 
                name ="PreferenceScreen"
                component ={PreferenceScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
        />       */}
    </client.Navigator>
  )
}

