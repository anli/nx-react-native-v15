import { View } from 'react-native';
import {
  IconButtonProps,
  IconButton as NativeIconButton,
} from 'react-native-paper';

export const IconButton = ({ className, ...rest }: IconButtonProps) => {
  return (
    <View className={className}>
      <NativeIconButton {...rest} />
    </View>
  );
};
