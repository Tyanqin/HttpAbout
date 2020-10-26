import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './css/login-container.css'
import Logo from './img/logo.jpg'
import QQ from './img/qq.jpg'
import WEIBO from './img/weibo.jpg'
import WEIXIN from './img/weixin.jpg'
import ZHIFU from './img/zhifu.jpg'
import ERWEIMA from './img/erweima.jpg'
import {initFrom} from '../../api/login'
import {initFromToken} from '../../redux/actions/Counter_Action'


export default connect((state) => ({ login: state.login}), {
    initFromToken:initFromToken
})(
  class LoginContainer extends Component {
    LoginRef = React.createRef()
    LoginContentTab = React.createRef()
    PhoneLoginRrf = React.createRef();
    UserNameRef = React.createRef()

    //获取表单的值
    TokenRef = React.createRef()
    LoginNameRef = React.createRef()
    PasswordRef = React.createRef()


    componentDidMount () {
       this.LoginRef.current.childNodes[0].style.color = "#F56600"
       this.PhoneLoginRrf.current.style.zIndex = "1"
       this.UserNameRef.current.style.zIndex = "0"
       this.initFromAccess()
    }


    loginClickHandler =async () =>{
        let token =  this.TokenRef.current.value
        let name = this.LoginNameRef.current.value
        let password = this.PasswordRef.current.value
        

    }



    initFromAccess = async ()=>{
        let result = await initFrom()
        this.props.initFromToken(result.data)
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
    otherLogin=(event)=>{
       if(event.target.className === "otherLogin"){
          if(event.target.id ==="1"){
               window.location.href = "https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=100284651&redirect_uri=https://account.xiaomi.com/pass/sns/login/load&state=STATE_839475"
          }
         if(event.target.id ==="2"){
               window.location.href = "https://api.weibo.com/oauth2/authorize?response_type=code&client_id=2996826273&redirect_uri=https://sns.account.xiaomi.com/pass/sns/login/load&state=STATE_017852###"
         }
         if(event.target.id ==="3"){
               window.location.href = "https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3Dbe57a903de5976410eb12582a390ec4b"
         }
         if(event.target.id ==="4"){
              window.location.href = "https://open.weixin.qq.com/connect/qrconnect?appid=wxa21de3acc0d5e79b&redirect_uri=https%3A%2F%2Fsns.account.xiaomi.com%2Fpass%2Fsns%2Flogin%2Fload&response_type=code&scope=snsapi_login&state=STATE_209475#wechat_redirect"
         }
       }
    }
    phoneLogin=()=>{
      this.UserNameRef.current.style.zIndex = "1"
      this.PhoneLoginRrf.current.style.zIndex = "0"
    }
    userNameLogin=()=>{
         this.UserNameRef.current.style.zIndex = "0"
         this.PhoneLoginRrf.current.style.zIndex = "1"
    }

    render () {

      let token = this.props.login.token

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
                       <div className="login-switch-bar-content-ma">
                         <img src={ERWEIMA} alt=""/>
                       </div>
                       <div className="login-switch-bar-content-dec">
                         <p>使用 <span>小米商城APP</span> 扫一扫</p>
                         <p>小米手机可打开「设置」>「小米帐号」扫码登录</p>
                       </div>
                </div>

                <div  className="login-switch-bar-content" ref = {this.PhoneLoginRrf}>

                  <input ref = {this.LoginNameRef} type="username" placeholder="邮箱/手机号码/小米ID"/>
                  <input ref = {this.PasswordRef}type="password" placeholder="请输入密码"/>
                  <input onClick = {this.loginClickHandler} type="button" value="登录"/>
                    <input ref = {this.TokenRef} type="hidden" value={token}/>


                  <div className="login-way">
                    <p  onClick={this.phoneLogin}><Link to="#"/>手机短信登录注册</p>
                    <span><Link to="#"/>立即注册</span>
                    <span>　|　</span>
                    <span><Link to="#"/>忘记密码?</span>
                  </div>
                  <div className="login-icon">
                    <ul onClick={this.otherLogin}>
                      <li ><Link to="#"><img className="otherLogin" id = "1" src={QQ} alt=""/></Link></li>
                      <li ><Link to="#"><img className="otherLogin" id = "2" src={WEIBO} alt=""/></Link></li>
                      <li ><Link to="#"><img className="otherLogin" id = "3" src={ZHIFU} alt=""/></Link></li>
                      <li ><Link to="#"><img className="otherLogin" id = "4" src={WEIXIN} alt=""/></Link></li>
                    </ul>
                  </div>
                </div>
                <div  className="login-switch-bar-content" ref = {this.UserNameRef} >

                  <div><span>+86</span><input type="text" placeholder="请输入手机号码"/></div>
                 <div> <input type="text" placeholder="请输入验证码"/><span>获取验证码</span></div>
                  <div><input type="button" value="立即登录/注册"/></div>
                  <div className="login-way">
                    <p onClick={this.userNameLogin}><Link to="#"/>用户名密码登录</p>
                    <p><Link to="#"/>收不到验证码?</p>
                  </div>
                  <div className="login-icon">
                    <ul onClick={this.otherLogin}>
                      <li ><Link to="#"><img className="otherLogin" id = "1" src={QQ} alt=""/></Link></li>
                      <li ><Link to="#"><img className="otherLogin" id = "2" src={WEIBO} alt=""/></Link></li>
                      <li ><Link to="#"><img className="otherLogin" id = "3" src={ZHIFU} alt=""/></Link></li>
                      <li ><Link to="#"><img className="otherLogin" id = "4" src={WEIXIN} alt=""/></Link></li>
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