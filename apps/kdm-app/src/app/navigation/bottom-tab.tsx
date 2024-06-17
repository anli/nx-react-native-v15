import { KdmCardTypeListPage } from '@pages/kdm';
import { Icon } from '@shared/ui';
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

const configs = [
  {
    name: 'KdmCardTypeListTab',
    component: KdmCardTypeListPage,
    tabBarLabel: 'Cards',
    tabBarIcon: getTabBarIcon('book', 'book-outline'),
  },
];

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="KdmCardTypeListTab"
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
