
import React from 'react'; 
import axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: "",
      password: ""
    }
    this.handleInputUsername=this.handleInputUsername.bind(this);
    this.handleInputPassword=this.handleInputPassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputUsername(e){
    this.setState({
      username: e.target.value,
    })
  }
handleInputPassword(e){
  this.setState({
    password: e.target.value,
  })
}

handleClick(e) {
    e.preventDefault();
    const {username, password} = this.state;
    
    console.log('Button was clicked.');
    axios({
      method: 'post',
      url: "/login",
      data: {
        username: username,
        password: password
      }
  }).catch((err) => {
      console.dir(err);
  });
  }

render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={Login}>
        <input
                    className="input"
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleInputUsername}
                  />
                  <input
                    className="input"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleInputPassword}
                  />
          <br />
          <button type="submit" onClick={this.handleClick} >Login</button>
        </form>
      </div>
    );
  }
  }
   
    export default Login ;