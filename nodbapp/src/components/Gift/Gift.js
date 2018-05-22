import React, { Component } from 'react';
import EditGift from '../EditGift/EditGift'

export default class Gift extends Component {
    constructor() {
        super();
        this.state = {
            editing: false
        };
       this.hideEdit=this.hideEdit.bind(this);
        
    };

    showEdit() {
        this.setState({ editing: true })
    }
    
    hideEdit() {
        this.setState({ editing: false })
    }


    render() {
        const { id, name, price, updateGift, deleteGift } = this.props;
        const { editing } = this.state;

        return (
            <div className='updateDeleteButtons'>
                <span className='Gift'>{name} (${price})</span>
                <button name='Update' className="editButton"
                    onClick={() => { this.showEdit() }}>Update</button>
                <button name='Delete' className="editButton"
                    onClick={() => { deleteGift(id) }}>Delete</button>
                {editing ?
                    <EditGift
                    id={id}
                    updateGift={updateGift}
                    hideEdit={this.hideEdit}/> : ""}
            </div>
        )
    }
};