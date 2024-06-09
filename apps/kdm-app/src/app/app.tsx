import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { RootStack } from './navigation';

export const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <PaperProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </PaperProvider>
  </GestureHandlerRootView>
);
