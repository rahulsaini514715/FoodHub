// import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'
// import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// import { MainStackParamList } from '../navigation/Routes'
// import { CartItem, useCartStore } from '../store/useCartStore'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import Ionicons from '@react-native-vector-icons/ionicons'

// const CartScreen = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
//   const updateQunatity = useCartStore((s) => s.updateQuantity);
//   const removeItem = useCartStore((s) => s.removeItem);
//   const addItem = useCartStore((s) => s.addItem);


//   const exclusiveDeals = [
//     {
//       id: 'deal1',
//       title: 'Fresh Indian Baasa / Pangasius - Boneless Fillet',
//       price: 340,
//       image: 'https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg',
//       badge: '56% OFF',
//     },
//     {
//       id: 'deal2',
//       title: 'Large Catfish / Etta Koori - Steaks',
//       price: 450,
//       image: 'https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg',
//       badge: '13% OFF',
//     },
//     {
//       id: 'deal3',
//       title: 'Premium Rohu - Curry Cut',
//       price: 380,
//       image: 'https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg',
//       badge: '25% OFF',
//     }
//   ];


//   const renderItem = ({ item }: { item: CartItem }) => (
//     <View className='bg-white rounded-xl p-4 mb-4 flex-row shadow-sm'>
//       <View className='flex-1 pr-3'>
//         <Text className='text-base font-semibold'>{item?.name}</Text>
//         <Text className='text-lg font-extrabold mt-1'>{item?.price * (item.quantity || 1)}</Text>
//         <Text className='text-sm text-gray-500'>1 Pack</Text>

//         <View className='flex-row items-center mt-2'>
//           <Ionicons name="bicycle" size={16} color="#687288" />
//           <Text>Today in 16 minutes</Text>
//         </View>

//         <Pressable className='flex-row items-center mt-2' onPress={() => removeItem(item?.id)}>
//           <Ionicons name='trash-outline' size={16} color="#687280" />
//           <Text className='text-sm text-gray-500 ml-2'>Remove</Text>
//         </Pressable>
//       </View>

//       <View className='items-center w-28'>
//         <Image source={{ uri: item?.imageUrl }} className='w-24 h-24 rounded-lg mb-3' />
//         <View className='flex-row item-center border border-green-200 rounded-lg px-3 py-1 justify-between w-full'>
//           <Pressable onPress={() => updateQunatity(item.id, -1)}>
//             <Text className='text-lg font-bold text-green-600'>-</Text>
//           </Pressable>
//           <Text className='text-base font-semibold'>{item?.quantity}</Text>
//           <Pressable onPress={()=> updateQunatity(item.id, 1)}>
//             <Text className='text-lg font-bold text-green-600'>+</Text>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );

//   const renderDeal = (d: typeof exclusiveDeals[0]){
//     const quantity = items?.find((i: any) => i.id == d.id)?.quantity || 0;
//     return (
//       <View className='bg-white rounded-lg p-3 w-48 mr-4 shadow-sm flex-col justify-between' key={d.id} >
//         <Text className='bg-pink-500 text-white px-2 py-1 rounded-full mb-2 text-xs font-bold self-start'>{d.badge}</Text>
//         <Image source={{ uri: d.image }} className='h-28 w-full rounded-md mb-2' />
//         <Text className='text-sm font-semibold mb-1' numberOfLines={2}>{d.title}</Text>
//         <Text>₹{d.price}</Text>
//         {
//           quantity > 0 ? (
//             <View className='flex-row items-center border border-gray-200 rounded-lg px-3 py-1 justify-between w-full'>
//               <Pressable onPress={() => updateQunatity(item.id, -1)}>
//                 <Text className='text-lg font-bold text-green-600'>-</Text>
//               </Pressable>
//               <Text className='text-base font-semibold'>{quantity}</Text>
//               <Pressable onPress={()=> updateQunatity(d.id, 1)}>
//                 <Text className='text-lg font-bold text-green-600' >+</Text>
//               </Pressable>
//             </View>
//           ) : (
//               <Pressable onPress={()=> addItem(id:d.id,name:d.title,price:d.price,imageUrl:id.image)} className='bg-green-600 py-2 rounded-md items-center'>
//                  <Text className='text-white font-bold'>
//                     Add To Cart
//                  </Text>
//               </Pressable>
//           )
//         }
//       </View>
//     )
//   }



//   return (
//     <SafeAreaView className='flex-1 bg-gray-50'>
//       <Text className='text-xl font-bold text-center py-4'>Your Cart</Text>

//       <View className='bg-purple-50 border border-purple-300 border-dashed rounded-lg mx-4 p-3 mb-4'>
//         <Text>Get 60 count prawns @299 | Use code: 299P (TCA)</Text>
//       </View>

