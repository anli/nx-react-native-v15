import { useNavigation } from '@react-navigation/native';
import { FC, ReactNode } from 'react';
import { Appbar, AppbarHeaderProps } from 'react-native-paper';

type TopAppBarProps = Omit<AppbarHeaderProps, 'mode' | 'children'> & {
  variant: AppbarHeaderProps['mode'];
  title: string;
  LeadingComponent?: ReactNode;
  TrailingComponent?: ReactNode;
  hideBack?: boolean;
};

const TopAppBarComponent: FC<TopAppBarProps> = ({
  variant,
  title,
  LeadingComponent,
  TrailingComponent,
  hideBack = false,
  ...rest
}) => {
  const { canGoBack, goBack } = useNavigation();
  return (
    <Appbar.Header mode={variant} {...rest}>
      {!hideBack && canGoBack() && <Appbar.BackAction onPress={goBack} />}
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
