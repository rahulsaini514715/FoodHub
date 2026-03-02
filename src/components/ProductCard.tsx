import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { memo, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AnimatedHeaderHeightContext } from '@react-navigation/native-stack/lib/typescript/src/utils/useAnimatedHeaderHeight';

const screenW = Dimensions.get('window').width;
const GAP = 16;

// 2 cards per row with equal spacing
const PRODUCT_CARD_WIDTH = (screenW - GAP * 3) / 2;

type Product = {
  id: string;
  name: string;
  price: string;
  imageUrl?: string;
  unit?: string;
  etaText?: string;
  mrp?: number;
};

type Props = { item: Product };

const ProductCard = memo(({ item }: Props) => {
  const navigation = useNavigation();
  const scale = useRef(new Animated.Value(1)).current;
  const animateTo = (toValue: number) => {
    Animated.spring(scale, {
      toValue,
      useNativeDriver: true,
      friction: 6,
      tension: 120,
    }).start();
  };

  const displayUnit = '1 pack';
  const onPressIn = () =>
    Animated.spring(scale, {
      toValue: 0.98,
      useNativeDriver: true,
      friction: 6,
    }).start();

  const onPressOut = () =>
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 6,
    }).start();
  return (
    <Animated.View
      style={{ transform: [{ scale }], width: PRODUCT_CARD_WIDTH }}
    >
      <Pressable
        className="mb-1 rounded-2xl overflow-hidden bg-white shadow-md android:elevation"
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        // onPressIn={() => animateTo(0.98)}
        // onPressOut={() => animateTo(1)}
        onPress={() => {}}
      >
        <View className="h-36  bg-gray-100 dark:bg-zinc-900 relative rounded-xl overflow-hidden">
          <Image
            source={{ uri: item?.imageUrl }}
            resizeMode="cover"
            className="w-full h-full"
          />

          <View className="absolute left-2 bottom-2 px-2 py-1 rounded-full border border-gray-200 bg-white">
            <Text
              numberOfLines={1}
              className="text-[11px] font-semibold text-gray-600"
            >
              {displayUnit}
            </Text>
          </View>

          <Pressable
            onPress={() => {}}
            hitSlop={10}
            className="absolute right-2 top-2 px-2 rounded-full border border-gray-200 bg-white"
          >
            <Text className="text-sm">♡</Text>
          </Pressable>
        </View>

        <View className="px-4 py-3">
          <View className="h-[40px]">
            <Text
              className="font-semibold text-[14px] leading-5 text-slate-900"
              numberOfLines={1}
            >
              {item?.name}
            </Text>
          </View>

          <View className="mt-1 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Text className="text-[16px] font-extrabold text-slate-900 dark:text-zinc-100">
                ₹{Number(item.price).toFixed(0)}
              </Text>

              {item.mrp && Number(item.mrp) > Number(item.price) ? (
                <Text className="ml-2 text-xs text-gray-500 dark:text-zinc-400 line-through">
                  ₹{Number(item.mrp).toFixed(0)}
                </Text>
              ) : null}
            </View>
          </View>
        </View>
      </Pressable>
      <View className="border-t border-gray-100 items-center justify-center bg-violet-50 py-2">
        <Text className="text-[12px] font-bold tracking-tight text-violet-700">
          <Text className="text-yellow-600 font-bold">⚡︎ </Text>
          GET IN 16 MIN
        </Text>
      </View>
    </Animated.View>
  );
});

export default ProductCard;

const styles = StyleSheet.create({});
