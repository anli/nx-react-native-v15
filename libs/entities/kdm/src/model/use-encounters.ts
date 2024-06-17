import { Encounter, encounters, Monster, MonsterBasic } from '../api';
import { shuffle } from '../lib';
import { monsterAis, monsterBasics } from './../api/monster';
import { useMonsters } from './use-monsters';

const getMapEncounter =
  ({
    monsters,
    monsterBasics,
  }: {
    monsters: Monster[];
    monsterBasics: MonsterBasic[];
  }) =>
  (
    encounter: Encounter
  ): Encounter & { monster?: Monster } & { monsterBasic?: MonsterBasic } => ({
    ...encounter,
    monster: monsters.find((_item) => _item.id === encounter.monsterId),
    monsterBasic: monsterBasics.find(
      (_item) => _item.monsterId === encounter.monsterId
    ),
  });

const getEncounterAis = (encounterId: Encounter['id']) => {
  if (encounterId === 'WHITE_LION_FIRST_STORY') {
    const remainingCards = shuffle(
      monsterAis.filter((_item) =>
        [
          'WHITE_LION_AI_CHOMP',
          'WHITE_LION_AI_SIZE_UP',
          'WHITE_LION_AI_POWER_SWAT',
          'WHITE_LION_AI_GRASP',
          'WHITE_LION_AI_MAUL',
          'WHITE_LION_AI_TERRIFYING_ROAR',
          'WHITE_LION_AI_ENRAGED',
        ].includes(_item.id)
      )
    );
    const startingCard = monsterAis.find(
      (_item) => _item.id === 'WHITE_LION_AI_CLAW'
    );

    return [
      ...(startingCard ? [{ ...startingCard, visible: true }] : []),
      ...remainingCards,
    ];
  }

  return [];
};

export const useEncounter = (id?: Encounter['id']) => {
  const { data: encounters } = useEncounters();

  if (id === undefined) {
    return { data: undefined };
  }

  const encounter = encounters.find((_item) => _item.id === id);

  if (!encounter) {
    return { data: undefined };
  }

  return {
    data: {
      ...encounter,
      actives: [...(encounter?.monsterBasic ? [encounter.monsterBasic] : [])],
      ais: getEncounterAis(id),
    },
  };
};

export const useEncounters = () => {
  const { data: monsters } = useMonsters();
  const data = encounters.map(getMapEncounter({ monsters, monsterBasics }));

  return {
    data,
  };
};
