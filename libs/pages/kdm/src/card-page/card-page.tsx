import { FasterImageView } from '@candlefinance/faster-image';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from '@shared/ui';
import { useWindowDimensions } from 'react-native';

const aspectRatio = 0.637;

export const CardPage = () => {
  const {
    params: { imageUrl },
  } = useRoute<ReactNavigation.RouteProps<'KdmCardPage'>>();
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView>
      <FasterImageView
        source={{
          url: imageUrl,
          showActivityIndicator: true,
          progressiveLoadingEnabled: true,
        }}
        style={{
          resizeMode: 'contain',
          aspectRatio,
          width,
        }}
      />
    </SafeAreaView>
  );
};
