import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteEventFileAction, deleteEventFileDesAction, eventFileAction, eventFileDesAction } from '../../reducer/action';


const EventFile = () => {
    const dispatch=useDispatch()
    const [singleFile, setSingleFile] = useState('');
    const [singleProgress, setSingleProgress] = useState(0);
    const [des,setDes]=useState('');
    const imageList=useSelector(state=>state.imageFile.eventImageList)
    const desList=useSelector(state=>state.imageFile.eventDesList)

    const SingleFileChange = (e) => {
        setSingleFile(e.target.files[0]);
        setSingleProgress(0);
    }
  
    const singleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setSingleProgress(percentage);
        }
    }
 
    const uploadSingleFile = async () => {
        const formData = new FormData();
        formData.append('file', singleFile);
        dispatch(eventFileAction(formData,singleFileOptions))
          
    }
    const desFile=()=>{
        
        dispatch(eventFileDesAction(des))
    }
    const deleteFile=(file)=>{
        dispatch(deleteEventFileAction(file))
       
    }
    const deleteFileDes=(file)=>{
        dispatch(deleteEventFileDesAction(file))
       
    }
    return (
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label>Select event image</label>
                    <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} />
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile()} >Upload</button>
                    </div>
                    <div className="col-2">
                        <CircularProgressbar
                            value={singleProgress}
                            text={`${singleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7'
                               
                            })}
                        />
                    </div>
                      <div>
                        <label className='ml-3'>File Descreption</label><br />
                        <input type="text" className="ml-3 mb-2 p-5" onChange={(e) => setDes(e.target.value)} /><br />
                        <button type="button" className="ml-3 btn btn-danger" onClick={() => desFile()} >Upload</button>
                      </div>
                </div>
            </div>
            <div className='col-md-5 ml-5'>
               <h1>Event List</h1>
               <hr />
               <div>
                   {
                      imageList&&imageList.map((file)=><div key={file._id}>
                          <h4>Name:{file.fileName}</h4>
                          <button onClick={()=>deleteFile(file)} className='btn btn-danger btn-sm'>delete</button>
                      </div>)
                   }
                   <div>
                       {
                           desList&&desList.map((file)=><div key={file._id}>
                           <h6>description:{file.des}</h6>
                           <button onClick={()=>deleteFileDes(file)} className='btn btn-danger btn-sm'>delete</button>
                       </div>)
                       }
                   </div>
               </div>
            </div>
            </div>
)}
export default EventFile;