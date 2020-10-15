import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import questions from './questions.js';
import Quizz from './components/quizz.jsx';
//import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
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
      <h1>Item List</h1>
      <Quizz items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));