import { KdmCardType, useKdmCardTypes } from '@entities/kdm';
import { useNavigation } from '@react-navigation/native';
import { List, SafeAreaView, TopAppBar, getListItemIcon } from '@shared/ui';
import { FlatList } from 'react-native-gesture-handler';

export const KdmCardTypeListPage = () => {
  const { navigate } = useNavigation();
  const { data: cardTypes } = useKdmCardTypes();

  const handlePress = (id: KdmCardType['id']) => {
    return navigate('KdmCardTypeDetailPage', { cardTypeId: id });
  };

  return (
    <SafeAreaView edges={[]}>
      <TopAppBar variant="medium" title="Reference" />
      <FlatList
        data={cardTypes}
        keyExtractor={(item) => item.name}
        renderItem={({ item: { name, description, iconName, id } }) => {
          return (
            <List.Item
              titleNumberOfLines={1}
              descriptionNumberOfLines={1}
              title={name}
              description={description}
              left={getListItemIcon(iconName)}
              onPress={() => handlePress(id)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
