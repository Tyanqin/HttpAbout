import React,{Fragment} from 'react'
import { Redirect, Route, Switch,NavLink } from 'react-router-dom'
import LoginContainer from '../container/login/Login_Container'
import HomeContainer from '../container/home/Home_Container'


export  const  CombineRoutes = () => (
<Fragment>
  <NavLink to="/" />
  <Switch>
    <Route  path = "/login" component={LoginContainer}/>
    <Route  path = "/" component={HomeContainer}/>
  </Switch>

</Fragment>
)
