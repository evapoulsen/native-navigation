import React from "react";
import { Image, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import Level3Screen from "../screens/Level3Screen";

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (
        <Image 
            style={{ width: 40, height: 40 }}
            source={require('../assets/logo1.png')}
        />
    );
}
function StackNavigator() {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#8258FA',
                    height: 500,
                },
                headerTintColor: '#EEEEEE',
                headerTitle: (props) => <LogoTitle {...props} />,
                headerRight: () => (
                    <Button
                      onPress={() => alert('This is a button!')}
                      title="Info"
                      color="#fff"
                    />
                  ),
            }}
            >
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
            />
            <Stack.Screen 
                name="Details" 
                component={DetailsScreen}
                options={({ route }) => ({ title: route.params.name })}
            />
            <Stack.Screen name="Level3" component={Level3Screen} />
        </Stack.Navigator>
    )
}

export default StackNavigator;

