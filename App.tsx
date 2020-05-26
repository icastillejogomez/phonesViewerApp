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

// Create a Stack navigator
const Stack = createStackNavigator();

// Import app views
import { Home, Details } from './src/views'

/**
 * Root App with React Navigation and Redux Wrappers
 * 
 * 
 */
const RootApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ 
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ 

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;
