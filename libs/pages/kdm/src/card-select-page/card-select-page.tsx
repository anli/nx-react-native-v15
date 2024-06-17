import { useEncounters } from '@entities/kdm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ImageModal, List, SafeAreaView, TopAppBar } from '@shared/ui';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';

const useCardSelectPage = () => {
  const { data } = useEncounters();
  return {
    data: {
      title: 'Select Encounter',
      options: data.map((_item) => ({
        ..._item,
        description: _item.monster?.name,
      })),
    },
  };
};

export const KdmCardSelectPage = () => {
  const {
    params: { pageName, pageParamKey, selectedId: defaultSelectedId },
  } = useRoute<ReactNavigation.RouteProps<'KdmCardSelectPage'>>();
  const { navigate } = useNavigation();
  const [selectedId, setSelectedId] = useState<string | undefined>(
    defaultSelectedId
  );
  const { data } = useCardSelectPage();
  const isValid = selectedId;

  const handleSelect = (selectedId?: string) => {
    // @ts-expect-error pageName typing
    navigate({
      name: pageName,
      params: { [pageParamKey]: selectedId },
      merge: true,
    });
  };

  return (
    <SafeAreaView>
      <TopAppBar variant="center-aligned" title={data.title} />
      <FlatList
        data={data.options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const { name, description, imageUrl, aspectRatio } = item;
          const isSelected = selectedId === item.id;

          return (
            <List.Item
              title={name}
              description={description}
              onPress={() => ImageModal.show({ imageUrl, aspectRatio })}
              right={() => (
                <RadioButton.Android
                  onPress={() => setSelectedId(item.id)}
                  value={item.id}
                  status={isSelected ? 'checked' : 'unchecked'}
                />
              )}
            />
          );
        }}
      />
      <View className="m-4">
        <Button
          mode="contained"
          disabled={!isValid}
          onPress={() => handleSelect(selectedId)}
        >
          Select
        </Button>
      </View>
    </SafeAreaView>
  );
};
