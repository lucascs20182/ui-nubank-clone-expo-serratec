import React from 'react';

import Home from './src/components/Home';
import HomeLogada from './src/components/HomeLogada';

import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" hidden />
      <HomeLogada />
    </>
  );
}
