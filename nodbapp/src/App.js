import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CreateGift from './components/CreateGift/CreateGift';
import Gift from './components/Gift/Gift';
import Header from './components/Header/Header';
import giftsUrl from './api'




class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: []
    };
    this.createGift=this.createGift.bind(this);
    this.updateGift=this.updateGift.bind(this);
    this.deleteGift=this.deleteGift.bind(this);
  }

  createGift(name, price) {
    axios.post(giftsUrl, {
      name: name, 
      price: price
    }).then(results =>{
        this.setState({gifts: results.data})
    })
  }

  componentDidMount() {
    axios.get(giftsUrl,).then(response => {
      this.setState({ gifts: response.data })
    })
  }

  updateGift(id, name, price) {
    axios.put(giftsUrl + `/${id}`, {
      name: name, 
      price: price
    }).then(response => { this.setState({ gifts: response.data }) })
  }

  deleteGift(id) {
    axios.delete(giftsUrl + `/${id}`).then(response => { this.setState({ gifts: response.data }) })
  }
  

  render() {
    const { gifts } = this.state;
    return (
      <div className="background">
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
