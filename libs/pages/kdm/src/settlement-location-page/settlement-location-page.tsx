import { useSettlementLocations } from '@entities/kdm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { List, SafeAreaView, TopAppBar } from '@shared/ui';
import { FlatList } from 'react-native';

export const SettlementLocationPage = () => {
  const { navigate } = useNavigation();
  const {
    params: { aspectRatio },
  } = useRoute<ReactNavigation.RouteProps<'KdmSettlementLocationPage'>>();
  const { data: settlementLocations } = useSettlementLocations();

  return (
    <SafeAreaView>
      <TopAppBar variant="small" title="Settlement Locations" />
      <FlatList
        data={settlementLocations}
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
