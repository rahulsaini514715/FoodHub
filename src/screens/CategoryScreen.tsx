import { FlatList, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../api/apiClient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons' 
import ProductCard from '../components/ProductCard';

type Route = RouteProp<{ params: { categoryName?: string } }, 'params'>;

const CategoryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<Route>();

  const initialCategoryName = route?.params?.categoryName;

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories, // ❗ function call nahi karna
  });

  const [selectedCategoryName,setSelectedCategoryName] = useState(initialCategoryName || categories?.[0]?.name)

  const [modalVisible,setModalVisible] = useState(false)

  const selectedCategory = categories?.find((c:any)=> c.name === selectedCategoryName);
  const products = selectedCategory?.products || [];
  return (
    <SafeAreaView className='flex-1 bg-gray-100'>
      <StatusBar barStyle={"dark-content"} backgroundColor="#e7e6e6"/>
       
       <View className='px-4 pt-1 pb-2 bg-white'>
        <View className='flex-row items-center justify-between'>
          <View className='flex-row items-center justify-between'>
            <Pressable className='p-2'  onPress={()=> navigation.goBack()}>
              <Ionicons name='arrow-back' size={22} color="#000"/>
            </Pressable>

            <Pressable className='flex-row items-center gap-2'>
              <Text>{selectedCategoryName}</Text>
              <Ionicons name='chevron-down-outline' size={18} color="#000"/>
            </Pressable>
          </View>

           <Pressable>
              <Ionicons name='search-outline' size={22} color="#000"/>
            </Pressable>

        </View>
       </View>

       <View className='flex-1 px-1 mt-4'>
         <FlatList
           data={products}
           keyExtractor={(i)=> i.id}
           numColumns={2}
           columnWrapperStyle={{justifyContent:"space-between"}}
           showsVerticalScrollIndicator={false}
           renderItem={({item}) => <ProductCard item={item}/> }
          //  contentContainerStyle={{paddingBottom:totalItems > 0 ? 80 : 0}}
           ListEmptyComponent={<Text className='text-gray-500 text-center'>No products in this Category</Text>}
         />
       </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
