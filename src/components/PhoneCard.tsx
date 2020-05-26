import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { PhoneCardType } from 'src/types';

const PhoneCard: React.FC<PhoneCardType> = ({ navigation, data }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.42}
      onPress={() => navigation.navigate('Details', data)}
    >
      <View style={styles.root} >
        <ImageBackground source={{ uri: data.picture }} style={styles.bgImage} />
        <Text style={styles.phoneTitle} >{data.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF',
    marginHorizontal: 24,
    marginVertical: 18,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    height: 360,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  phoneTitle: {
    fontSize: 30,
    fontWeight: '800',
    position: 'absolute',
    bottom: 20,
    right: 20,
    elevation: 20,
    color: '#000',
  }
});

export default PhoneCard;