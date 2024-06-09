import { List, SafeAreaView, TopAppBar } from '@shared/ui';
import { ComponentProps } from 'react';
import { FlatList } from 'react-native-gesture-handler';

const getListItemIcon =
  (icon: string) =>
  (props: Pick<ComponentProps<typeof List.Icon>, 'color' | 'style'>) =>
    <List.Icon {...props} icon={icon} />;
const configs = [
  {
    title: 'Principles',
    description:
      "Principles are your settlement's guiding philosophies and a type of innovation.",
    iconName: 'scale-balance',
  },
  {
    title: 'Innovations',
    description:
      'Innovations are a set of cards in Kingdom Death: Monster, that act as a type of advancement for a settlement.',
    iconName: 'test-tube',
  },
  {
    title: 'Settlement Events',
    description: 'An event occurring during the Settlement Phase.',
    iconName: 'bookmark-outline',
  },
  {
    title: 'Settlement Locations',
    description:
      'Settlement Locations are a card type found in Kingdom Death: Monster.',
    iconName: 'office-building',
  },
  {
    title: 'Weapon Specialization',
    description:
      'Achieved when a survivor has three or more levels of weapon proficiency.',
    iconName: 'fencing',
  },
  {
    title: 'Gear',
    description:
      'Objects that survivors may carry and wear, represented by gear cards.',
    iconName: 'tshirt-crew',
  },
  {
    title: 'Monster AI',
    description: 'An AI card belongs to the AI Deck.',
    iconName: 'chess-queen',
  },
  {
    title: 'Monster Hit Location',
    description:
      'Each monster has a unique hit location deck composed of hit location cards. ',
    iconName: 'medical-bag',
  },
];

export const ReferencePage = () => {
  return (
    <SafeAreaView edges={[]}>
      <TopAppBar variant="small" title="Reference" />
      <FlatList
        className="bg-background dark:bg-background-dark"
        data={configs}
        keyExtractor={(item) => item.title}
        renderItem={({ item: { title, description, iconName } }) => {
          return (
            <List.Item
              title={title}
              description={description}
              left={getListItemIcon(iconName)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
