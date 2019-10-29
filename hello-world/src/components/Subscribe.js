import React,{Component} from 'react'

class Subscribe extends Component {
    constructor(){
        super();
        this.state = {
        message:"welcome guest"
        }
    }

    changeMsg(){
        this.setState({
            message:"thanks for subscribing"
        })
    }
     render(){
         return(
             <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMsg()}>Subscribe</button>
             </div>
         ) 
     }
}

export default Subscribe