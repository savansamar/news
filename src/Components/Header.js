import { Dimensions, StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from 'react-native'
import React from 'react'



const Header = ({
    container={},
    title="Top Headlines",
    back=false,
    search=false,
    drawer=false,
    onChange=()=>{},
    onBack=()=>{}
}) => {

const [show,setShow]=React.useState(false)
const [value,setValue]=React.useState('')

  return (

    <View style={{...styles.container,...container}}>
    
   {
       !!!show ?
       <View style={styles.row}>
       {
          !! back &&  <TouchableOpacity onPress={onBack} >
           <Image source={require('../../Assets/back.png')} style={styles.img} />
       </TouchableOpacity>
       }
            <Text style={styles.title}>{title}</Text>
        </View>:
        <TextInput 
            style={styles.input}
            value={value}
            onChangeText={(e)=>{
                setValue(e)
                onChange(e)
            }}
        
        />
}



    <View  style={styles.row}>
   {
       !!search &&  <TouchableOpacity onPress={()=>{
           setShow(!show)
        setValue('')
           }}>
       <Image source={require('../../Assets/filter.png')} style={styles.img} />
   </TouchableOpacity>
   }
   {
    !!drawer &&  <TouchableOpacity>
    <Image source={require('../../Assets/menu.png')} style={{...styles.img,marginHorizontal:5,marginLeft:10}} />
</TouchableOpacity>
   }
    </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height:Dimensions.get('screen').height*0.08,
        width:'100%',
        flexDirection:"row",

        justifyContent:"space-between",
        alignItems:'center',
        paddingHorizontal:10,
        backgroundColor:"white",
        elevation:10
    },
row:{
    flexDirection:"row",

        alignItems:'center'
},

    img:{
        height:19,
        width:19,
        resizeMode:"contain"
    },
    title:{
        fontSize:18,
        color:"black",
        fontWeight:"bold",
        marginHorizontal:10
    },
    input:{
        width:"80%",
        height:"70%",borderRadius:10,
        backgroundColor:"#ededf0"
    }
})