import React, { createContext } from 'react'
import ChildA from './ChildA';


const data = createContext();

const Provider = () => {
  return (
    <data.Provider value={"verma"}>
        <ChildA/>
    </data.Provider>
  )
}

export default Provider
export {data}
