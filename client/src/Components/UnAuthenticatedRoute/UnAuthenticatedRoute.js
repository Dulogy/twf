import React from 'react';
import getCurrentUser from '../services/auth.service'
import {Route, Redirect } from "react-router-dom";

const UnAuthenticatedRoute = ({component : Component, render, ...props}) => {

   return ( 
      <Route 
      {...props}
      render = { prop => getCurrentUser() ? <Redirect to='/' /> : ( Component ? <Component {...prop} /> : render(prop) ) }
      />
   );
}

export default UnAuthenticatedRoute;