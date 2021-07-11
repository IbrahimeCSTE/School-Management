import {GET_IMAGE_FAIL, GET_IMAGE_LOADING, GET_IMAGE_SUCCESS, IMAGE_FAIL, IMAGE_LOADING, IMAGE_SUCCESS, ADMIN_LOGIN_FAIL, ADMIN_LOGIN_PROCESS, ADMIN_LOGIN_SUCCESS, CONTUCT_FAIL, CONTUCT_LIST_FAIL, CONTUCT_LIST_LOADING, CONTUCT_LIST_SUCCESS, CONTUCT_LOADING, CONTUCT_SUCCESS, DELETE_NOTICE, DELETE_NOTICE_PROCESS, DELETE_VIDEO_FAIL, DELETE_VIDEO_LOADING, DELETE_VIDEO_SUCCESS, DETELE_CONTUCT_FAIL, DETELE_CONTUCT_SUCCESS, LOGIN_FAIL, LOGIN_PROCESS, LOGIN_SUCCESS, LOGOUT, NOTICE_FAIL, NOTICE_LIST_FAIL, NOTICE_LIST_PROCESS, NOTICE_LIST_SUCCESS, NOTICE_PROCESS, NOTICE_SUCCESS, PAYMENT_DELETE_FAIL, PAYMENT_DELETE_SUCCESS, PAYMENT_FAIL, PAYMENT_LIST_FAIL, PAYMENT_LIST_LOADING, PAYMENT_LIST_SUCCESS, PAYMENT_LOADING, PAYMENT_SUCCESS, REGISTER_FAIL, REGISTER_PROCESS, REGISTER_SUCCESS, RESULT_FAIL, RESULT_LIST_FAIL, RESULT_LIST_PROCESS, RESULT_LIST_SUCCESS, RESULT_PROCESS, RESULT_SUCCESS, UPDATE_NOTICE, UPDATE_NOTICE_PROCESS, YOUTUBELIST_VIDEO_FAIL, YOUTUBELIST_VIDEO_LOADING, YOUTUBELIST_VIDEO_SUCCESS, YOUTUBE_VIDEO_FAIL, YOUTUBE_VIDEO_LOADING, YOUTUBE_VIDEO_SUCCESS, DELETE_IMAGE_SUCCESS, DELETE_IMAGE_FAIL, GET_IMAGE_DES_LOADING, GET_IMAGE_DES_SUCCESS, GET_IMAGE_DES_FAIL, IMAGE_DES_LOADING, IMAGE_DES_SUCCESS, IMAGE_DES_FAIL, DELETE_IMAGE_DES_SUCCESS, DELETE_IMAGE_DES_FAIL, UPDATE_USER_LOADING, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, EVENT_IMAGE_LOADING, EVENT_IMAGE_SUCCESS, EVENT_IMAGE_FAIL, GET_EVENT_IMAGE_LOADING, GET_EVENT_IMAGE_SUCCESS, GET_EVENT_IMAGE_FAIL, DELETE_EVENT_IMAGE_SUCCESS, DELETE_EVENT_IMAGE_FAIL, EVENT_IMAGE_DES_LOADING, EVENT_IMAGE_DES_SUCCESS, EVENT_IMAGE_DES_FAIL, GET_EVENT_IMAGE_DES_LOADING, GET_EVENT_IMAGE_DES_SUCCESS, GET_EVENT_IMAGE_DES_FAIL, DELETE_EVENT_IMAGE_DES_SUCCESS, DELETE_EVENT_IMAGE_DES_FAIL } from "./type"
import axios from 'axios'

export const resultAction=(resultData)=>async(dispatch)=>{
    dispatch({type:RESULT_PROCESS})
    try{
        const res=await axios.post('/result',resultData)
        dispatch({type:RESULT_SUCCESS,payload:res.data})

    }catch(error){
        dispatch({type:RESULT_FAIL,payload:error.message})
    }
}


