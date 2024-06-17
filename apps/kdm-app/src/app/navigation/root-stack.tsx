import { KdmCardSelectPage } from '@pages/kdm';
import React from 'react';
import { BottomTabs, Stack, pageScreenOptions } from './bottom-tab';

export const RootStack = () => (
  <Stack.Navigator
    screenOptions={pageScreenOptions}
    initialRouteName="BottomTabs"
  >
    <Stack.Screen name="BottomTabs" component={BottomTabs} />
    <Stack.Screen name="KdmCardSelectPage" component={KdmCardSelectPage} />
  </Stack.Navigator>
);
