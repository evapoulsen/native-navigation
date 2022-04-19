import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Level3Screen from "../screens/Level3Screen";

const Tab = createBottomTabNavigator();
function TabNavigator() {
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Level3" component={Level3Screen} />
    </Tab.Navigator>
}

export default TabNavigator;

