import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthRoutes, AuthStackParamList } from '../navigation/Routes';

type FormData = { email: string; password: string };

const LoginScreen = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: { email: '', password: '' },
  });

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View className="flex-1 bg-white p-4 justify-center">
      <Text className="text-2xl font-bold text-center text-green-600">
        Get Started
      </Text>
      <Text className="text-center text-gray-600 mt-2">
        Enter your details to pick fresh food
      </Text>
      <Text className="text-sm font-medium mt-6">Email</Text>

      <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="Enter Email"
            autoCapitalize="none"
            keyboardType='email-address'
            className='border-b border-gray-300 py-2'
          />
        )}
      />



      <Text className="text-sm font-medium mt-6">Password</Text>

      <Controller
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="Enter Password"
            secureTextEntry
            className='border-b border-gray-300 py-2'
          />
        )}
      />

      <TouchableOpacity className='bg-green-600 p-3 rounded-full mt-6'>
        <Text className='text-white text-center font-bold'>CONTINUE</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={handleGoogleSignIn}
        className='bg-white border border-gray-300 p-3 rounded-full mt-4 flex-row justify-center items-center'
      >
        <Image 
          source={{
            uri:"",
          }}
          className='w-5 h-5 mr-2'
        />
        <Text className='text-gray-800 font-bold'>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate(AuthRoutes.SignUp)} className='mt-4'>
        <Text className='text-center text-blue-500'>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
