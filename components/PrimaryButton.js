import { StyleSheet, View, Text, Pressable } from "react-native";

function PrimaryButton(props){
    console.log(props.text);
    return(
        <View>
            <Text>
                {props.text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default PrimaryButton;