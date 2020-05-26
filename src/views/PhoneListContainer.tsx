// Import React modules & components
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  Text,
  ActivityIndicator,
} from 'react-native';

// Import Placeholder loader 
import {
  Placeholder,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

// Import React Navigation Stack Prop
import { StackNavigationProp } from '@react-navigation/stack';

// Import custom components
import { PhoneCardList } from '../components'

// Import TypeScript types
import { RootStackParamList, Phone } from 'src/types';

// Import Redux
import { RootState } from '../state';
import { addMobiles, setFetchingMore } from '../state/mobiles';
import { connect } from 'react-redux';

// Import util functions
import { fetchPhones } from '../util';

// Define component type
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList,'Home'>;

interface OwnProps {
  navigation: HomeScreenNavigationProp;
}

interface StateProps {
  mobiles: Phone[] | undefined;
  offset: number,
  fetchingMore: boolean,
  fetchMore: boolean,
}

interface DispatchProps {
  addMobiles: (mobiles: Phone[]) => void;
  setFetchingMore: (fetchingMore: boolean) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

const Home: React.FC<Props> = (props: Props) => {

  useEffect(() => {
    if (props.mobiles) { return }
    fetchPhones(props.offset)
      .then(props.addMobiles)
      .catch(error => Alert.alert('Cannot get phones', error))
  });

  console.log('Render Home with fetching more: ' + props.fetchingMore)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={styles.safeAreaView}
      >
        { props.mobiles
          ?
          <>
            <Text style={styles.title} >All phones</Text>
            <PhoneCardList
              navigation={props.navigation}
              mobiles={props.mobiles}
              setFetchingMore={props.setFetchingMore}
              fetchMore={props.fetchMore}
              offset={props.offset}
              addMobiles={props.addMobiles}
              fetchingMore={props.fetchingMore}
            />
            { props.fetchingMore &&
              <ActivityIndicator size="small" color="#0000ff" style={styles.activityIndicator} />
            }
          </>
          :
          <>
            <Text style={styles.title} >All phones</Text>
            <Placeholder
              Animation={Fade}
            >
              <PlaceholderLine width={90} height={20} style={styles.placeholderLine} />
              <PlaceholderLine width={90} height={20} style={styles.placeholderLine} />
              <PlaceholderLine width={90} height={20} style={styles.placeholderLine} />
              <PlaceholderLine width={90} height={20} style={styles.placeholderLine} />
              <PlaceholderLine width={90} height={20} style={styles.placeholderLine} />
            </Placeholder>
          </>
        }
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  placeholderLine: { 
    marginVertical: 0, 
    borderRadius: 8, 
    height: 360,
    alignSelf: 'center' ,
  },
  title: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 12,
    fontWeight: '800',
    fontSize: 36,
  },
  activityIndicator: {
    marginVertical: 12,
  }
});

const mapStateToProps = (state: RootState) => ({
  mobiles: state.mobiles.mobiles,
  offset: state.mobiles.offset,
  fetchingMore: state.mobiles.fetchingMore,
  fetchMore: state.mobiles.fetchMore,
});

const mapDispatchToProps = { 
  addMobiles, 
  setFetchingMore, 
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);