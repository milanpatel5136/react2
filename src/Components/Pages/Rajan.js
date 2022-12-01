import React, { Component } from 'react'
import axios from 'axios';
import Contect from './Contect';

export default class Rajan extends Component {
    
    state = {
        records : []
    }

    componentDidMount ()
    {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then (m => {
            this.setState({records: m.data});
        })
    }

  render() {
    return (
      <div>{this.state.records.map((element) => {

        return (
            <div><Contect Milan={element}></Contect></div>
        )

      })}</div>
    )
  }
}
