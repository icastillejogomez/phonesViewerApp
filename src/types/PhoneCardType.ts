import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Phone } from '.';

type PhoneCardComponentNavigationProp = StackNavigationProp<RootStackParamList>;

export interface PhoneCardType {
  data: Phone,
  navigation: PhoneCardComponentNavigationProp;
}