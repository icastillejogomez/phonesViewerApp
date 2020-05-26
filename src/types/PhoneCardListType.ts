import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Phone } from '.';

type PhoneCardComponentNavigationProp = StackNavigationProp<RootStackParamList>;

export interface PhoneCardListType {
  mobiles: Phone[],
  navigation: PhoneCardComponentNavigationProp;
  setFetchingMore: (fetchingMore: boolean) => void;
  fetchMore: boolean;
  fetchingMore: boolean;
  offset: number;
  addMobiles: (mobiles: Phone[]) => void;
}