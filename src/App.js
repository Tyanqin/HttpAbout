import React,{Component,Fragment} from 'react'
import  Counter from './container/Counter_Container'
import Home from './container/Home_Container'
import {Route} from 'react-router-dom'
import './App.less';
export default class App extends Component{
  render () {
    return (
           <Fragment>
             <Route  path="/count" component={Counter}/>
             <Route  path="/" component={Home}/>
           </Fragment>
    )
  }

}



