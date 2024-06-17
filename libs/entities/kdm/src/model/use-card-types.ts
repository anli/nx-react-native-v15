import {
  KdmCardType,
  gears,
  innovations,
  kdmCardTypes,
  principles,
  settlementEvents,
  settlementLocations,
  weaponSpecializations,
} from '../api';
import { useMonsterAis, useMonsterHitLocations } from './use-monsters';

const useCards = (
  id: KdmCardType['id']
): {
  data: {
    id: string;
    imageUrl: string;
    name: string;
    location?: string;
    monster?: {
      name: string;
    };
    type?: string;
  }[];
} => {
  const { data: monsterAis } = useMonsterAis();
  const { data: monsterHitLocations } = useMonsterHitLocations();

  switch (id) {
    case 'GEAR':
      return { data: gears };
    case 'INNOVATION':
      return { data: innovations };
    case 'MONSTER_AI':
      return { data: monsterAis };
    case 'MONSTER_HIT_LOCATION':
      return { data: monsterHitLocations };
    case 'PRINCIPLE':
      return { data: principles };
    case 'SETTLEMENT_EVENT':
      return { data: settlementEvents };
    case 'SETTLEMENT_LOCATION':
      return { data: settlementLocations };
    case 'WEAPON_SPECIALIZATION':
      return { data: weaponSpecializations };
    default:
      return { data: [] };
  }
};

export const useKdmCardTypes = () => {
  const data = [...kdmCardTypes].sort((a, b) => a.name.localeCompare(b.name));

  return { data };
};

export const useKdmCardType = (id: KdmCardType['id']) => {
  const { data } = useKdmCardTypes();
  const item = data.find((_item) => _item.id === id);
  const { data: cards } = useCards(id);

  return {
    data: {
      id: item?.id,
      name: item?.id,
      description: item?.description,
      iconName: item?.iconName,
      type: item?.type,
      aspectRatio: item?.aspectRatio,
      cards,
    },
  };
};
