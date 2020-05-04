import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }
    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleComments = event => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopic = event => {
        this.setState({
            topic: event.target.value
        })
        // console.log('hey')
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        
        //event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name </label>
                    <input type="text" value={this.state.username} onChange={this.changeUsername} />
                </div>
                <br/>
                <div>            
                    <label>Comments </label>
                    <textarea value={this.state.comments} onChange={this.handleComments}/>
                </div>
                <br/>
                <div>
                    <label>Topic </label>
                    <select value={this.state.topic} onChange={this.handleTopic}>
                        <option value="angular">Angular</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
