import React, { Component } from 'react'
// import { connect } from 'react-redux'


export default class greet extends Component {
    constructor(props) {
        super(props);
        this.state = {name:'Brijesh'}
        // this.state = {'active': false, 'class': 'album'}
    }

    changeName = () => {

        if(this.state.name === 'Brijesh'){
            this.setState({'name' : 'Suyash Sir'})
        }else{
            this.setState({'name' : 'Brijesh'})
        }


        // this.setState({'active': true,'class': 'active'})
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Check Me</button>
            </div>
        )
    }
}
