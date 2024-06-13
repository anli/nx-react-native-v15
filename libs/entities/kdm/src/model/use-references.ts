import { references } from '../api';

export const useReferences = () => {
  const data = [...references].sort((a, b) => a.name.localeCompare(b.name));

  return { data };
};