export const resultListAction=()=>async(dispatch)=>{
    dispatch({type:RESULT_LIST_PROCESS})
    try{
        const res=await axios.get('/result')
        dispatch({type:RESULT_LIST_SUCCESS,payload:res.data})

    }catch(error){
        dispatch({type:RESULT_LIST_FAIL,payload:error.message})
    }
}

export const registerAction=({name,email,stuId,password})=>async(dispatch)=>{
    dispatch({type:REGISTER_PROCESS})
    try{
        const res=await axios.post('/register',{name,email,stuId,password})
        dispatch({type:REGISTER_SUCCESS,payload:res.data})
        localStorage.setItem("user", JSON.stringify(res.data));
        

    }catch(error){
        dispatch({type:REGISTER_FAIL,payload:error.message})
    }
}

export const loginAction=({email,password})=>async(dispatch)=>{
    dispatch({type:LOGIN_PROCESS})
    try{
        const res=await axios.post('/login',{email,password})
            dispatch({type:LOGIN_SUCCESS,payload:res.data})
       
       localStorage.setItem("user", JSON.stringify(res.data));

    }catch(error){
        dispatch({type:LOGIN_FAIL,payload:error.message})
    }
}

export const adminLoginAction=({email,password})=>async(dispatch)=>{
    dispatch({type:ADMIN_LOGIN_PROCESS})
    try{
        const res=await axios.post('/login',{email,password})
        dispatch({type:ADMIN_LOGIN_SUCCESS,payload:res.data})
     
       localStorage.setItem("user", JSON.stringify(res.data));

    }catch(error){
        dispatch({type:ADMIN_LOGIN_FAIL,payload:error.message})
    }
}

export const noticeAction=(noticeData)=>async(dispatch)=>{
    dispatch({type:NOTICE_PROCESS})
    try{
        const res=await axios.post('/notice',noticeData)
        dispatch({type:NOTICE_SUCCESS,payload:res.data})
        

    }catch(error){
        dispatch({type:NOTICE_FAIL,payload:error.message})
    }
}

export const noticeListAction=()=>async(dispatch)=>{
    dispatch({type:NOTICE_LIST_PROCESS})
    try{
        const res=await axios.get('/notice')
        dispatch({type:NOTICE_LIST_SUCCESS,payload:(res.data).reverse()})
        

    }catch(error){
        dispatch({type:NOTICE_LIST_FAIL,payload:error.message})
    }
}

export const deleteNotice = (pd) => async (dispatch) => {
    dispatch({type: DELETE_NOTICE_PROCESS });
    try {
      await axios.delete(`/notice/${pd._id}`);  
      dispatch({
        type: DELETE_NOTICE,
        payload:pd._id,
      });
    }catch(error){
        dispatch({type:NOTICE_LIST_FAIL,payload:error.message})
    }
}


export const updateNotice = (updateDate,pd) => async (dispatch) => {
    dispatch({type:UPDATE_NOTICE_PROCESS });
    try {
    const res=await axios.get('/notice')
         await axios.put(`/notice/${pd._id}`,{
         title:updateDate.utitle,
         notice:updateDate.unotice,
         author:updateDate.uauthor,
         atPublish:updateDate.uatPublish

        });  
   
      dispatch({
        type: UPDATE_NOTICE,
        payload:res.data,
      });
    }catch(error){
        dispatch({type:NOTICE_LIST_FAIL,payload:error.message})
    }
}


export const logoutAction = () => async (dispatch) => {
    dispatch({type:LOGOUT });
    
}

export const contuctAction=(email,subject,message)=>async(dispatch)=>{
    dispatch({type:CONTUCT_LOADING})
    try{
        const res=await axios.post('/contuct',{email,subject,message})
        dispatch({type:CONTUCT_SUCCESS,payload:res.data})

    }catch(error){
        dispatch({type:CONTUCT_FAIL,payload:error.message})

    }

}

export const contuctListAction=()=>async(dispatch)=>{
    dispatch({type:CONTUCT_LIST_LOADING})
    try{
        const res=await axios.get('/contuct')
        dispatch({type:CONTUCT_LIST_SUCCESS,payload:res.data})

    }catch(error){
        dispatch({type:CONTUCT_LIST_FAIL,payload:error.message})

    }

}

