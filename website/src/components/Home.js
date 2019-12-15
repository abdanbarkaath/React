import React, { Component } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Body></Body>
            </div>
        )
    }
}
