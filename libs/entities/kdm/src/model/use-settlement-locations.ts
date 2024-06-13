import { Image } from '@shared/ui';
import { settlementLocations } from '../api';

Image.prefetch(settlementLocations.map((_item) => _item.imageUrl));

export const useSettlementLocations = () => {
  return { data: settlementLocations };
};
