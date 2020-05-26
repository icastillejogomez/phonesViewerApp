import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { PhoneCard } from '../components'


const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={styles.safeAreaView}
      >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <PhoneCard 
            navigation={navigation} 
            title='iPhone 6'
          />
          <PhoneCard 
            navigation={navigation} 
            title='iPhone 8'
          />
          <PhoneCard 
            navigation={navigation} 
            title='P 20 Lite'
          />
          <PhoneCard 
            navigation={navigation} 
            title='iPhone X'
          />
          <PhoneCard 
            navigation={navigation} 
            title='iPhone 11 Pro Max'
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    backgroundColor: '#FFF',
  },
});

export default Home;
