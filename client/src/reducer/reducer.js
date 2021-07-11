import { GET_IMAGE_FAIL, GET_IMAGE_LOADING, GET_IMAGE_SUCCESS, IMAGE_FAIL, IMAGE_LOADING, IMAGE_SUCCESS,ADMIN_LOGIN_FAIL, ADMIN_LOGIN_PROCESS, ADMIN_LOGIN_SUCCESS, CONTUCT_FAIL, CONTUCT_LIST_FAIL, CONTUCT_LIST_LOADING, CONTUCT_LIST_SUCCESS, CONTUCT_LOADING, CONTUCT_SUCCESS, DELETE_NOTICE, DELETE_NOTICE_PROCESS, DELETE_VIDEO_FAIL, DELETE_VIDEO_LOADING, DELETE_VIDEO_SUCCESS, DETELE_CONTUCT_FAIL, DETELE_CONTUCT_SUCCESS, LOGIN_FAIL, LOGIN_PROCESS, LOGIN_SUCCESS, LOGOUT, NOTICE_FAIL, NOTICE_LIST_FAIL, NOTICE_LIST_PROCESS, NOTICE_LIST_SUCCESS, NOTICE_PROCESS, NOTICE_SUCCESS, PAYMENT_DELETE_FAIL, PAYMENT_DELETE_LOADING, PAYMENT_DELETE_SUCCESS, PAYMENT_FAIL, PAYMENT_LIST_FAIL, PAYMENT_LIST_LOADING, PAYMENT_LIST_SUCCESS, PAYMENT_LOADING, PAYMENT_SUCCESS, REGISTER_FAIL, REGISTER_PROCESS, REGISTER_SUCCESS, RESULT_FAIL, RESULT_LIST_FAIL, RESULT_LIST_PROCESS, RESULT_LIST_SUCCESS, RESULT_PROCESS, RESULT_SUCCESS, UPDATE_NOTICE,  YOUTUBELIST_VIDEO_FAIL, YOUTUBELIST_VIDEO_LOADING, YOUTUBELIST_VIDEO_SUCCESS, YOUTUBE_VIDEO_FAIL, YOUTUBE_VIDEO_LOADING, YOUTUBE_VIDEO_SUCCESS, DELETE_IMAGE_SUCCESS, DELETE_IMAGE_FAIL, IMAGE_DES_SUCCESS, IMAGE_DES_LOADING, IMAGE_DES_FAIL, GET_IMAGE_DES_SUCCESS, GET_IMAGE_DES_LOADING, GET_IMAGE_DES_FAIL, DELETE_IMAGE_DES_SUCCESS, DELETE_IMAGE_DES_FAIL, DELETE_IMAGE_DES_LOADING, UPDATE_USER_SUCCESS, UPDATE_USER_LOADING, UPDATE_USER_FAIL, EVENT_IMAGE_LOADING, GET_EVENT_IMAGE_LOADING, DELETE_EVENT_IMAGE_LOADING, EVENT_IMAGE_DES_LOADING, GET_EVENT_IMAGE_DES_LOADING, DELETE_EVENT_IMAGE_DES_LOADING, EVENT_IMAGE_SUCCESS, EVENT_IMAGE_DES_SUCCESS, GET_EVENT_IMAGE_DES_SUCCESS, GET_EVENT_IMAGE_SUCCESS, DELETE_EVENT_IMAGE_SUCCESS, DELETE_EVENT_IMAGE_DES_SUCCESS, DELETE_EVENT_IMAGE_DES_FAIL, GET_EVENT_IMAGE_DES_FAIL, EVENT_IMAGE_DES_FAIL, DELETE_EVENT_IMAGE_FAIL, GET_EVENT_IMAGE_FAIL, EVENT_IMAGE_FAIL } from "./type"
 
const initialState={
    result:[],
    error:[],
    resultList:[],
     loading:false,
     isResult:true
    
    
 }

 const initialState1={
     auth:[],
     loading:false,
     isAuth:false
    
    
 }

 const adminState={
     admin:[],
     isAdmin:false,
     loading:false
 }
 const noticeState={
    notice:[],
    noticeList:[],
    loading:false,
    isNotice:false
}

const contuctState={
    contuct:[],
    contuctList:[],
    error:[],
    send:false,

}

const paymentState={
    payment:[],
    paymentList:[],
    error:[],
    send:false,
    loading:false

}

const videoState={
    video:[],
    videoList:[],
    error:[],
    vl:false,
    get:false,
    loading:false

}
const fileState={
    image:[],
    imageList:[],
    des:[],
    desList:[],
    eventImage:[],
    eventImageList:[],
    eventDes:[],
    eventDesList:[],
    error:[],
    loading:false,
    get:false
}

