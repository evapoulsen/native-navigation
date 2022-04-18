import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import Level3Screen from "../screens/Level3Screen";

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ title: 'Overview'}} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Level3" component={Level3Screen} />
        </Stack.Navigator>
    )
}

export default StackNavigator;

