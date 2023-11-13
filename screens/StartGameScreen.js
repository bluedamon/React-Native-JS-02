import PrimaryButton from "../components/PrimaryButton";
import { StyleSheet ,TextInput, Pressable, View } from "react-native";

function StartGameScreen() {
    return (
        <View style={styles.container}>
            <TextInput />
            <PrimaryButton text='Reset' />
            <PrimaryButton text='Confirm' />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default StartGameScreen;