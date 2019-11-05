import React, { Component,PureComponent } from 'react'

export default class PureaComponent extends PureComponent {
    render() {
        console.log("pure");
        return (
            <div>
                <h1>name = {this.props.setname}</h1>
            </div>
        )
    }
}
