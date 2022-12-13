/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import React,{useState} from 'react';
import {
  SafeAreaView, StyleSheet, useColorScheme, TextInput, Text
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [value, setValue] = useState('')

  return (
    <SafeAreaView style={backgroundStyle}>
      <TextInput onChangeText={setValue} multiline style={{height:300}}>
      <Text>
              {value}
            </Text>
      </TextInput>
    </SafeAreaView>
  );
};



export default App;
