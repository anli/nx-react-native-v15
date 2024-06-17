import { useEncounter } from '@entities/kdm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ImageModal, TopAppBar } from '@shared/ui';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const KdmShowdownPage = () => {
  const { navigate, setParams } = useNavigation();
  const { params: { encounterId } = {} } =
    useRoute<ReactNavigation.RouteProps<'KdmShowdownPage'>>();
  const { data: encounter } = useEncounter(encounterId);

  const handleSelectEncounter = () => {
    navigate('KdmCardSelectPage', {
      pageName: 'KdmShowdownPage',
      pageParamKey: 'encounterId',
      selectedId: encounterId,
    });
  };

  const handleClearEncounter = () => {
    setParams({
      encounterId: undefined,
    });
  };

  return (
    <SafeAreaView edges={[]}>
      <TopAppBar variant="small" title="Showdown" hideBack />

      <View className="px-4 flex-row">
        <Chip
          mode="outlined"
          icon="paw-outline"
          onPress={
            encounter
              ? () =>
                  ImageModal.show({
                    imageUrl: encounter.imageUrl,
                    aspectRatio: encounter.aspectRatio,
                  })
              : handleSelectEncounter
          }
          onClose={encounter ? handleClearEncounter : undefined}
        >
          {encounter
            ? `${encounter.monster?.name} (${encounter?.name})`
            : 'Select Encounter'}
        </Chip>
      </View>
    </SafeAreaView>
  );
};
