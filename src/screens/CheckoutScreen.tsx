import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useCartStore } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAddressStore } from '../store/useAddressStore';
import Ionicons from '@react-native-vector-icons/ionicons';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const { items: cartItems, clearCart } = useCartStore();
  const { user } = useAuthStore();

  const { addresses, selectedAddressId, selectAddress, removeAddress } = useAddressStore();
  const [modalVisible, setModalVisible] = useState(false);
  const [deliverySlot, setDeliverySlot] = useState("ASAP");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'ONLINE'>('ONLINE');
  const [isProcessing, setIsProcessing] = useState(false);
  const selectedAddress = useMemo(
  () =>
    addresses.find((a) => a.id === selectedAddressId) ?? null,
  [addresses, selectedAddressId]
);
  return (
    <SafeAreaView className='flex-1 bg-gray-50'>
      <View>
        <Text className='text-xl font-extrabold text-center'>Checkout</Text>
      </View>

      <ScrollView className='flex-1 px-4' showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <Text>Deliver to</Text>
        <View>
          <View>
            <View>
              <Ionicons name='home-outline' size={22} color="#16a34a" />
            </View>

            <View className='flex-1'>
              <View className='flex-row justify-between items-start'>
                <View>
                   <Text className='text-base font-bold'>{selectedAddress?.type}</Text>
                   <Text className='text-gray-700 font-medium mt-1'>{selectedAddress?.name}</Text>
                   
                </View>
                <Pressable className='px-2 py-1'>
                  <Text className='text-purple-600 font-semibold'>Change</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({})