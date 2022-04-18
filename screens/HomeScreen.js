import React from "react";
import { View, Text } from "react-native";

function HomeScreen() {
    return (
        <View style={styles.viewStyle}>
            <Text>Home Screen</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#DDDDDD'
    }
}
export default HomeScreen;