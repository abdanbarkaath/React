import React, { Component } from 'react'
 class Memo extends Component {
    render() {
        console.log("update memo");
        return (
            <div>
                <h1>name = {this.props.setname}</h1>
            </div>
        )
    }
}

export default React.memo(Memo)