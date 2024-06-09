import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, SafeAreaView, Text } from '@shared/ui';
import React from 'react';
import { Platform, View } from 'react-native';

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
    <SafeAreaView edges={['top', 'bottom']}>
      <View>
        <Text>Text</Text>
      </View>
      <Button.FAB icon="plus" />
    </SafeAreaView>
  );
};
