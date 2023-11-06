import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';

function App() {
  const handlePress = () => {
    Alert.alert('Button pressed');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.container}>
          <Text style={styles.text}>Message from RN Test</Text>
          <Button title={'Button'} onPress={handlePress} />
          <TouchableOpacity style={styles.btn} activeOpacity={0.1}>
            <Text style={{color: 'white'}}>TouchableOpacity Button</Text>
          </TouchableOpacity>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <TextInput
            style={{
              marginTop: 20,
              padding: 10,
              borderWidth: 1,
              borderColor: 'gray',
              width: '100%',
            }}
            placeholder={'Enter your name'}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 24,
    color: 'red',
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: 'blue',
  },
  tinyLogo: {
    marginTop: 20,
    width: 50,
    height: 50,
  },
});

export default App;
