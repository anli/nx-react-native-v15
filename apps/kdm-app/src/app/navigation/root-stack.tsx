import {
  CardPage,
  GearPage,
  InnovationPage,
  PrinciplePage,
  SettlementEventPage,
  SettlementLocationPage,
  WeaponSpecializationPage,
} from '@pages/kdm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import { BottomTabs } from './bottom-tab';

const pageScreenOptions = {
  headerShown: false,
};
const Stack =
  Platform.OS === 'ios' ? createNativeStackNavigator() : createStackNavigator();
const modalScreenOptions =
  Platform.OS === 'ios'
    ? {
        presentation: 'modal',
      }
    : TransitionPresets.ModalPresentationIOS;

export const RootStack = () => (
  <Stack.Navigator screenOptions={pageScreenOptions}>
    <Stack.Screen name="BottomTabs" component={BottomTabs} />
    <Stack.Screen name="KdmPrinciplePage" component={PrinciplePage} />
    <Stack.Screen name="KdmGearPage" component={GearPage} />
    <Stack.Screen name="KdmInnovationPage" component={InnovationPage} />
    <Stack.Screen
      name="KdmSettlementEventPage"
      component={SettlementEventPage}
    />
    <Stack.Screen
      name="KdmSettlementLocationPage"
      component={SettlementLocationPage}
    />
    <Stack.Screen
      name="KdmWeaponSpecializationPage"
      component={WeaponSpecializationPage}
    />
    {/* @ts-expect-error value Stack typing */}
    <Stack.Group screenOptions={modalScreenOptions}>
      <Stack.Screen name="KdmCardPage" component={CardPage} />
    </Stack.Group>
  </Stack.Navigator>
);
