import { NavigationContainer } from '@react-navigation/native';
import {
  GestureHandlerRootView,
  StatusBar,
  ThemeProvider,
  useTheme,
} from '@shared/ui';
import { RootStack } from './navigation';

export const App = () => {
  const theme = useTheme();

  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <StatusBar />
        <NavigationContainer theme={theme}>
          <RootStack />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
