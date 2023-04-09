import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    value: 0,
    total_taps: 0,
  }

  incrementValue = () => {
    this.setState({
      value: this.state.value + 2,
      total_taps: this.state.total_taps + 2,
    })
    console.log("Value: " + (this.state.value + 2))
  }
  
  restButton = () => {
    this.setState({
      value: this.state.value = 0,
      total_taps: this.state.total_taps = 0,
    })
    console.log("Value: " + (this.state.value = 0))
  }
  
  render () {
      return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'black'}}>Hi! I'm button!</Text>
      <Text style={{ fontSize: 60, marginButton: -20}}>{this.state.value}</Text>
      <Text style={{ fontSize: 12, padding: 20, color: 'red'}}>{"Total taps: " + this.state.total_taps}</Text>
      <StatusBar style="auto" />
      <View style={{flexDirection: 'row'}}>
        <Button onPress={this.restButton} title="Reset Count" />
        <Text>   </Text>
        <Button onPress={this.incrementValue} title="Press Button" />
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
