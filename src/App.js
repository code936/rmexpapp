

import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import RNFetchblob from "rn-fetch-blob"




export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataRecieved: "Default data"
    }
  }

  fetchData = () => {
    RNFetchblob.config({
      trusty: true
    })
      .fetch('GET', "https://localhost:8000/about")
      .then(res => res.json())
      .then(data => this.setState({dataRecieved: JSON.stringify(data)}))
      .catch(error => this.setState({dataRecieved: error.message}))
  }

  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'}}>
        <Text >Welcome to React Native!</Text>
        <Button title="Fetch Data" onPress={() => this.fetchData()} />
        <Text >{this.state.dataRecieved}</Text>
      </View >
    );
  }
}
