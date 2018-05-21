import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons'

export default class CreateGift extends Component {
    constructor() {
        super();
        this.state = {

        };
    };




    render() {
        return (
            <div className ='App-Child'>
                <input className = 'Gift-Creator' placeholder ='Enter Gift Name Here'/>
                <Buttons name="Create Gift"/>
            </div>

        )
    };
};
