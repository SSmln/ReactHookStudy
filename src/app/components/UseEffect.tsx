'use client'

import { useState,useEffect } from "react";

const UseEffectExample = () => {
    const [test, setTest] = useState('initial value');
    useEffect(() => {
        console.log('state가 변경될 때 마다 호출!');
        return () => {
          console.log('언마운트 시 호출!')
        }
      },[])
    return (
      <div>
        <p>{test}</p>
        <input onChange={(e) => {setTest(e.target.value)}} />
      </div>
    )
  }

export default UseEffectExample;