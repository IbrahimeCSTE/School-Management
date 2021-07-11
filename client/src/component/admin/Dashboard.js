import React, { useState } from 'react';
import Navbar from './Navbar';
import Notice from './Notice';
import Result from './Result';
import NoticeList from './NoticeList';
import ContuctList from './ContuctList';
import PaymentList from './PaymentList';
import YoutubeVideo from './YoutubeVideo'
import FileUpload from './FileUpload';
import EventFile from './EventFile';
const Dashboard = () => {
    const [result,setResult]=useState(false)
    const [notice,setNotice]=useState(false)
    const [noticeList,setNoticeList]=useState(false)
    const [contuctList,setContuctList]=useState(false)
    const [paymentList,setPaymentList]=useState(false)
    const [video,setVideo]=useState(false)
    const [file,setFile]=useState(false)
    const [event,setEvent]=useState(false)
    const ResultHandle=()=>{
      setResult(true)
      setNotice(false)
      setNoticeList(false)
      setContuctList(false)
      setPaymentList(false)
      setVideo(false)
      setFile(false)
      setEvent(false)
    }

    const NoticeHandle=()=>{
      setResult(false)
      setNoticeList(false)
      setNotice(true)
      setContuctList(false)
      setPaymentList(false)
      setVideo(false)
      setFile(false)
      setEvent(false)
    }

    const NoticeListHandle=()=>{
      setResult(false)
      setNotice(false)
      setNoticeList(true)
      setContuctList(false)
      setPaymentList(false)
      setVideo(false)
      setFile(false)
      setEvent(false)
    }

    const CountListHandle=()=>{
      setResult(false)
      setNotice(false)
      setNoticeList(false)
      setContuctList(true)
      setPaymentList(false)
      setVideo(false)
      setFile(false)
      setEvent(false)
    }

    const paymentListHandle=()=>{
      setResult(false)
      setNotice(false)
      setNoticeList(false)
      setContuctList(false)
      setPaymentList(true)
      setVideo(false)
      setFile(false)
      setEvent(false)
    }

    const videotHandle=()=>{
      setResult(false)
      setNotice(false)
      setNoticeList(false)
      setContuctList(false)
      setPaymentList(false)
      setVideo(true)
      setFile(false)
      setEvent(false)
    }
    const fileHandle=()=>{
      setResult(false)
      setNotice(false)
      setNoticeList(false)
      setContuctList(false)
      setPaymentList(false)
      setVideo(false)
      setFile(true)
      setEvent(false)
    }
    const eventHandle=()=>{
      setResult(false)
      setNotice(false)
      setNoticeList(false)
      setContuctList(false)
      setPaymentList(false)
      setVideo(false)
      setFile(false)
      setEvent(true)
    }

    return (
        <div>
            <Navbar />
            <div className="row">
              <div className="sidebar col-md-2">
                <h6 style={{cursor:'pointer'}} onClick={ResultHandle} ><i className="fas fa-poll"></i> Push result</h6>
                <h6 style={{cursor:'pointer'}} onClick={NoticeHandle} ><i className="fas fa-flag"></i> Notice</h6>
                <h6 style={{cursor:'pointer'}} onClick={NoticeListHandle} ><i className="fas fa-list"></i> Notice List</h6>
                <h6 style={{cursor:'pointer'}} onClick={CountListHandle} ><i className="fas fa-address-book"></i>Contuct List</h6>
                <h6 style={{cursor:'pointer'}} onClick={paymentListHandle} ><i className="fas fa-money-bill"></i>Payment List</h6>
                <h6 style={{cursor:'pointer'}} onClick={videotHandle} ><i className="fas fa-video"></i>Video</h6>
                <h6 style={{cursor:'pointer'}} onClick={fileHandle} ><i className="fas fa-image"></i>Carousel</h6>
                <h6 style={{cursor:'pointer'}} onClick={eventHandle} ><i className="fas fa-file"></i>Event</h6>

              </div>
              <div className="col-md-8">
               {
                 result&&<Result/>
               }
               <div>
                 {
                   notice&& <Notice></Notice>
                 }
                 </div>

                 <div>
                 {
                   noticeList&& <NoticeList></NoticeList>
                 }
                 </div>
                 <div>
                 {
                   contuctList&& <ContuctList></ContuctList>
                 }
                 </div>
                 <div>
                 {
                   paymentList&& <PaymentList></PaymentList>
                 }
                 </div>
                 <div>
                 {
                   video&& <YoutubeVideo></YoutubeVideo>
                 }
                 </div>
                 <div>
                 {
                   file&& <FileUpload></FileUpload>
                 }
                 </div>
                 <div>
                 {
                   event&& <EventFile></EventFile>
                 }
                 </div>
              </div>
            </div>
        </div>
    );
};

export default Dashboard;