import { useWeaponSpecializations } from '@entities/kdm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { List, SafeAreaView, TopAppBar } from '@shared/ui';
import { FlatList } from 'react-native';

export const WeaponSpecializationPage = () => {
  const { navigate } = useNavigation();
  const {
    params: { aspectRatio },
  } = useRoute<ReactNavigation.RouteProps<'KdmWeaponSpecializationPage'>>();
  const { data: weaponSpecializations } = useWeaponSpecializations();

  return (
    <SafeAreaView>
      <TopAppBar variant="small" title="WeaponSpecializations" />
      <FlatList
        data={weaponSpecializations}
        keyExtractor={(item) => item.name}
        renderItem={({ item: { name, imageUrl } }) => {
          return (
            <List.Item
              title={name}
              onPress={() => {
                navigate('KdmCardPage', { imageUrl, aspectRatio });
              }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
