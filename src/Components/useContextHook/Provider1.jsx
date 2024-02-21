import React, { createContext } from 'react'
import ChildA from './ChildA';

const data = createContext();
const data1 = createContext();

const Provider1 = () => {
  return (
    <data.Provider value={"sahib"}>
      <data1.Provider value={"verma"}>
        <ChildA/>
        </data1.Provider>
    </data.Provider>
  )
}

export default Provider1;
export {data,data1}