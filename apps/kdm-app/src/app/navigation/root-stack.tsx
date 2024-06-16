import { KdmCardTypeDetailPage } from '@pages/kdm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import { BottomTabs } from './bottom-tab';

const pageScreenOptions = {
  headerShown: false,
};
const Stack =
  Platform.OS === 'ios' ? createNativeStackNavigator() : createStackNavigator();

export const RootStack = () => (
  <Stack.Navigator screenOptions={pageScreenOptions}>
    <Stack.Screen name="BottomTabs" component={BottomTabs} />
    <Stack.Screen
      name="KdmCardTypeDetailPage"
      component={KdmCardTypeDetailPage}
    />
  </Stack.Navigator>
);
