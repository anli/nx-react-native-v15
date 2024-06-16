import {
  KdmCardType,
  gears,
  innovations,
  kdmCardTypes,
  monsterAis,
  monsterHitLocations,
  principles,
  settlementEvents,
  settlementLocations,
  weaponSpecializations,
} from '../api';

const getCards = (
  id: KdmCardType['id']
): { id: string; imageUrl: string; name: string }[] => {
  switch (id) {
    case 'GEAR':
      return gears;
    case 'INNOVATION':
      return innovations;
    case 'MONSTER_AI':
      return monsterAis;
    case 'MONSTER_HIT_LOCATION':
      return monsterHitLocations;
    case 'PRINCIPLE':
      return principles;
    case 'SETTLEMENT_EVENT':
      return settlementEvents;
    case 'SETTLEMENT_LOCATION':
      return settlementLocations;
    case 'WEAPON_SPECIALIZATION':
      return weaponSpecializations;
    default:
      return [];
  }
};

export const useKdmCardTypes = () => {
  const data = [...kdmCardTypes].sort((a, b) => a.name.localeCompare(b.name));

  return { data };
};

export const useKdmCardType = (id: KdmCardType['id']) => {
  const { data } = useKdmCardTypes();
  const item = data.find((_item) => _item.id === id);

  return {
    data: {
      id: item?.id,
      name: item?.id,
      description: item?.description,
      iconName: item?.iconName,
      type: item?.type,
      aspectRatio: item?.aspectRatio,
      cards: getCards(id),
    },
  };
};
