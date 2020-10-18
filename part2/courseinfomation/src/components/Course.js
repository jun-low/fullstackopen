import React from 'react';
import Header from './Header';
import Content from './Content';

const getTotal = (parts) => {
  return parts.reduce((total, part) => total + part.exercises, 0 )
}

const Course = ({course}) => {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <strong>Total of {getTotal(course.parts)} exercises</strong>
    </div>
  )
}

export default Course;