import React, { Component } from 'react'

class Goku extends Component {
  render() {
    const {hits, addOne, name} = this.props
    return (
      <div>
      <button onClick={addOne}> {name} Frappe</button>
      <p> {hits} </p>
      </div>)}}
export default Goku
