import { Image } from '@shared/ui';
import { innovations } from '../api';

Image.prefetch(innovations.map((_item) => _item.imageUrl));

export const useInnovations = () => {
  return { data: innovations };
};
