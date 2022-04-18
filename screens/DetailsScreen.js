import React from "react";
import { View, Text, Button } from "react-native";

function DetailsScreen({ route, navigation }) {
    //get the parameters
    const { userId, otherParam } = route.params;
    return (
        <View style={styles.viewStyle}>
            <Text>Details Screen</Text>
            <Text>User ID: {userId}</Text>
            <Text>Additional Parameters: {otherParam}</Text>
            <Button
                title="Go to Level 3"
                onPress={() =>  navigation.navigate('Level3', {
                    userId: (userId)
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
        backgroundColor: '#A9BCF5'
    }
}
export default DetailsScreen;

