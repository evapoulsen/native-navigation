import React from "react";
import { View, Text, Button } from "react-native";

function Level3Screen({ navigation }) {
    return (
        <View style={styles.viewStyle}>
            <Text>LEVEL 3</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go Home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

const styles = {
    viewStyle: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#CEE3F6'
    }
}
export default Level3Screen;