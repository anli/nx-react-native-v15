import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView, StatusBar, ThemeProvider } from '@shared/ui';
import { RootStack } from './navigation';

export const App = () => (
  <GestureHandlerRootView>
    <ThemeProvider>
      <StatusBar />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeProvider>
  </GestureHandlerRootView>
);
