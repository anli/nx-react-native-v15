import { Image } from '@shared/ui';
import { gears } from '../api';

Image.prefetch(gears.map((_item) => _item.imageUrl));

export const useGears = () => {
  return { data: gears };
};
