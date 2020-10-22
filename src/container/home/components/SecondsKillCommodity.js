import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getStyle, move, jitter, countdownDate,acceleratedMove } from './Move'
import img_1 from '../img/seconds/1.jpg'
import img_2 from '../img/seconds/2.jpg'
import img_3 from '../img/seconds/3.jpg'
import img_4 from '../img/seconds/4.jpg'
import img_5 from '../img/seconds/5.jpg'
import img_6 from '../img/seconds/6.jpg'
import img_7 from '../img/seconds/7.jpg'
import img_8 from '../img/seconds/8.jpg'
import img_9 from '../img/seconds/9.jpg'
import img_10 from '../img/seconds/10.jpg'
import img_11 from '../img/seconds/11.jpg'
import img_12 from '../img/seconds/12.jpg'

export default class SecondsKillCommodity extends Component {

  CommodityRef = React.createRef()
  SecondSkillCommodityRef = React.createRef()
  autoTimer
  countdownDateTimer
  index = 0
  state = { showArray: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], strTime: '' }

  componentDidMount () {
    this.autoPlay()
    this.countdownDateTimer =  setInterval(()=>{
     this.countdownDate()
    },1000)
  }
  componentWillUnmount () {
    clearInterval(this.countdownDateTimer)
  }
  rightClickPlay = () => {
    this.index -= 4
    let ul = this.CommodityRef.current
    let nodes = ul.childNodes
    if (this.index <= 0) {
      // ul.style.left = 0
      move(ul, 'left', 0, 5, null)
      this.index = nodes.length
      return
    }
    move(ul, 'left', this.index * -250, 5, null)
  }
  leftClickPlay = () => {
    this.index += 4
    this.index = Math.abs(this.index)
    let ul = this.CommodityRef.current
    let nodes = ul.childNodes
    if (this.index >= nodes.length) {
      // ul.style.left = 0
      move(ul, 'left', 0, 5, null)
      this.index = 0
      return
    }
    move(ul, 'left', -250 * this.index, 5, null)
  }
  rightOnMouseOver = () => {clearInterval(this.autoTimer)}
  leftOnMouseOver = () => {clearInterval(this.autoTimer)}
  rightOnMouseOut = () => {this.autoPlay()}
  leftOnMouseOut = () => {this.autoPlay()}
  autoPlay = () => {
    clearInterval(this.autoTimer)
    let index = 0
    let ul = this.CommodityRef.current
    let nodes = ul.childNodes
    let liWidth = getStyle(ul.childNodes[0], 'width') + 10
    this.autoTimer = setInterval(() => {
      index += 4
      if (index === nodes.length) {
        index = 0
        // ul.style.left = 0
        move(ul, 'left', 0, 5, null)
        return
      }
      move(ul, 'left', liWidth * -1 * index, 5, null)
    }, 5000)
  }
  handleOnMouseOver = (even) => {
    clearInterval(this.autoTimer)
    // let element = even.target
    // if (element.className === '1') {
    //   let initTarget = getStyle(element, 'left')
    //   jitter(element, 'top', initTarget, 40)
    // }

  }
  handleOnMouseOut = () => {
     this.autoPlay()
  }
  countdownDate = () => {
    let lis = this.CommodityRef.current.childNodes
    let newStrTime = countdownDate(2020, 9, 25, 16,0 , 0)
    // console.log(
    //   newStrTime.charAt(0) + '' + newStrTime.charAt(1)+newStrTime.charAt(2) + '' + newStrTime.charAt(3)+newStrTime.charAt(4) + '' + newStrTime.charAt(5) + '' === '00000',
    //   newStrTime.charAt(0) + '' + newStrTime.charAt(1)+newStrTime.charAt(2) + '' + newStrTime.charAt(3)+newStrTime.charAt(4) + '' + newStrTime.charAt(5) + '' ,
    //   '000000'
    // )
    if (parseInt(newStrTime.charAt(0)  + newStrTime.charAt(1)+newStrTime.charAt(2) +
      newStrTime.charAt(3)+newStrTime.charAt(4) + newStrTime.charAt(5) + '' )=== parseInt('000000')) {
      clearInterval(this.countdownDateTimer)
      let time =0
      lis.forEach(i=>{
        time+=350
        setTimeout(()=>{
          jitter(i.childNodes[1],'left',0,30,()=>{
            acceleratedMove(i.childNodes[1],"top",2000,0.1,60,()=>{})
          })
        }, time)
        clearInterval(this.autoTimer)
      })

      this.setState({ strTime: '00000' })
    } else {
      this.setState({ strTime: newStrTime })
    }
  }

  render () {
    let strTime = this.state.strTime
    let showArray = this.state.showArray
    return (
      <Fragment>
        <div className="SecondSkillCommodity-wrap">
          <div className="SecondSkillCommodity-box">
            <div className="SecondSkillCommodity-title">
              <h2>小米闪购</h2>
              <span className="iconfont"
                    onClick={this.rightClickPlay}
                    onMouseOver={this.rightOnMouseOver}
                    onMouseOut={this.rightOnMouseOut}
              >&#xe7a7;
              </span>
              <span className="iconfont"
                    onClick={this.leftClickPlay}
                    onMouseOver={this.leftOnMouseOver}
                    onMouseOut={this.leftOnMouseOut}
              >&#xe61c;</span>
            </div>
            <div className="SecondSkillCommodity-content">
              <div>
                <div>
                  <ul>
                    <span>.</span>
                    <li><span>{showArray[strTime.charAt(0) * 1]}{showArray[strTime.charAt(1) * 1]}:00场</span></li>
                    <li><span className="iconfont">&#xe605;</span></li>
                    <li className="endDec">距离结束还有</li>
                    {/*<span>14:00场</span>*/}
                  </ul>
                  <ul className="SecondSkillCommodity-content-date">
                    <li>
                      <span
                      className="iconfont">{showArray[strTime.charAt(0) * 1]}{showArray[strTime.charAt(1) * 1]}
                      </span>
                    </li>
                    <li>:</li>
                    <li><span
                      className="iconfont">{showArray[strTime.charAt(2) * 1]}{showArray[strTime.charAt(3) * 1]}</span>
                    </li>
                    <li>:</li>
                    <li><span
                      className="iconfont">{showArray[strTime.charAt(4) * 1]}{showArray[strTime.charAt(5) * 1]}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <ul
                  className="SecondSkillCommodity-content-ul"
                  ref={this.CommodityRef}
                  onMouseOver={this.handleOnMouseOver}
                  onMouseOut={this.handleOnMouseOut}
                >
                  <li className="1">
                    <div><span className="iconfont">&#xe6ff;</span><span className="iconfont">&#xe6d5;</span></div>
                    <div>
                      <Link to="#" className="SecondSkillCommodity-content-Link">
                        <img src={img_1} alt=""/>
                        <p>小米智能摄像机 云台版xxxxxxx</p>
                        <p>xxxxxxxxxx</p>
                        <p><span className="iconfont"></span>0元 <span>150元</span></p>
                      </Link>
                    </div>
                  </li>
                  <li className="1">
                    <div><span className="iconfont">&#xe6ff;</span><span className="iconfont">&#xe6d5;</span></div>
                    <div>
                      <Link to="#"><img src={img_2} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                        <p><span className="iconfont"></span>0元 <span>150元</span></p></Link>
                    </div>
                  </li>
                  <li className="1">
                    <div><span className="iconfont">&#xe6ff;</span><span className="iconfont">&#xe6d5;</span></div>
                    <div>
                      <Link to="#"><img src={img_3} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                        <p><span className="iconfont"></span>0元 <span>150元</span></p></Link>
                    </div>
                  </li>
                  <li className="1">
                    <div><span className="iconfont">&#xe6ff;</span><span className="iconfont">&#xe6d5;</span></div>
                    <div>
                      <Link to="#"><img src={img_4} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                        <p><span className="iconfont"></span>0元 <span>150元</span></p></Link>
                    </div>
                  </li>
                  <li className="1">
                    <div><span className="iconfont">&#xe6ff;</span><span className="iconfont">&#xe6d5;</span></div>
                    <div>
                      <Link to="#"><img src={img_5} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                        <p><span className="iconfont"></span>0元 <span>150元</span></p></Link>
                    </div>
                  </li>
                  <li className="1">
                    <div><span className="iconfont">&#xe6ff;</span><span className="iconfont">&#xe6d5;</span></div>
                    <div>
                      <Link to="#"><img src={img_6} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                        <p><span className="iconfont"></span>0元 <span>150元</span></p></Link>
                    </div>
                  </li>
                  <li className="1">
                    <div><span className="iconfont">&#xe6ff;</span><span className="iconfont">&#xe6d5;</span></div>
                    <div>
                      <Link to="#"><img src={img_7} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                        <p><span className="iconfont"></span>0元 <span>150元</span></p></Link>
                    </div>
                  </li>
                  <li className="1">
                    <div><span className="iconfont">&#xe6ff;</span><span className="iconfont">&#xe6d5;</span></div>
                    <div>
                      <Link to="#"><img src={img_8} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                        <p><span className="iconfont"></span>0元 <span>150元</span></p></Link>
                    </div>
                  </li>
                  <li className="1">
                    <div><span className="iconfont">&#xe6ff;</span><span className="iconfont">&#xe6d5;</span></div>
                    <div>
                      <Link to="#"><img src={img_9} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                        <p><span className="iconfont"></span>0元 <span>150元</span></p></Link>
                    </div>
                  </li>
                  <li className="1">
                    <div><span className="iconfont">&#xe6ff;</span><span className="iconfont">&#xe6d5;</span></div>
                    <div>
                      <Link to="#"><img src={img_10} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                        <p><span className="iconfont"></span>0元 <span>150元</span></p></Link>
                    </div>
                  </li>
                  <li className="1">
                    <div><span className="iconfont">&#xe6ff;</span><span className="iconfont">&#xe6d5;</span></div>
                    <div>
                      <Link to="#"><img src={img_11} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                        <p><span className="iconfont"></span>0元 <span>150元</span></p></Link>
                    </div>
                  </li>
                  <li className="1">
                    <div><span className="iconfont">&#xe6ff;</span><span className="iconfont">&#xe6d5;</span></div>
                    <div>
                      <Link to="#"><img src={img_12} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                        <p><span className="iconfont"></span>0元 <span>150元</span></p></Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    )
  }
}