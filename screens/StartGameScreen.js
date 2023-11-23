import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText);
  };

  function confirmInputHandler() {
    console.log('CONFIRM');
  };

  return (
      <View style={styles.inputContainer}>
          <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler}/>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
          </View>
      </View>
  );
}; 

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#3b021f',
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
});

export default StartGameScreen;