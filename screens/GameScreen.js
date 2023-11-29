import { StyleSheet , View, Text } from 'react-native';

function GameScreen() {
    return(
        <View style={styles.screen}>
            <Text>Opponent's Guesses</Text>
            {/* GUESSES */}
            <View>
                <Text>Higher or Lower?</Text>
                {/* Buttons + and - */}
            </View>
            <View>
                {/* ROUNDS */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,

    }
});

export default GameScreen;
