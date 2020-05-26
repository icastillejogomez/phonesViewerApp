import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.42}
      onPress={() => props.navigation.navigate('Details')}
    >
      <View style={styles.root} >
        <Text style={styles.phoneTitle} >{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
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
  phoneTitle: {
    fontSize: 32,
    fontWeight: '800',
    position: 'absolute',
    bottom: 20,
    right: 20,
  }
});