import { useKdmCardType } from '@entities/kdm';
import { useRoute } from '@react-navigation/native';
import { ImageModal, List, SafeAreaView, TopAppBar } from '@shared/ui';
import { FlatList } from 'react-native';

export const KdmCardTypeDetailPage = () => {
  const {
    params: { cardTypeId },
  } = useRoute<ReactNavigation.RouteProps<'KdmCardTypeDetailPage'>>();
  const { data: cardType } = useKdmCardType(cardTypeId);

  return (
    <SafeAreaView>
      <TopAppBar variant="small" title={cardType.name ?? ''} />
      <FlatList
        data={cardType.cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { name, imageUrl } }) => {
          return (
            <List.Item
              title={name}
              onPress={() => {
                ImageModal.show({
                  imageUrl,
                  aspectRatio: cardType.aspectRatio ?? 1,
                });
              }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
