import { PrinciplePage } from '@pages/kdm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import { BottomTabs } from './bottom-tab';

const screenOptions = {
  headerShown: false,
};
const Stack =
  Platform.OS === 'ios' ? createNativeStackNavigator() : createStackNavigator();

export const RootStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="BottomTabs" component={BottomTabs} />
    <Stack.Screen name="KdmPrinciplePage" component={PrinciplePage} />
  </Stack.Navigator>
);
