import React, { Component } from 'react';

export default class EditGift extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            price: 0
        };
    };

handleNameEdit(val){
    this.setState({name:val})
}


handlePriceEdit(val){
    this.setState({price:val})
}

    render() {
        const{updateGift, hideEdit}=this.props;

        return (
            <div>
                <input className = 'editName' placeholder ='Edit Gift Name Here'
                onChange={(e)=>{this.handleNameEdit(e.target.value)}}/>
                <input className = 'editPrice' placeholder ='Edit Gift Price Here'
                onChange={(e)=>(this.handlePriceEdit(e.target.value))}/>
                <button className='priceEditButton'
                onClick={()=>{updateGift(this.state.name, this.state.price)}}>Save</button>
                <button className='cancelButton'
                onClick={()=>{hideEdit()}}>Hide Edit</button>
            </div>

        )
    }
};