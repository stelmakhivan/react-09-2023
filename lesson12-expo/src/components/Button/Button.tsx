import React from 'react';
import { Pressable, Text } from 'react-native';

const Button = () => {
  const handlePress = () => {
    alert('Message')
  }

  return (
    <Pressable className="p-2 m-1 border border-gray-600" onPress={handlePress}>
      <Text>Button</Text>
    </Pressable>
  );
};

export default Button;
