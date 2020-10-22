import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './css/login-container.css'
import Logo from './img/logo.jpg'

export default connect((state) => ({ code: state.code }), {})(
  class LoginContainer extends Component {

    LoginRef = React.createRef()
    LoginContentTab = React.createRef()
    componentDidMount () {
       this.LoginRef.current.childNodes[0].style.color = "#F56600"
    }

    loginSwitch =(event)=>{
      let eventChilds =  event.currentTarget.childNodes
      let loginContentTabChildNodes = this.LoginContentTab.current.childNodes
      for(let i = 0; i < eventChilds.length;i ++){
        eventChilds[i].style.color = ''
        loginContentTabChildNodes[i].style.zIndex = 0
      }

      if(event.target.className === 'li'){
         event.target.style.color = "#F56600"
         loginContentTabChildNodes[event.target.id].style.zIndex = 1
      }


    }



    render () {
      return (
        <Fragment>
          <div id="loginWrap">
            <div className="login-header">
              <div>
                <Link to="/">
                  <img src={Logo} alt=""/>
                  <div>
                    <p>小米商城</p>
                    <p>让每个人都能享受到科技的乐趣</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="login-content">
              <div className="login-content-tab" ref = {this.LoginContentTab}>

                <div className="login-switch-bar">
                  <ul ref = {this.LoginRef} onClick={this.loginSwitch}>
                    <li className = "li" id = "0">账号登录</li>
                    <span>|</span>
                    <li className = "li" id = "1">扫码登录</li>
                  </ul>
                </div>
                <div className="login-switch-bar-content">
                       扫码登录
                </div>
                <div  className="login-switch-bar-content">
                  <input type="text" placeholder="邮箱/手机号码/小米ID"/>
                  <input type="text" placeholder="请输入密码"/>
                  <input type="button" value="登录"/>
                  <div className="login-way">
                    <p><Link to="#"/>手机短信登录注册</p>
                    <span><Link to="#"/>立即注册</span>
                    <span>　|　</span>
                    <span><Link to="#"/>忘记密码?</span>
                  </div>
                  <div className="login-icon">
                    <ul>
                      <li><Link to="#"><span className="iconfont">&#xe60b;</span></Link></li>
                      <li><Link to="#"><span className="iconfont">&#xe6a4;</span></Link></li>
                      <li><Link to="#"><span className="iconfont">&#xe607;</span></Link></li>
                      <li><Link to="#"><span className="iconfont">&#xe73b;</span></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-footer">
              <div>
                <ul>
                  <li><Link to="#">简体</Link></li>
                  <li>|</li>
                  <li><Link to="#">繁体</Link></li>
                  <li> |</li>
                  <li><Link to="#">English</Link></li>
                  <li>|</li>
                  <li><Link to="#">常见问题</Link></li>
                  <li>|</li>
                  <li><Link to="#">隐私政策</Link></li>
                </ul>
                <div>小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</div>
              </div>
            </div>
          </div>
        </Fragment>
      )
    }

  }
)