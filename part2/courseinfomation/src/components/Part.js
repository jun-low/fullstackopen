import React from "react";

const Part = ({ data }) => {
  return (
    <p>
      {data.name} {data.exercises}
    </p>
  )
}

export default Part;