export const resultReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case UPDATE_USER_LOADING:
        case DELETE_NOTICE_PROCESS:
        case NOTICE_LIST_PROCESS:
        case NOTICE_PROCESS:
        case ADMIN_LOGIN_PROCESS:
        case LOGIN_PROCESS:
        case REGISTER_PROCESS:
        case RESULT_LIST_PROCESS:
        case RESULT_PROCESS:
            return{
                loading:false

            }
            case RESULT_SUCCESS:
                return{
                    ...state,
                    loading:true,
                    result:payload,
                    isResult:true
    
                }
                case UPDATE_USER_FAIL:
                case NOTICE_LIST_FAIL:
                case NOTICE_FAIL:
                case ADMIN_LOGIN_FAIL:
                case LOGIN_FAIL:
                case REGISTER_FAIL:
             case RESULT_LIST_FAIL:
                case RESULT_FAIL:
                    return{
                        ...state,
                        loading:true,
                        error:payload
        
                    }
                  default: 
                  return state
    }

}

export const resultListReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case RESULT_LIST_SUCCESS:
                    return{
                        ...state,
                        loading:true,
                        resultList:payload
        
                    }
        default: 
         return state

    }
}

export const registerReducer=(state=initialState1,action)=>{
    const {type,payload}=action
    switch(type){
        case UPDATE_USER_SUCCESS:
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
                    return{
                        ...state,
                        isAuth:payload==='invalid'?false:true,
                        loading:true,
                        auth:payload,
                        authError:payload==='invalid'?true:false
        
                    }
                    case LOGOUT:
                        return{
                            ...state,
                            isAuth:false,
                            loading:false,
                            auth:null
                        }
        default: 
         return state

    }
}

export const adminLoginReducer=(state=adminState,action)=>{
    const {type,payload}=action
    switch(type){
        case ADMIN_LOGIN_SUCCESS:
                    return{
                        ...state,
                        isAdmin:true,
                        loading:true,
                        admin:payload
        
                    }
                    case LOGOUT:
                        return{
                            admin:[],
                            isAdmin:false,
                            loading:false
                        }
        default: 
         return state

    }
}


export const noticeReducer=(state=noticeState,action)=>{
    const {type,payload}=action
    switch(type){
        case NOTICE_SUCCESS:
                    return{
                        ...state,
                        loading:true,
                        notice:payload,
                        isNotice:true
        
                    }
                    case NOTICE_LIST_SUCCESS:
                        return{
                            ...state,
                            loading:true,
                            noticeList:payload
            
                        }  
                        
                        case DELETE_NOTICE:
                            return {
                              ...state,
                              noticeList: state.noticeList.filter((pd) => pd._id !== payload),
                              loading: true,
                            }; 
                            
                            case UPDATE_NOTICE:
                            return {
                              ...state,
                              noticeList:payload,
                              loading: true,
                            };  
        default: 
         return state

    }
}


export const contuctReducer=(state=contuctState,action)=>{
    const {type,payload}=action
    switch(type){
        case CONTUCT_LIST_LOADING:
        case CONTUCT_LOADING:
        return{send:false}
        case CONTUCT_SUCCESS:
        return{
            ...state,
            contuct:payload,
            send:true
        }
        case CONTUCT_LIST_SUCCESS:
        return{
            ...state,
            contuctList:payload,
            send:false
        }
        case  DETELE_CONTUCT_SUCCESS:
            return {
                  ...state,
                   contuctList:state.contuctList.filter((pd) => pd._id !== payload),
                   send:false
                }; 
                        
        case  DETELE_CONTUCT_FAIL:                
        case CONTUCT_LIST_FAIL:
        case CONTUCT_FAIL:
        return{
            error:payload,
            send:false
        }
        
        default:
            return state
    }

}

//payment
export const paymentReducer=(state=paymentState,action)=>{
    const {type,payload}=action
    switch(type){
        case PAYMENT_LOADING:
        case PAYMENT_LIST_LOADING:
        case PAYMENT_DELETE_LOADING:    
        return{send:false,loading:true}
        case PAYMENT_SUCCESS:
        return{
            ...state,
            payment:payload,
            send:true,
            loading:false,
            pay:payload==='server error'?false:true,
        }
        case PAYMENT_LIST_SUCCESS:
        return{
            ...state,
            paymentList:payload,
            send:true,
            loading:false
        }
        case  PAYMENT_DELETE_SUCCESS:
            return {
                  ...state,
                   paymentList:state.paymentList.filter((pd) => pd._id !== payload),
                   send:true,
                   loading:false
                }; 
                        
        case  PAYMENT_FAIL:                
        case PAYMENT_LIST_FAIL:
        case PAYMENT_DELETE_FAIL:
        return{
            error:payload,
            send:false
        }
        
        default:
            return state
    }

}