export const deleteContuct = (pd) => async (dispatch) => {
    await axios.delete(`/contuct/${pd._id}`); 
    try { 
      dispatch({
        type: DETELE_CONTUCT_SUCCESS,
        payload:pd._id,
      });
    }catch(error){
        dispatch({type:DETELE_CONTUCT_FAIL,payload:error.message})
    }
}


export const paymentAction=(paymentData)=>async(dispatch)=>{
    dispatch({type:PAYMENT_LOADING})
    try{
        const res=await axios.post('/payment',paymentData)
        dispatch({type:PAYMENT_SUCCESS,payload:res.data})

    }catch(error){
        dispatch({type:PAYMENT_FAIL,payload:error.message})

    }

}

export const paymentListAction=()=>async(dispatch)=>{
    dispatch({type:PAYMENT_LIST_LOADING})
    try{
        const res=await axios.get('/payment')
        dispatch({type:PAYMENT_LIST_SUCCESS,payload:res.data})

    }catch(error){
        dispatch({type:PAYMENT_LIST_FAIL,payload:error.message})

    }

}

export const deletePayment = (pd) => async (dispatch) => {
    await axios.delete(`/payment/${pd._id}`); 
    try { 
      dispatch({
        type: PAYMENT_DELETE_SUCCESS,
        payload:pd._id,
      });
    }catch(error){
        dispatch({type:PAYMENT_DELETE_FAIL,payload:error.message})
    }
}


export const videoAction=(id)=>async(dispatch)=>{
    dispatch({type:YOUTUBE_VIDEO_LOADING})
    try{
        const res=await axios.post('/video',{id})
        dispatch({type:YOUTUBE_VIDEO_SUCCESS,payload:res.data})

    }catch(error){
        dispatch({type:YOUTUBE_VIDEO_FAIL,payload:error.message})

    }

}

export const videotListAction=()=>async(dispatch)=>{
    dispatch({type:YOUTUBELIST_VIDEO_LOADING})
    try{
        const res=await axios.get('/video')
        dispatch({type:YOUTUBELIST_VIDEO_SUCCESS,payload:(res.data).reverse()})

    }catch(error){
        dispatch({type:YOUTUBELIST_VIDEO_FAIL,payload:error.message})

    }

}

export const deleteVideoAction = (pd) => async (dispatch) => {
    dispatch({type:DELETE_VIDEO_LOADING})
    await axios.delete(`/video/${pd._id}`); 
    try { 
      dispatch({
        type: DELETE_VIDEO_SUCCESS,
        payload:pd._id,
      });
    }catch(error){
        dispatch({type:DELETE_VIDEO_FAIL,payload:error.message})
    }
}


export const singleFileUploadAction =(data,options) =>async(dispatch)=>{
    dispatch({type:IMAGE_LOADING})
    try {
      const res=  await axios.post('/fileupload/singleFile', data,options);
      dispatch({type:IMAGE_SUCCESS,payload:res.data})
    } catch (error) {
       dispatch({type:IMAGE_FAIL,payload:error.message})
    }
}
export const getSingleFilesAction =() =>async (dispatch)=>{
    dispatch({type:GET_IMAGE_LOADING})
    try {
            const res = await axios.get('/fileupload/getSingleFiles');
            dispatch({type:GET_IMAGE_SUCCESS,payload:(res.data).reverse()})
    } catch (error) {
        dispatch({type:GET_IMAGE_FAIL,payload:error.message})
    }
}

export const deleteFileAction = (file) => async (dispatch) => {
    await axios.delete(`/fileUpload/${file._id}`); 
    try { 
      dispatch({
        type: DELETE_IMAGE_SUCCESS,
        payload:file._id,
      });
    }catch(error){
        dispatch({type:DELETE_IMAGE_FAIL ,payload:error.message})
    }
}


