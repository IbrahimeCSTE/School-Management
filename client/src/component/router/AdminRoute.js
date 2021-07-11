import React from 'react';
import {useSelector} from 'react-redux'
import { Route,Redirect} from "react-router-dom";
const AdminRoute = ({ children, ...rest }) => {
    const isAdmin =useSelector(state=>state.admin.isAdmin);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;