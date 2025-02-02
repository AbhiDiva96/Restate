import { useLocalSearchParams } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

const properties = () => {
   const {id} = useLocalSearchParams();
    return (
      <View>
        <Text> properity {id} </Text>
      </View>
    )
  }

  export default properties;


