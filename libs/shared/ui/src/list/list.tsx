import { ComponentProps } from 'react';
import { List as NativeList } from 'react-native-paper';

export const getListItemIcon =
  (icon: string) =>
  (props: Pick<ComponentProps<typeof NativeList.Icon>, 'color' | 'style'>) =>
    <NativeList.Icon {...props} icon={icon} />;

export const List = NativeList;
