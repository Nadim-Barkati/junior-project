import React from 'react';
import QuizzItem from './QuizzItem.jsx';


const Quizz = (props) => (
  <div>
    <h4> Quizz Component </h4>

    There are { props.items.length } items.
    { props.items.map((item,ind) => <QuizzItem key= {item._id}item={item} number={ind+1} />)}
  </div>
)

export default Quizz;