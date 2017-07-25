/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export default class Sc2 extends Component {
onPress = () => {

  this.props.navigation.goBack();

}


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Sc2
        </Text>

        <Button
          onPress={this.onPress}
          title="Press More"
          color="#13a26e"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('wproject', () => Sc2);
