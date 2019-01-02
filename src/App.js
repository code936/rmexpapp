

import React, {Component} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import RNFetchblob from "rn-fetch-blob"




export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataRecieved: "Default data",
      ipAddress: "192.168.0.100"
    }
  }

  fetchData = () => {
    if (this.state.ipAddress != null) {
      RNFetchblob.config({
        trusty: false
      })
        .fetch('GET', `https://${this.state.ipAddress}:8000`,
          {'Content-Type': 'application/json'},
          JSON.stringify({ipAddress: this.state.ipAddress}))
        .then(res => res.json())
        .then(data => this.setState({dataRecieved: JSON.stringify(data)}))
        .catch(error => this.setState({dataRecieved: error.message}))
    }
  }

  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'}}>
        <Text >Welcome to React Native!</Text>
        <TextInput style={{height: 50, width: 200, marginHorizontal: 100, backgroundColor: "white"}}
          value={this.state.ipAddress}
          onChangeText={text => {
            this.setState({
              ipAddress: text
            })
          }}
        />


        <Button title="Fetch Data" onPress={() => this.fetchData()} />
        <Text >{this.state.dataRecieved}</Text>
      </View >
    );
  }
}
