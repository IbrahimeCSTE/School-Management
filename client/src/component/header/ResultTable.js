import React from 'react';
import { useSelector } from 'react-redux';
import Zoom from "react-reveal/Zoom";
import { GpaName } from '../../ulit/totalResult';
const ResultTable = ({pd,error}) => {
    const{bangla1,bangla2,english1,english2,math,science}=pd
    const sum=bangla1+bangla2+english1+english2+math+science
    const paymentList=useSelector(state=>state.payment.paymentList)
    return (
     <div>
        <Zoom>
       <table className="table table-striped">
         <thead>
           <tr>
            <th scope="col">Code</th>
            <th scope="col">Subject</th>
            <th scope="col">Marks</th>
            <th scope="col">Grade</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>101</td>
           <td>Bangla 1st</td>
           <td>{pd.bangla1}</td>
           <td>{GpaName(pd.bangla1)}</td>
         </tr>
         <tr>
            <td>102</td>
            <td>Bangla 2nd</td>
            <td>{pd.bangla2}</td>
            <td>{GpaName(pd.bangla2)}</td>
         </tr>  
         <tr>
            <td>103</td>
            <td>English 1st</td>
            <td>{pd.english1}</td>
            <td>{GpaName(pd.english1)}</td>
         </tr>
         <tr>
            <td>104</td>
             <td>English 2nd</td>
             <td>{pd.english2}</td>
             <td>{GpaName(pd.english2)}</td>
         </tr>
         <tr>
            <td>105</td>
             <td>Math</td>
             <td>{pd.math}</td>
             <td>{GpaName(pd.math)}</td>
         </tr>
         <tr>
            <td>106</td> 
             <td>Science</td>
             <td>{pd.science}</td>
             <td>{GpaName(pd.science)}</td>
         </tr>
         <tr>
            <td>Total Marks</td> 
            <td></td> 
             <td>{sum}</td>
             <td></td>
         </tr>
     </tbody>
   </table>
   <div>
      {
         paymentList&&paymentList.map((pay)=>pay.stuId===pd.stuId? <div key={pay._id}>
         <h4 className="text-center mt-4">Payment</h4>
      <table className="table table-striped">
      <thead>
             <tr>
              <th scope="col">StuId</th>
              <th scope="col">TrxId</th>
              <th scope="col">SubjectCode</th>
              <th scope="col">Tk</th>
              <th scope="col">Date</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>{pay.stuId}</td>
             <td>{pay.trxId}</td>
             <td>{pay.subjectCode}</td>
             <td>{pay.tk}</td>
             <td>{pay.date}</td>
           </tr>
           </tbody>
      </table>
      </div>:'')
      }
   </div>
  </Zoom>
     </div>
    );
};

export default ResultTable;