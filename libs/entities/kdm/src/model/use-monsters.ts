import { monsterAis, monsterBasics, monsterHitLocations, monsters } from '../api';

export const useMonsters = () => {
  return { data: monsters };
};

export const useMonsterAis = () => {
  const { data: monsters } = useMonsters();
  return {
    data: monsterAis.map((monsterAi) => ({
      ...monsterAi,
      monster: monsters.find((monster) => monster.id === monsterAi.monsterId),
    })),
  };
};

export const useMonsterHitLocations = () => {
  const { data: monsters } = useMonsters();
  return {
    data: monsterHitLocations.map((monsterHitLocation) => ({
      ...monsterHitLocation,
      monster: monsters.find(
        (monster) => monster.id === monsterHitLocation.monsterId
      ),
    })),
  };
};

export const useMonsterBasics = () => {
  const { data: monsters } = useMonsters();
  return {
    data: monsterBasics.map((monsterBasic) => ({
      ...monsterBasic,
      monster: monsters.find(
        (monster) => monster.id === monsterBasic.monsterId
      ),
    })),
  };
}
