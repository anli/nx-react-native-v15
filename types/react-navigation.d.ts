import { CardType, Encounter } from '@entities/kdm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  KdmCardTypeDetailPage: { cardTypeId: CardType['id'] };
  KdmCardTypeListPage: undefined;
  KdmCardSelectPage: {
    pageName: keyof RootStackParamList;
    pageParamKey: string;
    selectedId?: string;
  };
  KdmShowdownPage?: { encounterId?: Encounter['id'] };
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList { }

    type RouteProps<T extends keyof RootStackParamList> =
      NativeStackScreenProps<RootStackParamList, T>['route'];
  }
}
