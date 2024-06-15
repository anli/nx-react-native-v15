import { useCardTypes } from '@entities/kdm';
import { useNavigation } from '@react-navigation/native';
import { List, SafeAreaView, TopAppBar, getListItemIcon } from '@shared/ui';
import { FlatList } from 'react-native-gesture-handler';

export const ReferencePage = () => {
  const { navigate } = useNavigation();
  const { data: cardTypes } = useCardTypes();

  const handlePress = (type: string, aspectRatio: number) => {
    switch (type) {
      case 'gear':
        return navigate('KdmGearPage', { aspectRatio });
      case 'innovation':
        return navigate('KdmInnovationPage', { aspectRatio });
      case 'monsterAi':
        return navigate('KdmMonsterAiPage', { aspectRatio });
      case 'monsterHitLocation':
        return navigate('KdmMonsterHitLocationPage', { aspectRatio });
      case 'principle':
        return navigate('KdmPrinciplePage', { aspectRatio });
      case 'settlementEvent':
        return navigate('KdmSettlementEventPage', { aspectRatio });
      case 'settlementLocation':
        return navigate('KdmSettlementLocationPage', { aspectRatio });
      case 'weaponSpecialization':
        return navigate('KdmWeaponSpecializationPage', { aspectRatio });
      default:
        return;
    }
  };

  return (
    <SafeAreaView edges={[]}>
      <TopAppBar variant="medium" title="Reference" />
      <FlatList
        data={cardTypes}
        keyExtractor={(item) => item.name}
        renderItem={({
          item: { name, description, iconName, type, aspectRatio },
        }) => {
          return (
            <List.Item
              titleNumberOfLines={1}
              descriptionNumberOfLines={1}
              title={name}
              description={description}
              left={getListItemIcon(iconName)}
              onPress={() => handlePress(type, aspectRatio)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
