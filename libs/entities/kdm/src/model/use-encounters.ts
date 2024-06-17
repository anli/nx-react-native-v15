import { Encounter, encounters, Monster } from '../api';
import { useMonsters } from './use-monsters';

const getMapEncounter =
  (monsters: Monster[]) =>
  (encounter: Encounter): Encounter & { monster?: Monster } => ({
    ...encounter,
    monster: monsters.find((_monster) => _monster.id === encounter.monsterId),
  });

export const useEncounter = (id?: Encounter['id']) => {
  const { data: encounters } = useEncounters();

  if (id === undefined) {
    return { data: undefined };
  }

  const encounter = encounters.find((_item) => _item.id === id);
  // const basicActives = monsterBasics.filter(_item => encounter?.basicActiveIds?.includes(_item.id))

  return {
    data: encounter,
  };
};

export const useEncounters = () => {
  const { data: monsters } = useMonsters();
  const data = encounters.map(getMapEncounter(monsters));

  return {
    data,
  };
};
