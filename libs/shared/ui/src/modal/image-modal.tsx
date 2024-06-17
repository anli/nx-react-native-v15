import { useEffect, useRef, useState } from 'react';
import { Pressable, useWindowDimensions } from 'react-native';
import { Modal, useTheme } from 'react-native-paper';
import { Image } from '../image';
import { Emitter } from './emitter';

type ImageModalParams = {
  imageUrl: string;
  aspectRatio: number;
};

const modalId = 'ImageModal';
const margin = 16;
const borderRadius = 16

const ImageModalComponent = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<ImageModalParams | undefined>(undefined);
  const { imageUrl, aspectRatio } = ref.current ?? {};
  const { width: windowWidth } = useWindowDimensions();
  const width = windowWidth - margin * 2;
  const theme = useTheme();

  const handleShow = (params: ImageModalParams) => {
    ref.current = params;
    setVisible(true);
  };
  const handleDismiss = () => {
    setVisible(false);
    ref.current = undefined;
  };

  useEffect(() => {
    Emitter.on(`${modalId}Show`, handleShow);
    Emitter.on(`${modalId}Dismiss`, handleDismiss);

    return () => {
      Emitter.rmAll(`${modalId}Show`);
      Emitter.rmAll(`${modalId}Dismiss`);
    };
  }, []);

  if (!ref.current) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      onDismiss={handleDismiss}
      dismissable
      contentContainerStyle={{
        backgroundColor: theme.colors.background,
        margin,
        borderRadius
      }}
    >
      <Pressable onPress={handleDismiss}>
        <Image
          source={{
            uri: imageUrl,
          }}
          contentFit="fill"
          style={{
            aspectRatio,
            width,
            borderRadius
          }}
        />
      </Pressable>
    </Modal>
  );
};

export const ImageModal = Object.assign(ImageModalComponent, {
  show: (params: ImageModalParams) =>
    Emitter.emit<ImageModalParams>(`${modalId}Show`, params),
  dismiss: () => Emitter.emit(`${modalId}Dismiss`),
});
