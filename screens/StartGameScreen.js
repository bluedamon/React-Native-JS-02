import PrimaryButton from "../components/PrimaryButton";
import { StyleSheet ,TextInput, View } from "react-native";

function StartGameScreen() {
    return (
        <View style={styles.container}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default StartGameScreen;