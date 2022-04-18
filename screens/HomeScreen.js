import React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
    return (
        <View style={styles.viewStyle}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                //send the params to the Details route
                onPress={() => navigation.navigate('Details', {
                    userId: 255,
                    otherParam: 'whatever you want to send here',
                })}
            />
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