//       <FlatList
//         data={items}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         className='px-4'
//         ListFooterComponent={
//           <View className='mt-6'>
//             <Text className='text-lg font-bold mb-4'>Exclusive offers for you</Text>
//             <ScrollView horizontal showsVerticalScrollIndicator={false} className='pb-6'>
//               {exclusiveDeals?.map(renderDeal)}
//             </ScrollView>
//           </View>
//         }
//       />
//     </SafeAreaView>
//   )
// }

// export default CartScreen

// const styles = StyleSheet.create({})







import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainStackParamList } from '../navigation/Routes'
import { CartItem, useCartStore } from '../store/useCartStore'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@react-native-vector-icons/ionicons'

const CartScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const items = useCartStore((s) => s.items);
  const updateQunatity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const addItem = useCartStore((s) => s.addItem);

  const exclusiveDeals = [
    {
      id: 'deal1',
      title: 'Fresh Indian Baasa / Pangasius - Boneless Fillet',
      price: 340,
      image: 'https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg',
      badge: '56% OFF',
    },
    {
      id: 'deal2',
      title: 'Large Catfish / Etta Koori - Steaks',
      price: 450,
      image: 'https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg',
      badge: '13% OFF',
    },
    {
      id: 'deal3',
      title: 'Premium Rohu - Curry Cut',
      price: 380,
      image: 'https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg',
      badge: '25% OFF',
    }
  ];

  const renderItem = ({ item }: { item: CartItem }) => (
    <View className='bg-white rounded-xl p-4 mb-4 flex-row shadow-sm'>
      <View className='flex-1 pr-3'>
        <Text className='text-base font-semibold'>{item?.name}</Text>
        <Text className='text-lg font-extrabold mt-1'>
          {item?.price * (item.quantity || 1)}
        </Text>
        <Text className='text-sm text-gray-500'>1 Pack</Text>

        <View className='flex-row items-center mt-2'>
          <Ionicons name="bicycle" size={16} color="#687288" />
          <Text>Today in 16 minutes</Text>
        </View>

        <Pressable
          className='flex-row items-center mt-2'
          onPress={() => removeItem(item?.id)}
        >
          <Ionicons name='trash-outline' size={16} color="#687280" />
          <Text className='text-sm text-gray-500 ml-2'>Remove</Text>
        </Pressable>
      </View>

      <View className='items-center w-28'>
        <Image
          source={{ uri: item?.imageUrl }}
          className='w-24 h-24 rounded-lg mb-3'
        />

        <View className='flex-row items-center border border-green-200 rounded-lg px-3 py-1 justify-between w-full'>
          <Pressable onPress={() => updateQunatity(item.id, -1)}>
            <Text className='text-lg font-bold text-green-600'>-</Text>
          </Pressable>

          <Text className='text-base font-semibold'>{item?.quantity}</Text>

          <Pressable onPress={() => updateQunatity(item.id, 1)}>
            <Text className='text-lg font-bold text-green-600'>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  const renderDeal = (d: typeof exclusiveDeals[0]) => {
    const quantity =
      items?.find((i: any) => i.id === d.id)?.quantity || 0;

    return (
      <View
        className='bg-white rounded-lg p-3 w-48 mr-4 shadow-sm flex-col justify-between'
        key={d.id}
      >
        <Text className='bg-pink-500 text-white px-2 py-1 rounded-full mb-2 text-xs font-bold self-start'>
          {d.badge}
        </Text>

        <Image
          source={{ uri: d.image }}
          className='h-28 w-full rounded-md mb-2'
        />

        <Text
          className='text-sm font-semibold mb-1'
          numberOfLines={2}
        >
          {d.title}
        </Text>

        <Text>₹{d.price}</Text>

        {quantity > 0 ? (
          <View className='flex-row items-center border border-gray-200 rounded-lg px-3 py-1 justify-between w-full'>
            <Pressable onPress={() => updateQunatity(d.id, -1)}>
              <Text className='text-lg font-bold text-green-600'>-</Text>
            </Pressable>

            <Text className='text-base font-semibold'>{quantity}</Text>

            <Pressable onPress={() => updateQunatity(d.id, 1)}>
              <Text className='text-lg font-bold text-green-600'>+</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable
            onPress={() =>
              addItem({
                id: d.id,
                name: d.title,
                price: d.price,
                imageUrl: d.image,
              })
            }
            className='bg-green-600 py-2 rounded-md items-center'
          >
            <Text className='text-white font-bold'>
              Add To Cart
            </Text>
          </Pressable>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView className='flex-1 bg-gray-50'>
      <Text className='text-xl font-bold text-center py-4'>
        Your Cart
      </Text>

      <View className='bg-purple-50 border border-purple-300 border-dashed rounded-lg mx-4 p-3 mb-4'>
        <Text>
          Get 60 count prawns @299 | Use code: 299P (TCA)
        </Text>
      </View>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        className='px-4'
        ListFooterComponent={
          <View className='mt-6'>
            <Text className='text-lg font-bold mb-4'>
              Exclusive offers for you
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className='pb-6'
            >
              {exclusiveDeals.map(renderDeal)}
            </ScrollView>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});