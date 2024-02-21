import React from 'react'
import { data } from './Provider'

const Child = () => {
  return (
    <data.Consumer>
        {(fname)=>{
            return <h1>{fname}</h1>
        }}
    </data.Consumer>
  )
}

export default Child;
