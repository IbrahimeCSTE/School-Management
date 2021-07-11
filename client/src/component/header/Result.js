import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ResultTable from './ResultTable';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';
const Result = () => {
    const resList=useSelector(state=>state.resList)
    const [stuId,setStuId]=useState('')
    const [view,setView]=useState(false)
    const [pay,setPay]=useState(false)
    const submitHandle=(e)=>{
        e.preventDefault()
        setView(true)
    }
    const handleResult=()=>{
        setPay(true)
         
    }
    if(pay){
        return <Redirect to='/payment'></Redirect>
    }

    return (
        <div >
            <Navbar></Navbar>
            <div>
                   <div className='text-center mt-3'>
                        <h1>See Exam Paper?</h1>
                        <button  onClick={handleResult} className='btn btn-primary'>Click here</button>
                    </div>
                   
            </div>
            <h5 className='text-center mt-5'>See Result?<br /><small>Type:abcd</small></h5>
            <form className='seeResult' onSubmit={submitHandle}>
                <input type="text" value={stuId} onChange={(e)=>setStuId(e.target.value)} placeholder='stuId' /><br />
                <button className="btn btn-primary">Submit</button>
            </form>
               
           <div className='mb-5'>
           {
              view && resList.resultList.map((pd)=>pd.stuId===stuId?<ResultTable kye={pd._id} pd={pd}></ResultTable>:'')
            }
           </div>
        </div>
    );
};

export default Result;