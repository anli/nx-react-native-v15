import { useInnovations } from '@entities/kdm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { List, SafeAreaView, TopAppBar } from '@shared/ui';
import { FlatList } from 'react-native';

export const InnovationPage = () => {
  const { navigate } = useNavigation();
  const {
    params: { aspectRatio },
  } = useRoute<ReactNavigation.RouteProps<'KdmInnovationPage'>>();
  const { data: innovations } = useInnovations();

  return (
    <SafeAreaView>
      <TopAppBar variant="small" title="Innovations" />
      <FlatList
        data={innovations}
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
