import React, { useState } from 'react';
import {Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { paymentAction } from '../../reducer/action';
import Navbar from '../header/Navbar';

const Payment = () => {
    const dispatch=useDispatch()
    const pay=useSelector(state=>state.payment.pay)
    const payment=useSelector(state=>state.payment.payment)
    const[stuId,setStuId]=useState('')
    const[trxId,setTrxId]=useState('')
    const[subjectCode,setSbCode]=useState('')
    const[tk,setTk]=useState('')
    const[date,setDate]=useState('')
    const[docs,setDocs]=useState(false)

    const paymentData={
        stuId,trxId,subjectCode,tk,date
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(paymentAction(paymentData))
    }

    const handleDocs=()=>{
        setDocs(true)
    }

    if(docs){
        return <Redirect to='/result' />
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="payment">
            <h1>Payment Method</h1>
            <h4>01777777777<br />(bksah/Nogad personal)</h4>
            <div>
                <button onClick={handleDocs} className='btn btn-info btn-sm mt-3'>Payment Docs</button>
            </div>
            </div>
            <div>
                {
                    pay?(<div style={{width:'50%',marginLeft:'300px'}} className="text-center alert alert-warning alert-dismissible fade show" role="alert">
               
                    <strong>Payment Successfully!Click Payment Docs </strong>
                    
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                   </div>):payment==='server error'?(<div style={{width:'50%',marginLeft:'300px'}} className="text-center alert alert-warning alert-dismissible fade show" role="alert">
               
               <strong>stuId alreay used </strong>
               
               <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
             </button>
              </div>): ''
                }
            </div>
            <form className='paymentForm' onSubmit={handleSubmit}>
                <input type="text" value={stuId} onChange={(e)=>setStuId(e.target.value)} placeholder='stuId' required /><br />
                <input type="text" value={trxId} onChange={(e)=>setTrxId(e.target.value)} placeholder='TrxId' required /><br />
                <input type="text" value={subjectCode} onChange={(e)=>setSbCode(e.target.value)} placeholder='Subject code' required /><br />
                <input type="text" value={tk} onChange={(e)=>setTk(e.target.value)} placeholder='Tk' required /><br />
                <input type="text" value={date} onChange={(e)=>setDate(e.target.value)} placeholder='dd/mm/yyyy' required /><br />
                <button className="btn btn-primary">submit</button>
            </form>
        </div>
    );
};

export default Payment;