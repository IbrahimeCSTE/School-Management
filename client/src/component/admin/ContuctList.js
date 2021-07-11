import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContuct } from '../../reducer/action';


const ContuctList = () => {
   
    const contuctList=useSelector(state=>state.contuct.contuctList)
    const dispatch=useDispatch()
    return (
        <div>
        {
            
            contuctList&& contuctList.map((pd)=>(<div key={pd._id} className="card text-center container mt-5">
                <div className="card-header">
                    <h4>{pd.message}</h4> 
                    <small>{pd.email}</small>
                    <button onClick={()=>dispatch(deleteContuct(pd))} className="btn btn-danger  btn-sm mr-2">Delete</button> 
                </div>
            </div>)
            )
            
        }
    </div>
    );
};

export default ContuctList;