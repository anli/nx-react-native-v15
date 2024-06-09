import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { Platform, useColorScheme } from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  ProviderProps,
  adaptNavigationTheme,
} from 'react-native-paper';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});
const combinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
};
const combinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
};

export const useTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? combinedDarkTheme : combinedDefaultTheme;
};

export const ThemeProvider = ({ children, ...rest }: ProviderProps) => {
  const theme = useTheme();

  return (
    <PaperProvider theme={theme} {...rest}>
      {Platform.OS === 'web' ? (
        <style type="text/css">{`
  @font-face {
    font-family: 'MaterialCommunityIcons';
    src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
  }
`}</style>
      ) : null}
      {children}
    </PaperProvider>
  );
};
