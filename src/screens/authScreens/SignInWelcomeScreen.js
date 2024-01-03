import React ,{useState,useRef} from 'react'
import { View,Text,StyleSheet,Dimensions,Image } from 'react-native'
import {colors,parameters,title} from "../../global/styles"
import { Icon,Button,SocialIcon} from 'react-native-elements'
import Header from '../../components/Header'
import * as Animatable from 'react-native-animatable'
import Swiper from 'react-native-swiper'

export default function SignInWelcomeScreen({navigation}){
    return(
        <View style = {{flex:1}}>
            <View style = {{flex:3,justifyContent:"flex-start",alignItems:"center",paddingTop:20}}>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}} >IN YOUR AREA</Text>
            </View>

            <View style = {{flex:4,justifyContent:"center"}}>
                <Swiper autoplay = {true}>
                    <View style ={styles.slide1} >
                        <Image 
                            source={{uri:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_533/https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2018/10/Unhealthy-Food-Chart.jpg"}}
                            style = {{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style ={styles.slide2} >
                        <Image 
                            source={{uri:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                            style = {{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style ={styles.slide3} >
                        <Image 
                            source={{uri:"https://hips.hearstapps.com/hmg-prod/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?resize=1200:*"}}
                            style = {{height:"100%",width:"100%"}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style= {{flex:4,justifyContent:"flex-end",marginBottom:20}}>
                <View style={{marginHorizontal:20,marginTop:30}}>
                    <Button
                        title= "SIGN IN"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}
                        onPress={() =>{
                            navigation.navigate("SignInScreen")
                        }}
                
                />
                </View>
                <View style = {{marginHorizontal:20,marginTop:30}} >
                    <Button
                        title= "Create an account"
                        buttonStyle ={styles.createButton}
                        titleStyle = {styles.createButtonTitle}

                    />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    slide1:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD6EB"
    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97CAES"
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#92BBD9"
    },
    createButton:{
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        borderColor:colors.buttons
    },
    createButtonTitle:{
        color:colors.grey1,
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }
})