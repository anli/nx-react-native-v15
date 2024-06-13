import { Image } from '@shared/ui';
import { principles } from '../api';

Image.prefetch(principles.map((_item) => _item.imageUrl));

export const usePrinciples = () => {
  return { data: principles };
};
