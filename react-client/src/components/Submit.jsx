import React from "react";

class Submit extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        score : []
      }
      
      this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        e.preventDefault();
        console.log('Button was clicked.');
      
      }




    render() {
        return (
          <div>
              <button type="submit" onClick={this.handleClick}  >Submit</button>
           
          </div>
          );
        }
        }


export default Submit;
