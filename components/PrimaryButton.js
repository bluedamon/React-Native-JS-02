import { StyleSheet, View, Text, Pressable } from "react-native";

function PrimaryButton({children}){
    return(
        <View>
            <Text>
                {children}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default PrimaryButton;