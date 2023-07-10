/// <reference types="nativewind/types" />

import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {useColorScheme} from 'nativewind';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const {colorScheme, setColorScheme} = useColorScheme();

  const backgroundStyle = {
    backgroundColor: colorScheme === 'dark' ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      className="flex h-full w-full items-center justify-center"
      style={backgroundStyle}
    >
      <Button
        title="Theme"
        onPress={() =>
          setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
        }
      />
      <Text
        className={`text-xl  ${
          colorScheme === 'dark' ? 'text-slate-300' : 'text-stone-800'
        }`}
      >
        Hello React with TailwindCSS
      </Text>
    </SafeAreaView>
  );
}

export default App;
