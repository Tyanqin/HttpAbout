import React,{Component,Fragment} from 'react'
import { Link } from 'react-router-dom'
import HomePng from '../img/home.jpg'


export default class HomeSectionBox extends Component{
  render () {
    return(
       <Fragment>
         <ul>
           <li><Link to="#"><img src={HomePng} alt="123"/></Link></li>
           <li><Link to="#">小米手机</Link></li>
           <li><Link to="#">Redmi 红米</Link></li>
           <li><Link to="#">电视</Link></li>
           <li><Link to="#">笔记本</Link></li>
           <li><Link to="#">家电</Link></li>
           <li><Link to="#">路由器</Link></li>
           <li><Link to="#">智能硬件</Link></li>
           <li><Link to="#">服务</Link></li>
           <li><Link to="#">社区</Link></li>
         </ul>
         <div className="home-section-search">
           <input type="search" placeholder="小米"
                  ref={this.InputRef}
                  onFocus={this.handelInputOnFocus}
                  onBlur={this.handelInputOnBlur}
           />
           <button className="home-section-search-button"
                   ref={this.ButtonRef}>
             <span className="iconfont">&#xe69d;</span>
           </button>
         </div>
       </Fragment>
    )
  }
}