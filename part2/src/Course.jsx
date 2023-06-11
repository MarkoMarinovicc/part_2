import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) => {
    console.log(props.courses.parts)
  return <div><Header course={props.courses.name}/>
  <Content parts={props.courses.parts} name={props.courses.parts.name} exercises={props.courses.parts.exercises} />
  <Total parts={props.courses.parts}/>
  </div>
};

export default Course;
