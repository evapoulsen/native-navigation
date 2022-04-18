import React from "react";
import { View, Text } from "react-native";

function DetailsScreen() {
    return (
        <View style={styles.viewStyle}>
            <Text>Details Screen</Text>
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
export default DetailsScreen;

