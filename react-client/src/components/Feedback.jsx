import React from 'react';
import axios from 'axios'

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: ""
        }
        this.handletextFeedback = this.handletextFeedback.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handletextFeedback(e) {
        this.setState({
            feedback: e.target.value,
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        const { feedback } = this.state;
        console.log('Submit was clicked.');
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
                    <textarea
                        type="text"
                        placeholder="please write your feedback here"
                        value={this.state.feedback}
                        onChange={this.handletextFeedback}>
                    </textarea>
                    <br />
                    <button className="button" type="submit" onClick={this.handleSubmit} >Submit</button>
                </form>
            </div>
        )
    }
}

export default Feedback;