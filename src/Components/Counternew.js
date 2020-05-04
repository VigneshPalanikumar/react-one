import React, { Component } from 'react'

class Counternew extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
changestate(){
    this.setState({
        count: this.state.count+1
    }, ()=> {console.log('Callback value:',this.state.count)}
    )
}
    
    render() {
        return (
            <div>
                <p>Count={this.state.count}</p>
                <button onClick={()=>this.changestate()}>Increment</button>
            </div>
        )
    }
}

export default Counternew
