import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BannerCarousel = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='px-1 pt-4'>
       <View className='mr-2'>
         <Image source={{uri:"https://img.freepik.com/premium-photo/flat-lay-healthy-vegetarian-dinner-table-setting-sandwiches-with-tomato-cucumber-avocado-strawberry-herbs-olives-snacks-clean-eating-vegan-food_2829-3574.jpg"}} className='w-80 h-44 rounded-xl' resizeMode='cover'/>
       </View>

       <View className='mr-2'>
         <Image source={{uri:"https://content.jdmagicbox.com/v2/comp/hyderabad/u1/040pxx40.xx40.220319152238.e7u1/catalogue/pnr-food-plaza-and-restaurant-hyderabad-restaurants-m6h57h0sej.jpg"}} className='w-80 h-44 rounded-xl' resizeMode='cover'/>
       </View>
    </ScrollView>
  )
}

export default BannerCarousel

const styles = StyleSheet.create({})