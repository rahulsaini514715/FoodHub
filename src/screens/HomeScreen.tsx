import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import BannerCarousel from '../components/BannerCarousel'

const HomeScreen = () => {
  const [query, setQuery] = useState("");


  const products = [
  {
    id: '1',
    name: 'Buffalo Milk',
    price: 80,
    imageUrl: 'https://www.bbassets.com/media/uploads/p/l/40149834_1-nandini-shubham-milk.jpg',
  },
  {
    id: '2',
    name: 'Cow Milk',
    price: 60,
    imageUrl: 'https://www.bbassets.com/media/uploads/p/l/40018647_5-nandini-homogenised-toned-milk.jpg',
  },
  {
    id: '3',
    name: 'Curd',
    price: 45,
    imageUrl: 'https://www.bbassets.com/media/uploads/p/l/40018651_3-nandini-curd.jpg',
  },
  {
    id: '4',
    name: 'Butter',
    price: 55,
    imageUrl: 'https://www.bbassets.com/media/uploads/p/l/40018653_2-nandini-butter.jpg',
  },
  {
    id: '5',
    name: 'Ghee',
    price: 520,
    imageUrl: 'https://www.bbassets.com/media/uploads/p/l/40018654_4-nandini-pure-ghee.jpg',
  },
];


  return (
    <SafeAreaView edges={["top"]} className='flex-1 bg-green-700'>
      <StatusBar barStyle={"light-content"} backgroundColor="#15803d" translucent={false} />
      <View className='bg-green-700'>
        <Header />
        <View className='px-4 pb-4'>
          <SearchBar value={query} onChange={setQuery} />
        </View>
      </View>

      <ScrollView className='flex-1 bg-white rounded-t-3xl'>
        <View className='p-4'>
          <View className='pt-4'>
            <BannerCarousel />
          </View>

          {/* categories */}
          {/* <View>

          </View> */}

          <View className='px-4 mt-3'>
            <View className='flex-row items-center mt-3 justify-between'>
              <Text className='text-xl font-bold'>Flash Sale</Text>
              <Text className='text-purple-600'>View All</Text>
            </View>
          </View>

          <View className='px-4 mt-3'>
            <View className='flex-row items-center mt-3 justify-between'>
              <Text className='text-xl font-bold'>Pujo Special</Text>
              <Text className='text-purple-600'>View All</Text>
            </View>
          </View>

          <ScrollView>
              {
                products?.map((p)=>(
                  <View>
                    <View className='h-32'>
                       <Image source={{uri:p.imageUrl}} className='w-full h-full' resizeMode='cover'/>
                    </View>
                  </View>
                ))
              }
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})