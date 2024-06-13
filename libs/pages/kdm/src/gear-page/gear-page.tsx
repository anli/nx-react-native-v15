import { useGears } from '@entities/kdm';
import { useNavigation } from '@react-navigation/native';
import { List, SafeAreaView, TopAppBar } from '@shared/ui';
import { FlatList } from 'react-native';

export const GearPage = () => {
  const { navigate } = useNavigation();
  const { data: gears } = useGears();

  return (
    <SafeAreaView>
      <TopAppBar variant="small" title="Gears" />
      <FlatList
        data={gears}
        keyExtractor={(item) => item.name}
        renderItem={({ item: { name, location, imageUrl } }) => {
          return (
            <List.Item
              title={name}
              description={location}
              onPress={() => {
                navigate('KdmCardPage', { imageUrl });
              }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
