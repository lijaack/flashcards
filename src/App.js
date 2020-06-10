import React, { Component } from 'react';
import './App.css';
import flashcardData from './flashcard-data/flashcardData';

class App extends Component {
  state={
    topic:'',
    questions:{},
    random: null,
    showAnswer:false
  }
  componentDidMount(){
    this.setState({questions: flashcardData});
  }
  onChange  = event => {
    this.setState({ [event.target.name]: event.target.value }, this.generateRandom);
  }
  generateRandom=()=>{
    this.setState({random: Math.floor(Math.random() * this.state.questions[this.state.topic].length)})
    this.setState({showAnswer: false});
  }
  showAnswer = () =>{
    this.setState({showAnswer: true});
  }
  render() {
    let question
    let answer

    if(this.state.random !=null){
      question = <h3>{this.state.questions[this.state.topic][this.state.random].question}</h3>;
      answer = <p>{this.state.questions[this.state.topic][this.state.random].answer}</p>;
    }
    return (
          <div className="App">
            <div className="container">

              <div className="row ">
                <div className="col-md-4 ">
                </div>
                <div className="col-md-4 ">
                  <div className="form-group">
                    <label htmlFor="topic">choose a topic</label>
                    <select className="form-control form-control-sm dropdown"  defaultValue={'DEFAULT'} onChange={this.onChange} name="topic" id="topic">
                      <option value="DEFAULT" disabled>Choose a Topic</option>
                      { Object.keys(this.state.questions).map((k, i)=>{
                        return <option key={i} value={k}>{k}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-md-4 ">
                </div>      
              </div>

              <div className="row">
                <div className="col-md-3 ">
                </div>
                <div className="col-md-6">
                    {question}
                    {this.state.showAnswer? answer:''}
                    <br></br>
                      <button type="button" className="btn btn-sm btn-primary" onClick={this.showAnswer}>showAnswer</button> 

                      {this.state.topic? <button  type="button" className="btn btn-sm btn-info" onClick={this.generateRandom}>New Question</button>:''}
                </div>
                <div className="col-md-3 ">
                </div>      

              </div>
            </div>
          </div>
    );
  } 
}

export default App;
