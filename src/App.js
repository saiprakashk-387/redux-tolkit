import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import './App.css';
import { api, apiFill } from "./API/Api"
import { sampleSelector, fillTextSelector } from './redux/slice';
import SampleFilltext from './Containers/SampleFilltext';


function App() {

  // const { sample, fillText } = useSelector(sampleSelector)
  // console.log("sample", sample)

  // const {fillText} = useSelector(fillTextSelector)
  // console.log("fill", fillText)

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(api())
  // }, [])

  // useEffect(() => {
  //   dispatch(apiFill())
  // }, [])

  return (
    <>
      <div className="App">
        <SampleFilltext/>
        {/* {sample.title} */}
       
      </div>
      {/* {fillText?.length >= 0 ?
        <div>
          {fillText.map((val, key) => {
            return <>
              <p>{key[val.email]}:{val.email}</p>
            </>
          })}         
        </div>
        : null} */}

    </>
  );
}

export default App;
