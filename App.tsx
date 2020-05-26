/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// Root import for react-navigation
import 'react-native-gesture-handler'

// Import modules
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './src/state';

// React Navigation Types
import { RootStackParamList } from './src/types'

// Create a Stack navigator
const Stack = createStackNavigator<RootStackParamList>();

// Import app views
import { PhoneListContainer, PhoneDetailComponent } from './src/views'


// Create the Redux Store
const store = createStore(rootReducer);

const RootApp = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={PhoneListContainer}
            options={{ 
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Details"
            component={PhoneDetailComponent}
            options={{ 
              headerBackTitle: 'Phones'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootApp;
