import { StyleSheet, Text, View,ImageBackground,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

var {height,width}=Dimensions.get('screen')

const Item = ({
    item,
    key,
    index,
    onPress=()=>{}
}) => {
  return (
    <ImageBackground key={key} source={{uri:item.urlToImage}} style={styles.container} >
    <TouchableOpacity style={styles.section} onPress={()=>onPress(key)} >
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
        
    </ImageBackground>
  )
}

export default Item

const styles = StyleSheet.create({

    container:{
        flex:1,
        height:height*0.18,
        maxWidth:"50%",
        marginTop:5,
        marginHorizontal:3,
    
    },
    section:{
        height:"100%",
        width:"100%",
        backgroundColor:"transparent",
        justifyContent:"flex-end",
        
    },
    title:{
        fontSize:10,
        color:"white",
        fontWeight:"bold",
        marginLeft:3,
        flexWrap:"wrap",
        marginBottom:5,
        overflow:"visible",
        height:35
    }

})