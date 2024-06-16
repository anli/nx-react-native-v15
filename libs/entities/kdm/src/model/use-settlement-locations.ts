import { settlementLocations } from '../api';

export const useSettlementLocations = () => {
  return { data: settlementLocations };
};
