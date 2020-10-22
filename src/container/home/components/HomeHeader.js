import React,{Component,Fragment} from 'react'
import { Link } from 'react-router-dom'



export  default class HomeHeader extends Component{
  render () {
    return(
      <Fragment>
        <div className="home-header">
          <nav className="home-nav">
            <div className="home-nav-left">
              <ul>
                <li><Link to="#">小米商城</Link></li>
                <li>|</li>
                <li><Link to="#">MIUI</Link></li>
                <li>|</li>
                <li><Link to="#">IoT</Link></li>
                <li>|</li>
                <li><Link to="#">云服务</Link></li>
                <li>|</li>
                <li><Link to="#">金融</Link></li>
                <li>|</li>
                <li><Link to="#">有品</Link></li>
                <li>|</li>
                <li><Link to="#">小爱开放平台</Link></li>
                <li>|</li>
                <li><Link to="#">企业团购</Link></li>
                <li>|</li>
                <li><Link to="#">资质证照</Link></li>
                <li>|</li>
                <li><Link to="#">协议规则</Link></li>
                <li>|</li>
                <li><Link to="#">下载app</Link></li>
                <li>|</li>
                <li><Link to="#">智能生活</Link></li>
                <li>|</li>
                <li><Link to="#">Select Location</Link></li>
              </ul>
            </div>
            <div className="home-nav-right">
              <ul>
                <li><Link to="/login">登录</Link></li>
                <li>|</li>
                <li><Link to="#">注册</Link></li>
                <li>|</li>
                <li><Link to="#">消息通知</Link></li>
                <li>
                  <Link to="#" ref={this.ARef}><span className="iconfont">&#xe602;</span> 购物车 (0)</Link>
                </li>
              </ul>
              {/*<div className="shopping-box" ref={this.ShoppingBoxRef}>*/}
              {/*  <p>????</p>*/}
              {/*</div>*/}
            </div>
          </nav>
        </div>
      </Fragment>
    )
  }
}