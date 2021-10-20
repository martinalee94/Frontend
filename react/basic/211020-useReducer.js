<app.js>
  
import React, { useState, useReducer } from "react";
import {indexInitialState, indexReducer} from './reducer.js'



export default function App() {
  const [state, dispatch] = useReducer(indexReducer, indexInitialState);
  return (
    <div className="App">
      <button onClick={()=>{dispatch({type:'changeToKor'})}}>한글</button>
      <button onClick={()=>{dispatch({type:'changeToEng'})}}>english</button>
      <div>{state.text}</div>
      <button onClick={()=>{dispatch({type:'minusCount'})}}>-</button>
      <button onClick={()=>{dispatch({type:'plusCount'})}}>+</button>
      <div>{state.count}</div>
    </div>
  );
}




-----------------------------------------------------------------------------------------
<reducer.js>

import React, {useReducer} from 'react';

//기존 코드에서 상태를 여기에 넣어준다
export const indexInitialState =()=>{ 
  text:'기본값',
  count: 0
};

export const indexReducer =(state, action) =>{
  switch(action.type){
    case 'changeToKor':{
      return{
        ...state, text:'안녕하세요'
      }
    }
    case 'changeToEng':{
      return{
        ...state, text:'hello'
      }
    }
    case 'minusCount':{
      return{
        ...state,
        count: state.count -1
      }
    }
    case 'plusCount':{
      return{
        ...state,
        count: state.count + 1
      }
    }
  }
}
