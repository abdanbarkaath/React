import React, { Component } from 'react'
import Childcomp from './childcomp'

export class parentcomp extends Component {
constructor(props) {
    super(props)

    this.state = {
         text:"message from parent"
    }

    this.parentMethod = this.parentMethod.bind(this);

}

parentMethod(child){
    console.log(`this is a ${this.state.text} from ${child}`)
}


    render() {
        return (
            <div>
                <Childcomp childHandler={this.parentMethod}></Childcomp>        
            </div>
        )
    }
}

export default parentcomp