//video

export const videoReducer=(state=videoState,action)=>{
    const {type,payload}=action
    switch(type){
        case YOUTUBELIST_VIDEO_LOADING:
        case YOUTUBE_VIDEO_LOADING:
        case DELETE_VIDEO_LOADING:    
        return{get:false,loading:true}
        case YOUTUBE_VIDEO_SUCCESS:
        return{
            ...state,
            video:payload,
            get:true,
            loading:false,
            pay:payload==='server error'?false:true,
        }
        case YOUTUBELIST_VIDEO_SUCCESS:
        return{
            ...state,
            videoList:payload,
            vl:true,
            loading:false
        }
        case  DELETE_VIDEO_SUCCESS:
            return {
                  ...state,
                  videoList:state.videotList.filter((pd) => pd._id !== payload),
                   loading:false
                }; 
                        
        case  YOUTUBE_VIDEO_FAIL:                
        case YOUTUBELIST_VIDEO_FAIL:
        case DELETE_VIDEO_FAIL:
        return{
            error:payload,
            send:false
        }
        
        default:
            return state
    }

}

export const imageReducer=(state=fileState,action)=>{
    const {type,payload}=action
    switch(type){
        case DELETE_EVENT_IMAGE_DES_LOADING:
        case GET_EVENT_IMAGE_DES_LOADING:
        case EVENT_IMAGE_DES_LOADING:
        case DELETE_EVENT_IMAGE_LOADING:
        case GET_EVENT_IMAGE_LOADING:
        case EVENT_IMAGE_LOADING:
        case DELETE_IMAGE_DES_LOADING:
        case GET_IMAGE_DES_LOADING:
        case IMAGE_DES_LOADING:
        case IMAGE_LOADING:
        case GET_IMAGE_LOADING:
            return{
                loading:false
            }    
        case IMAGE_SUCCESS:
                    return{
                        ...state,
                        loading:true,
                        image:payload,
                        get:true
        
                    }
        case EVENT_IMAGE_SUCCESS:
                return{
                ...state,
                loading:true,
                eventImage:payload,
                get:true
            
                    }            
        case IMAGE_DES_SUCCESS:
            return{
                ...state,
                loading:true,
                des:payload,
                get:true
            } 
            case EVENT_IMAGE_DES_SUCCESS:
            return{
                ...state,
                loading:true,
                eventDes:payload,
                get:true
            }   
            case GET_IMAGE_DES_SUCCESS:
                return{
                    ...state,
                    loading:true,
                    desList:payload,
                    get:true
                }  
                case GET_EVENT_IMAGE_DES_SUCCESS:
                    return{
                        ...state,
                        loading:true,
                        eventDesList:payload,
                        get:true
                    }             
        case GET_IMAGE_SUCCESS:
            return{
                ...state,
                loading:true,
                imageList:payload,
                get:false
            }
            case GET_EVENT_IMAGE_SUCCESS:
                return{
                    ...state,
                    loading:true,
                    eventImageList:payload,
                    get:false
                }
            case  DELETE_IMAGE_SUCCESS:
                return {
                      ...state,
                      imageList:state.imageList.filter((pd) => pd._id !== payload),
                       loading:false
                };
                case  DELETE_EVENT_IMAGE_SUCCESS:
                    return {
                          ...state,
                          eventImageList:state.eventImageList.filter((pd) => pd._id !== payload),
                           loading:false
                    };
                case DELETE_IMAGE_DES_SUCCESS:
                    return {
                          ...state,
                          imageList:state.imageList.filter((pd) => pd._id !== payload),
                           loading:false
                    };  
                    case DELETE_EVENT_IMAGE_DES_SUCCESS:
                    return {
                          ...state,
                         eventDesList:state.eventDesList.filter((pd) => pd._id !== payload),
                           loading:false
                    };   
       case DELETE_EVENT_IMAGE_DES_FAIL:
        case GET_EVENT_IMAGE_DES_FAIL:
        case EVENT_IMAGE_DES_FAIL:
        case DELETE_EVENT_IMAGE_FAIL:
        case GET_EVENT_IMAGE_FAIL:
        case EVENT_IMAGE_FAIL:            
        case DELETE_IMAGE_DES_FAIL:            
        case GET_IMAGE_DES_FAIL:     
        case IMAGE_DES_FAIL:      
        case DELETE_IMAGE_FAIL:      
        case IMAGE_FAIL:
        case GET_IMAGE_FAIL: 
           return{
               error:payload,
               loading:true
           }                  
        default: 
         return state

    }
}