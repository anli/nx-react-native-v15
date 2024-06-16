import { CardType } from '@entities/kdm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  KdmCardTypeDetailPage: { cardTypeId: CardType['id'] };
  KdmCardPage: { imageUrl: string; aspectRatio?: number };
  KdmGearPage: { aspectRatio: number };
  KdmInnovationPage: { aspectRatio: number };
  KdmMonsterAiPage: { aspectRatio: number };
  KdmMonsterHitLocationPage: { aspectRatio: number };
  KdmPrinciplePage: { aspectRatio: number };
  KdmReferencePage: { aspectRatio: number };
  KdmSettlementEventPage: { aspectRatio: number };
  KdmSettlementLocationPage: { aspectRatio: number };
  KdmWeaponSpecializationPage: { aspectRatio: number };
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}

    type RouteProps<T extends keyof RootStackParamList> =
      NativeStackScreenProps<RootStackParamList, T>['route'];
  }
}
