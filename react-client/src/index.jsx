import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import questions from './questions.js';
import Quizz from './components/quizz.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Submit from './components/Submit.jsx';

import Feedback from './components/Feedback.jsx'
//import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = { 
      items: [],
      showHideQuizz: false ,
      showHideFeedback: false
    }
    this.onclickchangestate=this.onclickchangestate.bind(this) ;
    //this.onclickchangestate=this.onclickchangestate.bind(this) ;
  }


 onclickchangestate(){
    this.setState({showHideQuizz:!this.state.showHideQuizz}) 
 }
  
 onclickcshowfeedback(){
  this.setState({showHideFeedback:!this.state.showHideFeedback}) 
}
 
 componentDidMount() {

    this.setState({
      items: questions
    })

    /*
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    */

  }

  render () {

    return (<div>
      <h1 className="welcome" >Welcome </h1>
      {this.state.showHideQuizz===false?(
        <div>
      <Signup showHideQuizz={this.onclickchangestate} />
      <Login/>
      </div> ):(
        <div>
      <Quizz items={this.state.items}/>
      <Submit/>
      <div>
      <Feedback/>
      </div>
      </div>) }
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));