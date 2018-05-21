import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CreateGift from './components/CreateGift/CreateGift';
import Gift from './components/Gift/Gift';
import Header from './components/Header/Header';


class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: [{
        id: 0,
        name: 'Instant Pot',
        price: 0
      }, {
        id: 1,
        name: 'Marmot Tent',
        price: 0
      }, {
        id: 2,
        name: 'Hampton Bay Outdoor Patio Set',
        price: 0
      },
      {
        id: 3,
        name: 'Coway Air Purifyer',
        price: 0
      },
      {
        id: 4,
        name: 'RC Willey 8\'x10\' Rug',
        price: 0
      }]
    };
  }

  createGift(name, price) {
    axios.post('').then(results =>{
        this.setState({gifts: results.data})
    })
  }

  compnentDidMount() {
    axios.get('').then(response => (this.setState({ gifts: response.data })
    ))
  }

  updateGift(id) {
    axios.put('' + `/${id}`).then(response => { this.setState({ gifts: response.data }) })
  }

  deleteGift(id) {
    axios.delete('' + `/${id}`).then(response => { this.setState({ gifts: response.data }) })
  }

  render() {
    const { gifts } = this.state;
    return (
      <div className="App">
        <Header />

        <CreateGift createGift={this.createGift} />
        {
          gifts.map(gift => (
            <Gift
              key={gift.id}
              id={gift.id}
              name={gift.name}
              price={gift.price}
              updateGift={this.updateGift}
              deleteGift={this.deleteGift}

            />

          )
          )
        }

      </div>
    );
  }
}

export default App;
