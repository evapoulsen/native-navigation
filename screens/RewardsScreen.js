import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RewardsScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>Rewards Screen</Text>
      <Text style={{textAlign: 'center'}}>Congratulations! You have a Tab Navigator inside a Stack Navigator</Text>
    </View>
  )
}

export default RewardsScreen

const styles = {
    containerStyle: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#B0B2B5',
        padding: 20,
    },
    titleStyle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
        textTransform: 'capitalize'
    }
}