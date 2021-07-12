import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { StatusBar } from 'react-native';

import Home from './src/components/Home';
import HomeLogada from './src/components/HomeLogada';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="rgba(255, 255, 255, 0)" translucent />
        <Navigator headerMode={false}>
          <Screen name="Home" component={Home} />
          <Screen name="HomeLogada" component={HomeLogada} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
