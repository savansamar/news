import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GET } from '../Constants/Api'
import Loader from '../Components/Loader'
import MemorizedList from '../Components/FlatList/MemorizedList'
import SplashScreen from 'react-native-splash-screen'
import Header from '../Components/Header'



const Main = ({navigation}) => {

  const [loading,setLoading]=React.useState(false)
  const [Data,setData]=React.useState([])
  const [total,setTotal]=React.useState(0)
  const [value,setValue]=React.useState('')

  const apiCall=async(e='')=>{
    setData([])
    setLoading(true)
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=7c94c4bf82af4e18a0ba534482945782&categroy=${e} `
    let response=await GET(url)
    if(!!response && response.status==='ok'){
      setLoading(false)
      setTotal(response.totalResults)
      setData(response.articles)
    }
  }

React.useEffect(()=>{
  SplashScreen.hide();
  apiCall()
},[])

const filter=(e)=>{
  apiCall(e)
}

const onPress=React.useCallback((e)=>{
  navigation.navigate('Information',{data:e})
  console.log("+++++",navigation)
},[])


  return (
   <View style={styles.container}>
     <Loader isLoading={loading} />
     <Header 
      search={true}
      drawer={true}
      onChange={(e)=>filter(e)}
     />
     <MemorizedList 
      data={Data}
      onPress={onPress}
     />
   </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
})