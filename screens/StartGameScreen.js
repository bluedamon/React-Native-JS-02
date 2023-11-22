import { StyleSheet, TextInput, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputCOntainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}; 

const styles = StyleSheet.create({
  inputCOntainer: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#72063c',
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
});

export default StartGameScreen;