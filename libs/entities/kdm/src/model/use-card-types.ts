import { cardTypes } from '../api';

export const useCardTypes = () => {
  const data = [...cardTypes].sort((a, b) => a.name.localeCompare(b.name));

  return { data };
};
