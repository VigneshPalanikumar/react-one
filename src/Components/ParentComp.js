import React, { PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Benita'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Benita'
            })
        }, 2000)
    }
    
    render() {
        console.log('****************Parent Component Render******************')
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
