import './App.css';
import { useDispatch } from 'react-redux';
import Dashboard from './component/admin/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Result from './component/header/Result';
import { useEffect } from 'react';
import { contuctListAction, getEventFileAction, getEventFileDesAction, getFileDesAction, getSingleFilesAction, noticeListAction, paymentListAction, resultListAction, videotListAction } from './reducer/action';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Notice from './component/notice/Notice';
import PrivateRoute from './component/router/PrivateRoute';
import AdminRoute from './component/router/AdminRoute';
import Contuct from './component/contuct/Contuct';
import Payment from './component/payment/Payment';
import HomeScreen from './component/header/homeScreen/HomeScreen';
import VideoList from './component/youtube/videoList';
import Event from './component/event/Event';
import Profile from './component/profile/Profile';
function App() {
  const dispatch=useDispatch()
 useEffect(()=>{
 dispatch(resultListAction())
 dispatch(noticeListAction())
 dispatch(contuctListAction())
 dispatch(paymentListAction())
 dispatch(videotListAction())
 dispatch(getSingleFilesAction())
 dispatch(getFileDesAction())
 dispatch(getEventFileAction())
 dispatch(getEventFileDesAction())
 },[dispatch])
  return (
   
    <Router>
      <>
        <section>
          <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
           <Route exact path="/register" component={Register}></Route>
           <Route exact path="/login" component={Login}></Route>
           <Route exact path="/notice" component={Notice}></Route>
           <Route exact path="/videoList" component={VideoList}></Route>
           <Route exact path="/event" component={Event}></Route>
           <Route exact path="/profile" component={Profile}></Route>
           <PrivateRoute exact path="/result">
             <Result></Result>
           </PrivateRoute>
           <PrivateRoute exact path="/contuct">
            <Contuct></Contuct>
           </PrivateRoute>
           <PrivateRoute exact path="/payment">
            <Payment></Payment>
           </PrivateRoute>
           <AdminRoute exact path="/dashboard">
             <Dashboard></Dashboard>
           </AdminRoute>
          </Switch>
        </section>
      </>
    </Router>
  );
}

export default App;
