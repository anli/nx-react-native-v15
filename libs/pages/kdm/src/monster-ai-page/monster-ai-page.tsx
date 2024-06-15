import { useMonsterAis, useMonsterBasics } from '@entities/kdm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { List, SafeAreaView, TopAppBar } from '@shared/ui';
import { FlatList } from 'react-native';

export const MonsterAiPage = () => {
  const { navigate } = useNavigation();
  const {
    params: { aspectRatio },
  } = useRoute<ReactNavigation.RouteProps<'KdmMonsterAiPage'>>();
  const { data: monsterAis } = useMonsterAis();
  const { data: monsterBasics } = useMonsterBasics();

  return (
    <SafeAreaView>
      <TopAppBar variant="small" title="Monster AI" />
      <FlatList
        data={[...monsterBasics, ...monsterAis]}
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
