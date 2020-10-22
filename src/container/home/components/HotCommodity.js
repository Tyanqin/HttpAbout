import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import RedmiK30Pro from '../img/hotcommodity/RedmiK30Pro.jpg'
import Redmi10x from '../img/hotcommodity/Redmi10x.jpg'
import Braceletmi from '../img/hotcommodity/braceletmi.jpg'

export default class HotCommodity extends Component{

  render(){
     return(
        <Fragment>
               <div className="HotCommodity-wrap">
                 <div>
                   <Link to="#"><span className="iconfont">&#xe60d;</span><p>小米秒杀</p></Link>
                   <Link to="#"><span className="iconfont">&#xe646;</span><p>企业团购</p></Link>
                   <Link to="#"><span className="iconfont">&#xe604;</span><p>F码通道</p></Link>
                   <Link to="#"><span className="iconfont">&#xe733;</span><p>米粉卡</p></Link>
                   <Link to="#"><span className="iconfont">&#xe664;</span><p>以旧换新</p></Link>
                   <Link to="#"><span className="iconfont">&#xe618;</span><p>话费充值</p></Link>
                 </div>
                 <div><Link to="#"><img src={RedmiK30Pro} alt=""/></Link></div>
                 <div><Link to="#"><img src={Redmi10x} alt=""/></Link></div>
                 <div><Link to="#"><img src={Braceletmi} alt=""/></Link></div>
               </div>
        </Fragment>
     )
  }
}