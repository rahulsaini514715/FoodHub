import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import BannerCarousel from '../components/BannerCarousel'
import { useQuery } from "@tanstack/react-query";
import { Category, fetchCategories } from '../api/apiClient'
import CategoryCard from '../components/CategoryCard'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainRoutes, MainTabParamList } from '../navigation/Routes'


function CategorySkeletonRow(){
  const placeholders = Array.from({length:8},(_, i) => i.toString());

  return (
    <View className='mt-4'>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className='pb-1'>
        {
        placeholders?.map((k)=>(
          <View className='mr-4 w-20 items-center' key={k}>
            <View className='h-16 w-16 rounded-full bg-zinc-200 animate-pulse'/>
            <View className='h-3 w-14 rounded-full bg-zinc-200 animate-pulse'/>
          </View>
        ))
        }
      </ScrollView>
    </View>
  )
}



const HomeScreen = () => {
  const [query, setQuery] = useState("");


  const products = [
    {
      id: '1',
      name: 'Buffalo Milk',
      price: 80,
      imageUrl: 'https://aumswow.com/life-veda/assets/images/ingredients/milk-indian-buffalo.jpg',
    },
    {
      id: '2',
      name: 'Cow Milk',
      price: 60,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKY3p91VuBdAdTnifDQ-bg0sB7H50zHDrW3g&s',
    },
    {
      id: '3',
      name: 'Curd',
      price: 45,
      imageUrl: 'https://images.apollo247.in/pd-cms/cms/2025-02/Curd%20Benefits%20(1).jpg?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w',
    },
    {
      id: '4',
      name: 'Butter',
      price: 55,
      imageUrl: 'https://m.media-amazon.com/images/I/717GgfVk6YL._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: '5',
      name: 'Ghee',
      price: 520,
      imageUrl: 'https://www.eatingwell.com/thmb/EY63AWae1w0ru7GZQBhYf5zoug8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-ghee-b7d45427a4064055a4b3d920cf6c22a1.jpg',
    },
  ];


  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })

  const navigation = useNavigation<NativeStackNavigationProp<MainTabParamList>>();

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
          <View className='px-4 mt-4'>
            <Text className='text-xl font-bold'>New Kitchen Essentials</Text>

            {
              isLoading ? (
                <CategorySkeletonRow/>
              ) : (
                <FlatList
                   data={categories ?? []}
                   horizontal
                   showsHorizontalScrollIndicator={false}
                   keyExtractor={(item)=> item.id}
                   className='mt-4'
                   renderItem={({item}) => (
                     <CategoryCard name={item?.name} image={item?.imageUrl} onPress={()=> navigation.navigate(MainRoutes.Category,{
                      categoryName:item?.name
                     })}/>
                   )}
                />
              )
            }
          </View>
          

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

          {/* <ScrollView>
              {
                products?.map((p)=>(
                  <View>
                    <View className='h-32'>
                       <Image source={{uri:p.imageUrl}} className='w-full h-full' resizeMode='cover'/>
                    </View>
                  </View>
                ))
              }
          </ScrollView> */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-4 pb-4"
          >
            {products?.map((p) => (
              <View key={p.id} className="w-64 mr-4 bg-white rounded-xl overflow-hidden">

                <View className="h-32 bg-gray-100">
                  <Image
                    source={{ uri: p.imageUrl }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>

                <View className="p-3">
                  <Text className="text-sm font-semibold">{p?.name}</Text>
                  <Text className="text-lg font-bold mt-2">₹{p.price}</Text>
                </View>

              </View>
            ))}
          </ScrollView>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})