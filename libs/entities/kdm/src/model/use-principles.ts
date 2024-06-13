import { Image } from '@shared/ui';
import { useEffect } from 'react';
import { principles } from '../api';

type UsePrincipleProps = {
  disableImagePrefetch?: boolean;
};

export const usePrinciples = (props?: UsePrincipleProps) => {
  useEffect(() => {
    !props?.disableImagePrefetch &&
      Image.prefetch(principles.map((_item) => _item.imageUrl));
  }, [props?.disableImagePrefetch]);

  return { data: principles };
};
