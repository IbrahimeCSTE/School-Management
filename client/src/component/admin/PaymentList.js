import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePayment } from '../../reducer/action';

const PaymentList = () => {
    const paymentList=useSelector(state=>state.payment.paymentList)
    const dispatch=useDispatch()
    const [id,setId]=useState()
    const[searchId,setSearchId]=useState(false)

    const handleId=(e)=>{
        e.preventDefault()
        setSearchId(true)
    }
    return (
        <div>
            <form onSubmit={handleId}>
                <input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder='search stuId' />
                <button className='btn btn-primary btn-sm'>submit</button>
            </form>
            <div>
                {
                   searchId&&(paymentList.map((pd)=>pd.stuId===id?(<div key={pd._id} className="searchPayment card text-center container mt-5">
                   <div className="card-header">
                       <h4>StudentId:{pd.stuId}</h4>
                       <h4>TrxId:{pd.trxId}</h4> 
                       <h4>Subject:{pd.subjectCode}</h4> 
                       <h4>Payment:{pd.tk}Tk</h4> 
                       <h4>Date:{pd.date}</h4> 
                       <button onClick={()=>dispatch(deletePayment(pd))} className="btn btn-danger  btn-sm mr-2">Delete</button> 
                   </div>
               </div>):' '
               ))
                }
            </div>
            <div>
             {
            
            paymentList.length>0? paymentList.map((pd)=>(<div key={pd._id} className="card text-center container mt-5">
                <div className="card-header">
                    <h4>StudentId:{pd.stuId}</h4>
                    <h4>TrxId:{pd.trxId}</h4> 
                    <h4>Subject:{pd.subjectCode}</h4> 
                    <h4>Payment:{pd.tk}Tk</h4> 
                    <h4>Date:{pd.date}</h4> 
                    <button onClick={()=>dispatch(deletePayment(pd))} className="btn btn-danger  btn-sm mr-2">Delete</button> 
                </div>
            </div>)
            ):<h1 className='text-center'>No Payment List</h1>
            
        }
    </div>
        </div>
    );
};

export default PaymentList;