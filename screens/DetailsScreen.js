import React from "react";
import { View, Text, Button } from "react-native";

function DetailsScreen({ route, navigation }) {
    const { username, workplace } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>{username}</Text>
          <Text>{workplace}</Text>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      );
}

export default DetailsScreen;