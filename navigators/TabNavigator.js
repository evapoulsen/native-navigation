import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//icons
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import HomeScreen from "../screens/HomeScreen";
import RewardsScreen from "../screens/RewardsScreen";

const Tab = createBottomTabNavigator();
function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size}) => {
                let iconName;
                if (route.name === 'Home Tab') {
                    iconName = focused
                    ? 'home-lightbulb'
                    : 'home-lightbulb-outline';
                } else if (route.name === 'Rewards') {
                    iconName = focused ? 'account-star' : 'account-star-outline'
                }
                return <MaterialCommunityIcons name={iconName} size={40} color={color} />;
            },
                tabBarActiveTintColor: '#8258FA',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home Tab" component={HomeScreen} options={{ 
                headerShown: false
                 }}/>
            <Tab.Screen name="Rewards" component={RewardsScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;

