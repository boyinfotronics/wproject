import React, { Component } from 'react';
import { Button,TextInput, View, StyleSheet } from 'react-native';

export default class Sc1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username : null,
      password : null,
    };
  }
  onPress = () => {

          if(this.state.username==null){
            alert ("username is null !")
            console.log(this.state.username);
             return false;
          }

          if(this.state.username=="admin"){
          alert ("Login Successfully !")
          this.props.navigation.navigate('Sc2');

            console.log(this.state.username);
            console.log(this.state.password);

            return false;
          }
  }

  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={{height: 40,width:200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
      />
      <TextInput
        style={{marginTop:30,marginBottom:30 ,height: 40,width:200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
      />
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

Sc1.navigationOptions = {
  /*  header: null, */
header:null,


};
