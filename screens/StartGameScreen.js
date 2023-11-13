import PrimaryButton from "../components/PrimaryButton";
import { StyleSheet ,TextInput, View } from "react-native";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24, 
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },  
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: '#ddb52f',
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },  
});
 
export default StartGameScreen;