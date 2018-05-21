import React, { Component } from 'react';
import axios from 'axios';

export default class CreateGift extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: 0
        };
    };

    handleNameChange(val){
        this.setState({name: val});
    };

    handlePriceChange(val){
        this.setState({price: val});
    };

   

   
    render() {
        const {createGift}=this.props;
        return (
            <div className ='App-Child'>
                <input className = 'nameInput' placeholder ='Enter Gift Name Here'
                onChange={(e)=>{this.handleNameChange(e.target.value)}}/>
                <input className = 'priceInput' placeholder ='Enter Gift Price Here'
                onChange={(e)=>(this.handlePriceChange(e.target.value))}/>
                <button className='confimationButton'
                onClick={()=>{createGift(this.state.name, this.state.price)}}>Create Gift</button>
            
            </div>

        )
    };
};
