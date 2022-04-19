import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RewardsScreen from "../screens/RewardsScreen";

const Tab = createBottomTabNavigator();
function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Rewards" component={RewardsScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;

