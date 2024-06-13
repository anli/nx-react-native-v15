import { Image } from '@shared/ui';
import { weaponSpecializations } from '../api';

Image.prefetch(weaponSpecializations.map((_item) => _item.imageUrl));

export const useWeaponSpecializations = () => {
  return { data: weaponSpecializations };
};
