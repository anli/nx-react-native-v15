import { cardAspectRatio } from '@entities/kdm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Image, SafeAreaView } from '@shared/ui';
import { useWindowDimensions } from 'react-native';

export const CardPage = () => {
  const {
    params: { imageUrl },
  } = useRoute<ReactNavigation.RouteProps<'KdmCardPage'>>();
  const { canGoBack, goBack } = useNavigation();
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView>
      <Image
        source={{
          uri: imageUrl,
        }}
        contentFit="fill"
        style={{
          aspectRatio: cardAspectRatio,
          width,
        }}
      />
      {canGoBack() && (
        <Button.Icon
          mode="contained-tonal"
          className="absolute right-2 top-2"
          icon="close"
          onPress={() => goBack()}
        />
      )}
    </SafeAreaView>
  );
};
