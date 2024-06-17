import {
  KdmCardTypeDetailPage,
  KdmCardTypeListPage,
  KdmShowdownPage,
} from '@pages/kdm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@shared/ui';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

const Tab = createMaterialBottomTabNavigator();
const getTabBarIcon =
  (focusedIconName: string, unfocusedIconName: string) =>
  ({ color, focused }: { focused: boolean; color: string }) =>
    (
      <Icon
        name={focused ? focusedIconName : unfocusedIconName}
        color={color}
        size={24}
      />
    );

export const Stack =
  Platform.OS === 'ios' ? createNativeStackNavigator() : createStackNavigator();

export const pageScreenOptions = {
  headerShown: false,
};

const KdmCardsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={pageScreenOptions}
      initialRouteName="KdmCardTypeListPage"
    >
      <Stack.Screen
        name="KdmCardTypeListPage"
        component={KdmCardTypeListPage}
      />
      <Stack.Screen
        name="KdmCardTypeDetailPage"
        component={KdmCardTypeDetailPage}
      />
    </Stack.Navigator>
  );
};

const KdmShowdownStack = () => {
  return (
    <Stack.Navigator screenOptions={pageScreenOptions}>
      <Stack.Screen name="KdmShowdownPage" component={KdmShowdownPage} />
    </Stack.Navigator>
  );
};

const configs = [
  {
    name: 'KdmShowdownTab',
    component: KdmShowdownStack,
    tabBarLabel: 'Showdown',
    tabBarIcon: getTabBarIcon('paw', 'paw-outline'),
  },
  {
    name: 'KdmCardTypeListTab',
    component: KdmCardsStack,
    tabBarLabel: 'Cards',
    tabBarIcon: getTabBarIcon('book', 'book-outline'),
  },
];

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="KdmShowdownTab"
      safeAreaInsets={{
        bottom: Platform.select({ ios: 16, default: undefined }),
      }}
    >
      {configs.map((_config) => (
        <Tab.Screen
          key={_config.name}
          name={_config.name}
          component={_config.component}
          options={{
            tabBarLabel: _config.tabBarLabel,
            tabBarIcon: _config.tabBarIcon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
