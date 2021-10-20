import "./styles.css";
import React, { createContext, useContext } from "react";
//import {indexInitialState, indexReducer} from './reducer.js'

const IndexContext = createContext();

function Box2(){
  const boxName = useContext(IndexContext);

  return(
    <div>박스 2 안에서 {boxName}</div>
  )
}
function Box1(){
  const boxName = useContext(IndexContext);

  return(
    <>
    <div>박스 1 안에서 {boxName}</div>
    <Box2 />
    </>
  )
}

export default function App() {
  const name = "marrrrtina"
  return (
    <div className="App">
      <IndexContext.Provider value={name}>
      <Box1 />
      </IndexContext.Provider>
    </div>
  );
}
