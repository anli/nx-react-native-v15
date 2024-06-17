import {
  Encounter,
  MonsterAi,
  MonsterBasic,
  useEncounter,
} from '@entities/kdm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ImageModal, List, SafeAreaView, TopAppBar } from '@shared/ui';
import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Chip } from 'react-native-paper';

export const KdmShowdownPage = () => {
  const { params: { encounterId } = {} } =
    useRoute<ReactNavigation.RouteProps<'KdmShowdownPage'>>();
  const { data: encounter } = useEncounter(encounterId);
  const [showdownActives, setShowdownActives] = useState<
    MonsterBasic[] | undefined
  >(undefined);
  const [showdownAiDraws, setShowdownAiDraws] = useState<
    | (MonsterAi & {
        visible?: boolean;
      })[]
    | undefined
  >(undefined);
  const [showdownAiDiscards, setShowdownAiDiscards] = useState<
    MonsterAi[] | undefined
  >(undefined);

  useEffect(() => {
    setShowdownActives(encounter?.actives);
    setShowdownAiDraws(encounter?.ais);
    setShowdownAiDiscards([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [encounterId]);

  return (
    <SafeAreaView edges={[]}>
      <TopAppBar variant="small" title="Showdown" hideBack />

      <ScrollView>
        <List.Section>
          <View className="px-4 flex-row">
            <EncounterChip encounterId={encounterId} />
          </View>
          {encounter && (
            <>
              <List.Subheader>Wounds</List.Subheader>
              <List.Subheader>Actives</List.Subheader>
              <View className="px-4 flex-row gap-2">
                {showdownActives?.map((_item) => (
                  <Chip
                    key={_item.id}
                    compact
                    mode="outlined"
                    onPress={() =>
                      ImageModal.show({
                        imageUrl: _item.imageUrl,
                        aspectRatio: _item.aspectRatio,
                      })
                    }
                  >
                    {_item.name}
                  </Chip>
                ))}
              </View>
              <List.Subheader>AI Draws</List.Subheader>
              <View className="px-4 flex-row gap-2 flex-wrap">
                {showdownAiDraws?.map((_item, index) => (
                  <Chip
                    key={_item.id}
                    compact
                    mode="outlined"
                    onPress={
                      _item?.visible
                        ? () =>
                            ImageModal.show({
                              imageUrl: _item.imageUrl,
                              aspectRatio: _item.aspectRatio,
                            })
                        : undefined
                    }
                  >
                    {_item?.visible ? _item.name : index + 1}
                  </Chip>
                ))}
              </View>
              <List.Subheader>AI Discards</List.Subheader>
              <View className="px-4 flex-row gap-2 flex-wrap">
                {showdownAiDiscards?.map((_item) => (
                  <Chip
                    key={_item.id}
                    compact
                    mode="outlined"
                    onPress={() =>
                      ImageModal.show({
                        imageUrl: _item.imageUrl,
                        aspectRatio: _item.aspectRatio,
                      })
                    }
                  >
                    {_item.name}
                  </Chip>
                ))}
              </View>
              <List.Subheader>Hit Locations Draws</List.Subheader>
              <List.Subheader>Hit Locations Discards</List.Subheader>
            </>
          )}
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const EncounterChip = ({ encounterId }: { encounterId?: Encounter['id'] }) => {
  const { navigate, setParams } = useNavigation();
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
  );
};
