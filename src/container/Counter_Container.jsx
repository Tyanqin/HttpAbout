import React,{Component,Fragment} from 'react'
import {add,sub,eventAdd} from '../redux/actions/Counter_Action'
import {connect} from 'react-redux'
import axios from 'axios'
import {ADDRESS} from '../conf/conf'


class Counter extends Component{

  resultRef = React.createRef()
  selectRef = React.createRef()

  AddHandelOnClick = () =>{
      let value =  this.selectRef.current.value
      this.props.add(value)
     axios.get(`${ADDRESS}/home/test`)
       .then((message)=>{
      console.log(message.data)
    }).catch(()=>{
      console.log("error .")
    })

  }
  subHandelOnClick =() =>{
    let value =  this.selectRef.current.value
    this.props.sub(value)
  }

  evenHandelOnClick =()=>{
    let value =  this.selectRef.current.value
    if(value % 2===0){
      this.props.eventAdd(value)
    }
  }
  asyncHandelOnClick =()=>{}

     render () {
      let result =  this.props.count
       return(
             <Fragment>
               <div ref={this.resultRef}>当前结果为{result}</div>
               <select ref={this.selectRef} name="number" id="number">
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
               </select>
               <button onClick={this.AddHandelOnClick}>+</button>
               <button onClick={this.subHandelOnClick}>-</button>
               <button onClick={this.evenHandelOnClick}>当为偶数时</button>
               <button onClick={this.asyncHandelOnClick}>延迟</button>
             </Fragment>
       )
     }

}



export default connect((state)=>({
  count: state
}),{
  add:add,
  sub:sub,
  eventAdd:eventAdd
})(Counter)





