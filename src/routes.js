import React,{useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {useCookies, CookiesProvider} from 'react-cookie';
import {Home, Login, Landing, Signup} from './pages'
import axios from 'axios';
import './global.css'

function Routes(){
    const [cookies] = useCookies(['userToken']);
    const [loged,setLoged] = useState();
    let userToken = cookies.userToken;

    axios.defaults.headers.common['Authorization'] = userToken;

    console.log(userToken);

    axios.get('http://localhost:8000/api/auth').then((res)=>{
        if(res.status === 200){
            setLoged(true);
            console.log("true")
        }
        else{
            setLoged(false);
            console.log("false")
        }
    })

    return(
        <CookiesProvider>
        <Router>
            <Switch>
                <Route path="/menota">
                    {loged ? <Home/>:<Redirect to="/login" />}
                </Route>
                <Route path="/login">
                    {loged ? <Redirect to="/menota" /> : <Login/>}
                </Route>
                <Route path="/signup">
                    {loged ? <Redirect to="/menota" /> : <Signup/>}
                </Route>
                <Route path="/">
                    {loged ? <Redirect to="/menota" /> : <Landing/>}
                </Route>
            </Switch>
        </Router>
        </CookiesProvider>
    )
};

export default Routes;