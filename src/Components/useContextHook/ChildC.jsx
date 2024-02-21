import React, { useContext } from 'react'
import { data, data1 } from './Provider1';

const ChildC = () => {

  const fname = useContext(data);
  const lname = useContext(data1);

  return (
    <div>
      <h1>{fname}</h1>
      <h1>{lname}</h1>
    </div>
  )
}

export default ChildC
