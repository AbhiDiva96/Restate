import React, { Component } from 'react'
import { ScrollView, Text, View , Image, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn  = () => {

   const handleLogin = () => {  
    console.log("login")
  }

    return (
       <SafeAreaView className='bg-white h-full'>
           <ScrollView contentContainerClassName='h-full'>
                <Image source={images.onboarding}  className='w-full h-4/6' resizeMode='contain' />
                 <View className='px-10'>
                     <Text className='text-base font-rubik text-center uppercase text-black-200'>Welcome to Real scout</Text>
                     <Text className='text-3xl font-rubik-bold text-center mt-2 font-bold'> Let's Get You Closer To {"\n"} 
                     <Text className='text-blue-500'> 
                       Your Ideal Home
                      </Text>
                      </Text>
                    <Text className='font-rubik text-black-200 text-center mt-12'>Login to Real Scout with Google</Text>
               

                 <TouchableOpacity  onPress={handleLogin} className='bg-white shadow-lg shadow-zinc-500 rounded-full mt-4 w-full'> 
                   <View className='flex flex-row justify-center items-center'> 
                    <Image source={icons.google} resizeMode='contain' className='w-5 h-5 ' />
                    <Text className='text-lg text-black-200 text-center font-bold m-4'>
                    Continue with Google
                    </Text>               
                   </View>
                  </TouchableOpacity>
            </View>
           </ScrollView>
       </SafeAreaView>
    )
  }


export default SignIn
