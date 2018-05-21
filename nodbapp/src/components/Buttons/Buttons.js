import React, { Component } from 'react';

export default class Buttons extends Component {
    constructor() {
        super();
        this.state = {
            

        };
    };



    render() {
        const buttonName = this.props.name;
        return (
            <button className = 'Add-Gift'>{buttonName}</button>
        )
    };
};
