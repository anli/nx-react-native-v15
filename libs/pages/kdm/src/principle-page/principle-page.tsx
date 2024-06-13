import { usePrinciples } from '@entities/kdm';
import { useNavigation } from '@react-navigation/native';
import { List, SafeAreaView, TopAppBar } from '@shared/ui';
import { FlatList } from 'react-native';

export const PrinciplePage = () => {
  const { navigate } = useNavigation();
  const { data: principles } = usePrinciples();

  return (
    <SafeAreaView>
      <TopAppBar variant="small" title="Principles" />
      <FlatList
        data={principles}
        keyExtractor={(item) => item.name}
        renderItem={({ item: { name, type, imageUrl } }) => {
          return (
            <List.Item
              title={name}
              description={type}
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
