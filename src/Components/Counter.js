import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    changeState()
    {
        this.setState({
            count: this.state.count+1
        }, () => {console.log('Call value',this.state.count)}
        )
    }
    render() {
        return (
            <div>
                <p>Count={this.state.count}</p>
                <button onClick={() => this.changeState()}>Increment</button>
            </div>
        )
    }
}

export default Counter
