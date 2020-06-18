import React, {Component} from 'react';
import './App.css';
import Vegeta from './Vegeta';
import Goku from './Goku';
import AddHits from './addHits'

class App extends Component {
  render() {
    return(
    <div className="App">

      <h1> Goku vs Vegeta</h1>
      <AddHits render={(hits, addOne) => (
          <Vegeta hits={hits} addOne={addOne} name="Vegeta"/>
          )}/>
      <AddHits render={(hits, addOne) => (
              <Goku hits={hits} addOne={addOne} name="Goku"/>
            )}/>
    </div>
)}}

export default App;
