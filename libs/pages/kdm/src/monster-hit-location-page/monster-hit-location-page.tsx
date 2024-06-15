import { useMonsterHitLocations } from '@entities/kdm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { List, SafeAreaView, TopAppBar } from '@shared/ui';
import { FlatList } from 'react-native';

export const MonsterHitLocationPage = () => {
  const { navigate } = useNavigation();
  const {
    params: { aspectRatio },
  } = useRoute<ReactNavigation.RouteProps<'KdmMonsterHitLocationPage'>>();
  const { data: monsterHitLocations } = useMonsterHitLocations();

  return (
    <SafeAreaView>
      <TopAppBar variant="small" title="Monster Hit Location" />
      <FlatList
        data={monsterHitLocations}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { name, monster, imageUrl } }) => {
          return (
            <List.Item
              title={name}
              description={monster?.name}
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
