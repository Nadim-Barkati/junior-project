import React from 'react'; 
import axios from 'axios'

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        feedback : ""
    }
    this.handleInputFeedback=this.handleInputFeedback.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  



  handleInputFeedback(e){
    this.setState({
        feedback: e.target.value,
    })
  }


 

handleClick(e) {
  e.preventDefault();
  const {feedback} = this.state;
  console.log('Button was clicked.');
  axios({
    method: 'post',
    url: "/feedback",
    data: {
        feedback: feedback
      
    }
}).catch((err) => {
    console.dir(err);
});
}
render() {
  return (
    <div>
      <h1>Feedback</h1>
      <form onSubmit={Feedback}>
      <input
                  type="text"
                  placeholder="Feedback"
                  value={this.state.feedback}
                  onChange={this.handleInputFeedback}
                />
                
        <br />
        <button type="submit" onClick={this.handleClick} >Signup</button>
      </form>
    </div>
  );
}
}
 
  export default Feedback ;