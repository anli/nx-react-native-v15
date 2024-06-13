import { useSettlementEvents } from '@entities/kdm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { List, SafeAreaView, TopAppBar } from '@shared/ui';
import { FlatList } from 'react-native';

export const SettlementEventPage = () => {
  const { navigate } = useNavigation();
  const {
    params: { aspectRatio },
  } = useRoute<ReactNavigation.RouteProps<'KdmSettlementEventPage'>>();
  const { data: settlementEvents } = useSettlementEvents();

  return (
    <SafeAreaView>
      <TopAppBar variant="small" title="Settlement Events" />
      <FlatList
        data={settlementEvents}
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
