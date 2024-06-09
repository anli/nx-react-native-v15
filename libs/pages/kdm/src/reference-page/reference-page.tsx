import { useNavigation } from '@react-navigation/native';
import { List, SafeAreaView, TopAppBar } from '@shared/ui';
import { ComponentProps } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { RootStackParamList } from 'types/react-navigation';

const getListItemIcon =
  (icon: string) =>
    (props: Pick<ComponentProps<typeof List.Icon>, 'color' | 'style'>) =>
      <List.Icon {...props} icon={icon} />;
const data = [
  {
    name: 'Principles',
    description:
      "Principles are your settlement's guiding philosophies and a type of innovation.",
    iconName: 'scale-balance',
    pageName: 'KdmPrinciplePage' as const,
  },
  {
    name: 'Innovations',
    description:
      'Innovations are a set of cards in Kingdom Death: Monster, that act as a type of advancement for a settlement.',
    iconName: 'test-tube',
  },
  {
    name: 'Settlement Events',
    description: 'An event occurring during the Settlement Phase.',
    iconName: 'bookmark-outline',
  },
  {
    name: 'Settlement Locations',
    description:
      'Settlement Locations are a card type found in Kingdom Death: Monster.',
    iconName: 'office-building',
  },
  {
    name: 'Weapon Specialization',
    description:
      'Achieved when a survivor has three or more levels of weapon proficiency.',
    iconName: 'fencing',
  },
  {
    name: 'Gear',
    description:
      'Objects that survivors may carry and wear, represented by gear cards.',
    iconName: 'tshirt-crew',
  },
  {
    name: 'Monster AI',
    description: 'An AI card belongs to the AI Deck.',
    iconName: 'chess-queen',
  },
  {
    name: 'Monster Hit Location',
    description:
      'Each monster has a unique hit location deck composed of hit location cards. ',
    iconName: 'medical-bag',
  },
];

export const ReferencePage = () => {
  const { navigate } = useNavigation();
  const listData = [...data].sort((a, b) => a.name.localeCompare(b.name));

  const handlePress = (pageName: keyof RootStackParamList) => {
    navigate(pageName);
  };

  return (
    <SafeAreaView edges={[]}>
      <TopAppBar variant="medium" title="Reference" />
      <FlatList
        data={listData}
        keyExtractor={(item) => item.name}
        renderItem={({ item: { name, description, iconName, pageName } }) => {
          return (
            <List.Item
              title={name}
              description={description}
              left={getListItemIcon(iconName)}
              onPress={() => pageName && handlePress(pageName)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
