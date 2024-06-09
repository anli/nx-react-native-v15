import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, SafeAreaView, Text } from '@shared/ui';
import { Platform, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

const Tab = createMaterialBottomTabNavigator();
const ReferenceTabBarIcon = ({ color, focused }: {
  focused: boolean;
  color: string;
}) => (
  <Icon name={focused ? "book" : "book-outline"} color={color} size={26} />
)

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      safeAreaInsets={{ bottom: Platform.select({ 'ios': 8, default: 0 }) }}
    >
      <Tab.Screen
        name="ReferenceStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Reference',
          tabBarIcon: ReferenceTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
}

const screenOptions = {
  headerShown: false,
};

const Stack =
  Platform.OS === 'ios' ? createNativeStackNavigator() : createStackNavigator();

const HomeStack = () => (
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
    <SafeAreaView edges={['top']}>
      <View>
        <Text>Text</Text>
      </View>
    </SafeAreaView>
  );
};
