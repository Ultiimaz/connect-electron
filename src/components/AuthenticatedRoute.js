import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route, useHistory} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import * as PropTypes from "prop-types";



export const AuthenticatedRoute = props => {
  let history = useHistory();
  let isLoggedIn = true;

  if(isLoggedIn){
    let Component = props.component;
    return <Route exact path={props.path} render={() => (<DefaultLayout><Component/></DefaultLayout>)} />
  }
  else{
    // history.push("/404");
    return <p>404</p>
  }
}
AuthenticatedRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.element
}
