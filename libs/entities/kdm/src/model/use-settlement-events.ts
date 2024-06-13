import { Image } from '@shared/ui';
import { settlementEvents } from '../api';

Image.prefetch(settlementEvents.map((_item) => _item.imageUrl));

export const useSettlementEvents = () => {
  return { data: settlementEvents };
};
