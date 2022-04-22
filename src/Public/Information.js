import { StyleSheet, Text, View,Image,ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const Information = ({route,navigation}) => {

  const [data,setData]=React.useState({...route.params.data})

 React.useEffect(()=>{
  console.log("+++",route)
 },[])

  return (
    <View style={styles.container}>
       <Header 
        title='New Details'
        back={true}
        container={{backgroundColor:"#1fb18a"}}
        onBack={()=>navigation.goBack()}
     />
     <ScrollView contentContainerStyle={{flexGrow:1,marginTop:5}}>
        <Image source={{uri:data?.urlToImage}}  style={styles.img}/>
       <View style={{flex:1,width:"96%",alignSelf:"center"}}>
       <Text style={styles.desc}>{data.description}</Text>
       <Text style={styles.author}>Author:{data.source.name}</Text>
       <Text style={styles.content}>{data.content}</Text>

       </View>
     </ScrollView>
    </View>
  )
}

export default Information

const styles = StyleSheet.create({
conatiner:{
  flex:1,
  backgroundColor:"white"
},
img:{
  height:Dimensions.get('screen').height*0.2,
  width:"100%",
  resizeMode:"cover"
},
desc:{
  fontSize:16,
  width:"100%",
  flexWrap:"wrap",
  fontWeight:'bold',
  color:"#707475",
  marginTop:10
},
author:{
  fontSize:14,
  marginTop:10,
  color:"#808485"

},
content:{
  fontSize:13,
  marginTop:10,
  color:"#808485"

}

})