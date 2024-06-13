const cardAspectRatio = 0.637;
const gearAspectRatio = 1;
const locationAspectRatio = 0.55;

export const cardTypes = [
  {
    name: 'Principles',
    description:
      "Principles are your settlement's guiding philosophies and a type of innovation.",
    iconName: 'scale-balance',
    type: 'principle',
    aspectRatio: cardAspectRatio,
  },
  {
    name: 'Innovations',
    description:
      'Innovations are a set of cards in Kingdom Death: Monster, that act as a type of advancement for a settlement.',
    iconName: 'test-tube',
    type: 'innovation',
    aspectRatio: cardAspectRatio,
  },
  {
    name: 'Settlement Events',
    description: 'An event occurring during the Settlement Phase.',
    iconName: 'bookmark-outline',
    type: 'settlementEvent',
    aspectRatio: cardAspectRatio,
  },
  {
    name: 'Settlement Locations',
    description:
      'Settlement Locations are a card type found in Kingdom Death: Monster.',
    iconName: 'office-building',
    type: 'settlementLocation',
    aspectRatio: locationAspectRatio,
  },
  {
    name: 'Weapon Specialization',
    description:
      'Achieved when a survivor has three or more levels of weapon proficiency.',
    iconName: 'fencing',
    type: 'weaponSpecialization',
    aspectRatio: cardAspectRatio,
  },
  {
    name: 'Gear',
    description:
      'Objects that survivors may carry and wear, represented by gear cards.',
    iconName: 'tshirt-crew',
    type: 'gear',
    aspectRatio: gearAspectRatio,
  },
  {
    name: 'Monster AI',
    description: 'An AI card belongs to the AI Deck.',
    iconName: 'chess-queen',
    aspectRatio: cardAspectRatio,
  },
  {
    name: 'Monster Hit Location',
    description:
      'Each monster has a unique hit location deck composed of hit location cards. ',
    iconName: 'medical-bag',
    aspectRatio: cardAspectRatio,
  },
];
