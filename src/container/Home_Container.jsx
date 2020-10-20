import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
//import {add,sub,eventAdd} from '../redux/actions/Counter_Action'


 class Home_Container extends Component{
    render () {
        return(
             <Fragment>
                   Hello, this is HOME page.
             </Fragment>
        )
    }
}

export default connect(
  (state)=>({count:state}), {}
)(Home_Container)