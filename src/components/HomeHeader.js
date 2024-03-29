import React from "react";
import { View,Text,StyleSheet } from "react-native"; 
import {Icon,withBadge} from 'react-native-elements'
//import Icon from 'react-native-vector-icons/FontAwesome'; 
import {colors,parameters} from '../global/styles'

export default function HomeHeader({navigation}){
    const BadgeIcon = withBadge(3)(Icon);
    return(
        <View style ={styles.header}>
            <View style ={{alignItems:"center",justifyContent:"center",marginLeft:15}}>
                <Icon 
                    name = "menu"
                    color= {colors.cardbackground}
                    size={32}
                    onPress={() => {
                        navigation.toggleDrawer()
                    }}
                />
            </View>
            <View style ={{alignItems:"center",justifyContent:"center"}}>
                <Text style={{color:colors.cardbackground,fontSize:25,fontWeight:'bold'}}>Zomato</Text>
            </View>
            <View style ={{alignItems:"center",justifyContent:"center",marginRight:15}} >
                <BadgeIcon 
                  name = "shopping-cart"
                  size = {35}
                  color = {colors.cardbackground}

                />
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    header:{
        flexDirection: 'row',
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        justifyContent: 'space-between'

    }
})