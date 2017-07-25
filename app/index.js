import React, { Component } from 'react';
import { LoginNavStack, Tabs } from './config/router';

class wproject extends Component {
  render() {
    return <LoginNavStack />;
  }
}
wproject.navigationOptions = {
  header: null,
};


export default wproject;
