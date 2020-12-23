import React from 'react';
import {Provider} from 'react-redux';
import {store, history} from "./redux/store";
import {BrowserRouter, BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';
// import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import {AuthenticatedRoute} from "./components/AuthenticatedRoute";
import Login from "./views/Login";
import Home from "./views/Home";
import Chat from "./views/Chat";

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter > { /* place ConnectedRouter under Provider */ }
          <Switch>
            <AuthenticatedRoute path={"/x"} component={Home} />
            <AuthenticatedRoute path={"/"} component={Chat} />
            <Route path={"/login"} component={Login}/>
            <Route path={"/404"} render={() => (<div>404</div>)} />
          </Switch>
      </HashRouter>
    </Provider>
  );
}
