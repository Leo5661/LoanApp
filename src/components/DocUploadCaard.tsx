import {View, Text, Pressable} from 'react-native';
import React from 'react';

type Props = {
  name: string;
};

const DocUploadCaard = ({name}: Props) => {
  return (
    <Pressable
      className="shadow-inne m-4 justify-between rounded-md border border-gray-200 bg-white p-2"
      style={{
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 5.65,
      }}
    >
      <Text>DocUploadCaard</Text>
    </Pressable>
  );
};

export default DocUploadCaard;
