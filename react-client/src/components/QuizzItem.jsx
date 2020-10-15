import React from "react";

const QuizzItem = (props) => (
  <div>
    <h2>Question {props.number}: {props.item.question}?</h2>

    <select name="" id="">
      <option value={props.item.answer1}>{props.item.answer1}</option>
      <option value={props.item.answer2}>{props.item.answer2}</option>
      <option value={props.item.answer3}>{props.item.answer3}</option>
    </select>
    {props.item.description}
  </div>
);

export default QuizzItem;
