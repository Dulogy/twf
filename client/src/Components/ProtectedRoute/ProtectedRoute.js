import React from 'react';
import getCurrentUser from '../services/auth.service'
import {Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component : Component, render, ...props}) => {

   return ( 
      <Route 
      {...props}
      render = { prop => getCurrentUser() ? ( Component ? <Component {...prop} /> : render(prop) ) : <Redirect to='/login' />}
      />
   );
}

export default ProtectedRoute;