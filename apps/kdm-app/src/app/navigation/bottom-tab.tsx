import { ReferencePage } from '@pages/kdm';
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

const screenOptions = {
  headerShown: false,
};

const Stack =
  Platform.OS === 'ios' ? createNativeStackNavigator() : createStackNavigator();

const ReferenceStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ReferencePage"
      component={ReferencePage}
      options={screenOptions}
    />
  </Stack.Navigator>
);
const configs = [
  {
    name: 'ReferenceStack',
    component: ReferenceStack,
    tabBarLabel: 'Reference',
    tabBarIcon: getTabBarIcon('book', 'book-outline'),
  },
];

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="ReferenceStack"
      safeAreaInsets={{ bottom: 16 }}
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
