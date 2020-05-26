// Import React Native
import * as React from 'react';
import { FlatList } from 'react-native';

// Import Types
import { PhoneCardListType } from 'src/types';

// Import custom components
import { PhoneCard } from '.';

// Import util functions
import { onEndReached } from '../util';

const PhoneCardList: React.FC<PhoneCardListType> = ({ navigation, mobiles, setFetchingMore, fetchMore, offset, addMobiles, fetchingMore }) => {
  return (
    <FlatList
      data={mobiles}
      renderItem={({ item }) => (
        <PhoneCard 
          key={item.id}
          navigation={navigation} 
          data={item}
        />
      )}
      keyExtractor={item => item.id.toString()}
      onEndReached={() => (fetchMore && !fetchingMore) ? onEndReached(setFetchingMore, offset, addMobiles) : {}}
      onEndReachedThreshold={0}
    />
  )
}

export default PhoneCardList;