import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform, Text, View } from 'react-native';

const Stack =
  Platform.OS === 'ios' ? createNativeStackNavigator() : createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomePage"
      component={HomePage}
      options={screenOptions}
    />
  </Stack.Navigator>
);

const HomePage = () => {
  return (
    <View className='pt-4'>
      <Text>Text</Text>
    </View>
  );
};
