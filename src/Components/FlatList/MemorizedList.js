import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Item from '../Item/Item'

const MemorizedList = React.memo(({
    data=[],
    onPress=()=>{}

}) => 
{




    const _renderItem=React.useCallback(({item,index})=>{
       return(
            <Item key={index} index={index} item={item} onPress={()=>onPress(item)}  />
       )
    },[]) 

  return (
    <FlatList
        data={data} 
        numColumns={2}
        style={{marginHorizontal:4}}
        columnWrapperStyle={{flexWrap:"wrap",justifyContent:"space-between"}}
        contentContainerStyle={{borderWidth:0}}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}

    />
  )
})

export default MemorizedList

const styles = StyleSheet.create({})
