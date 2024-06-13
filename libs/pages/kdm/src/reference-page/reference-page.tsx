import { useReferences } from '@entities/kdm';
import { useNavigation } from '@react-navigation/native';
import { List, SafeAreaView, TopAppBar, getListItemIcon } from '@shared/ui';
import { FlatList } from 'react-native-gesture-handler';

export const ReferencePage = () => {
  const { navigate } = useNavigation();
  const { data: references } = useReferences();

  const handlePress = (type?: string) => {
    switch (type) {
      case 'principle':
        return navigate('KdmPrinciplePage');
      case 'gear':
        return navigate('KdmGearPage');
      default:
        return;
    }
  };

  return (
    <SafeAreaView edges={[]}>
      <TopAppBar variant="medium" title="Reference" />
      <FlatList
        data={references}
        keyExtractor={(item) => item.name}
        renderItem={({ item: { name, description, iconName, type } }) => {
          return (
            <List.Item
              titleNumberOfLines={1}
              descriptionNumberOfLines={1}
              title={name}
              description={description}
              left={getListItemIcon(iconName)}
              onPress={() => handlePress(type)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
