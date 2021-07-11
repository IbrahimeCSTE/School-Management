import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fade from "react-reveal/Fade";
import { resultAction } from '../../reducer/action';
const Result = () => {
    const isResult=useSelector(state=>state.res.isResult)
    const dispatch=useDispatch()
    const [stuId,setStuId]=useState('')
    const [name,setName]=useState('')
    const [bangla1,setBangla1]=useState('')
    const [bangla2,setBangla2]=useState('')
    const [english1,setEnglish1]=useState('')
    const [english2,setEnglish2]=useState('')
    const [math,setMath]=useState('')
    const [science,setScience]=useState('')


    const submitHandle=(e)=>{
        e.preventDefault()
        const resultData={stuId,name,bangla1,bangla2,english1,english2,math,science}
        dispatch(resultAction(resultData))
 
    }
    return (
       <div>
           {
               isResult?<div className='successIcon'><i className='fa fa-5x fa-check-circle'></i><h2>Success</h2></div>:<Fade right cascade>
               <div className="class">
               <h1>Result Sheet</h1>
            
             </div>
        
                <div className="result">
    
                <form onSubmit={submitHandle}>
                    <input type="text" value={stuId} onChange={(e)=>setStuId(e.target.value)} placeholder="stuId" /><br />
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" /><br />
                    <input type="text" value={bangla1} onChange={(e)=>setBangla1(e.target.value)} placeholder="Bangla 1st paper marks" /><br />
                    <input type="text" value={bangla2} onChange={(e)=>setBangla2(e.target.value)} placeholder="Bangla 2nd paper marks" /><br />
                    <input type="text" value={english1} onChange={(e)=>setEnglish1(e.target.value)} placeholder="English 1st paper marks" /><br />
                    <input type="text" value={english2} onChange={(e)=>setEnglish2(e.target.value)} placeholder="English 2nd paper marks" /><br />
                    <input type="text" value={math} onChange={(e)=>setMath(e.target.value)} placeholder="Math paper marks" /><br />
                    <input type="text" value={science} onChange={(e)=>setScience(e.target.value)} placeholder="Science paper marks" /><br />
                   <button className="btn btn-primary">Submit</button>
                </form>
            </div>
           </Fade>
           }
       </div>
    );
};

export default Result;