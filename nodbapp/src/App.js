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
      gifts: [],
      nameDay: []

    };
    this.createGift=this.createGift.bind(this);
    this.updateGift=this.updateGift.bind(this);
    this.deleteGift=this.deleteGift.bind(this);
  }

  createGift(name, price) {
    axios.post(giftsUrl, {
      name: name, 
      price: price
    }).then(response =>{
        this.setState({gifts: response.data})
    })
  }

  componentDidMount() {
    axios.get(giftsUrl,).then(response => {
      this.setState({ gifts: response.data })
    })

    axios.get('https://api.abalin.net/get/getdate?name=Katrina&calendar=us', {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(response=>{
      console.log(response.data.results)
     this.setState({nameDay:response.data.results});
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
    const { gifts, nameDay } = this.state;
    // console.log(nameDay[0].name);
    return (
      <div className="background">
        <Header />
        {
          nameDay.map((date,i) => (
            <h3 key={i}>My Name Day falls on {date.month} - {date.day}</h3>
          ))
        }

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