export const fileDesAction =(des) =>async(dispatch)=>{
    dispatch({type:IMAGE_DES_LOADING})
    try {
      const res=  await axios.post('/fileDes',{des});
      console.log(res.data)
      dispatch({type:IMAGE_DES_SUCCESS,payload:res.data})
    } catch (error) {
       dispatch({type:IMAGE_DES_FAIL,payload:error.message})
    }
}
export const getFileDesAction =() =>async (dispatch)=>{
    dispatch({type:GET_IMAGE_DES_LOADING})
    try {
            const res = await axios.get('/fileDes');
            dispatch({type:GET_IMAGE_DES_SUCCESS,payload:(res.data).reverse()})
    } catch (error) {
        dispatch({type:GET_IMAGE_DES_FAIL,payload:error.message})
    }
}

export const deleteFileDesAction = (file) => async (dispatch) => {
    await axios.delete(`/fileDes/${file._id}`); 
    try { 
      dispatch({
        type: DELETE_IMAGE_DES_SUCCESS,
        payload:file._id,
      });
    }catch(error){
        dispatch({type:DELETE_IMAGE_DES_FAIL ,payload:error.message})
    }
}

export const updateUser = (updateDate,Auth) => async (dispatch) => {
    dispatch({type:UPDATE_USER_LOADING });
    try {
        const res= await axios.put(`/register/${Auth._id}`,{
         name:updateDate.uname,
         email:updateDate.uemail,
         stuId:updateDate.ustuId,
         password:updateDate.upassword

        });  
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload:res.data,
      });
    }catch(error){
        dispatch({type:UPDATE_USER_FAIL,payload:error.message})
    }
}


export const eventFileAction =(data,options) =>async(dispatch)=>{
    dispatch({type:EVENT_IMAGE_LOADING})
    try {
      const res=  await axios.post('/eventFile', data,options);
      dispatch({type:EVENT_IMAGE_SUCCESS,payload:res.data})
    } catch (error) {
       dispatch({type:EVENT_IMAGE_FAIL,payload:error.message})
    }
}
export const getEventFileAction =() =>async (dispatch)=>{
    dispatch({type:GET_EVENT_IMAGE_LOADING})
    try {
            const res = await axios.get('/eventFile');
            dispatch({type:GET_EVENT_IMAGE_SUCCESS,payload:(res.data).reverse()})
    } catch (error) {
        dispatch({type:GET_EVENT_IMAGE_FAIL,payload:error.message})
    }
}

export const deleteEventFileAction = (file) => async (dispatch) => {
    await axios.delete(`/eventFile/${file._id}`); 
    try { 
      dispatch({
        type: DELETE_EVENT_IMAGE_SUCCESS,
        payload:file._id,
      });
    }catch(error){
        dispatch({type:DELETE_EVENT_IMAGE_FAIL ,payload:error.message})
    }
}


export const eventFileDesAction =(des) =>async(dispatch)=>{
    dispatch({type:EVENT_IMAGE_DES_LOADING})
    try {
      const res=  await axios.post('/eventDes',{des});
      dispatch({type:EVENT_IMAGE_DES_SUCCESS,payload:res.data})
    } catch (error) {
       dispatch({type:EVENT_IMAGE_DES_FAIL,payload:error.message})
    }
}
export const getEventFileDesAction =() =>async (dispatch)=>{
    dispatch({type:GET_EVENT_IMAGE_DES_LOADING})
    try {
            const res = await axios.get('/eventDes');
            dispatch({type:GET_EVENT_IMAGE_DES_SUCCESS,payload:(res.data).reverse()})
    } catch (error) {
        dispatch({type:GET_EVENT_IMAGE_DES_FAIL,payload:error.message})
    }
}

export const deleteEventFileDesAction = (file) => async (dispatch) => {
    await axios.delete(`/eventDes/${file._id}`); 
    try { 
      dispatch({
        type: DELETE_EVENT_IMAGE_DES_SUCCESS,
        payload:file._id,
      });
    }catch(error){
        dispatch({type:DELETE_EVENT_IMAGE_DES_FAIL ,payload:error.message})
    }
}