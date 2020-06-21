import React, { useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  Image,
  Text,
} from 'react-native';
import { RootStackParamList } from 'src/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';


// Define component type
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList,'Details'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface Props {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

const Details: React.FC<Props> = ({ route, navigation }: Props) => {
  const { title, picture, description, price, color } = route.params.data
  useEffect(() => {
    navigation.setOptions({ title })
  })
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={styles.root}
      >
        <View style={styles.imageWrapper} >
          <Image 
            source={{ uri: picture }}
            style={styles.picture}
          />
        </View>
        <Text style={styles.title} >{title}</Text>
        <Text style={styles.description} >{description}</Text>
        <Text style={styles.color} >{`Colors: ${color.join(', ')}`}</Text>
        <Text style={styles.price} >{`${price} €`}</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  imageWrapper: {
    paddingBottom: 2,
    marginTop: 12,
    // borderBottomWidth: 0.9,
    // borderBottomColor: '#B2B2B2',
  },
  picture: {
    width: '100%',
    height: 320,
    resizeMode: 'contain',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 32,
    marginHorizontal: 20,
    marginVertical: 12,
    fontWeight: '200',
  },
  description: {
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 8,
    fontWeight: '200',
    letterSpacing: 0.75,
    textAlign: 'justify',
  },
  color: {
    color: 'grey',
    fontSize: 12,
    fontWeight: '200',
    marginHorizontal: 20,
    marginVertical: 8,
  },
  price: {
    textAlign: 'right',
    fontSize: 26,
    fontWeight: '500',
    marginHorizontal: 20,
    marginBottom: 24,
    marginTop: 'auto',
  }
});

export default Details;
