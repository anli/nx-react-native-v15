import { useNavigation } from '@react-navigation/native';
import { FC, ReactNode } from 'react';
import { Appbar, AppbarProps } from 'react-native-paper';

type TopAppBarProps = Omit<AppbarProps, 'mode' | 'children'> & {
  variant: AppbarProps['mode'];
  title: string;
  LeadingComponent?: ReactNode;
  TrailingComponent?: ReactNode;
};

const TopAppBarComponent: FC<TopAppBarProps> = ({
  variant,
  title,
  LeadingComponent,
  TrailingComponent,
  ...rest
}) => {
  const { canGoBack, goBack } = useNavigation();
  return (
    <Appbar.Header mode={variant} {...rest}>
      {canGoBack() && <Appbar.BackAction onPress={goBack} />}
      {LeadingComponent}
      <Appbar.Content title={title} />
      {TrailingComponent}
    </Appbar.Header>
  );
};

export const TopAppBar = Object.assign(TopAppBarComponent, {
  BackAction: Appbar.BackAction,
  Action: Appbar.Action,
});
