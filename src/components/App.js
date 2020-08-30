import React, { Component } from 'react'
import './App.css'

export class App extends Component {
    state = {
        question: '',
        option1 : '',
        option2 : '',
        option3 : '',
        answer: ''
    }

    handleQuestion = (e) => {
        this.setState({
            question: e.target.value
        })
    }

    handleFirstOption = (e) => {
        this.setState({
            option1: e.target.value
        })
    }

    handleSecondOption = (e) => {
        this.setState({
            option2: e.target.value
        })
    }

    handleThirdOption = (e) => {
        this.setState({
            option3: e.target.value
        })
    }

   generateAnswers = (e) => {
    e.preventDefault()
    var answers = [this.state.option1,this.state.option2,this.state.option3 ]
    var random = Math.floor(Math.random() * 3)
    this.setState({answers: answers[random]})
    }

    render() {
        return (
            <div className = "container">
                <br/>
                <form onSubmit = {this.generateAnswers}>
                    <h1>Question</h1>
                    <div className="form-group">
                        <input type="text" className="form-control" id="question" onChange = {this.handleQuestion} value = {this.state.question}/>   
                    </div>
                    <h1>Options</h1>
                    <div className="form-group">     
                        <input type="text" className="form-control" id="option1" placeholder = 'A' onChange = {this.handleFirstOption} value = {this.state.option1}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="option2" placeholder = 'B'  onChange = {this.handleSecondOption} value = {this.state.option2}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="option3" placeholder = 'C' onChange = {this.handleThirdOption} value = {this.state.option3}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Generate Answers</button>
                </form><br/>

                <div>
                   <h4>{this.state.question}</h4>
                   <ul>
                       <li style = {{listStyleType: 'none'}}>{this.state.option1}</li><br/>
                       <li style = {{listStyleType: 'none'}}>{this.state.option2}</li><br/>
                       <li style = {{listStyleType: 'none'}}>{this.state.option3}</li><br/>
                   </ul>
                    <h3 className = "text-center" style = {{color: 'red'}}>{this.state.answers}</h3>
                </div>
            </div>
        )
    }
}

export default App
