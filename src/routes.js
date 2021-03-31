import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {useCookies,Cookies, CookiesProvider} from 'react-cookie';
import {Home, Login, Landing} from './pages'
import './global.css'

function Routes(){
    const [cookies, setCookie] = useCookies(['userToken']);
    let logedIn = false;
    let userToken = cookies.userToken;
    if(userToken != null){
        logedIn = true;
    }

    return(
        <CookiesProvider>
        <Router>
            <Switch>
                <Route path="/menota">
                    {logedIn ? <Home/>:<Redirect to="/login" />}
                </Route>
                <Route path="/login">
                    {logedIn ? <Redirect to="/menota" /> : <Login/>}
                </Route>
                <Route path="/">
                    {logedIn ? <Redirect to="/menota" /> : <Landing/>}
                </Route>
            </Switch>
        </Router>
        </CookiesProvider>
    )
};

export default Routes;