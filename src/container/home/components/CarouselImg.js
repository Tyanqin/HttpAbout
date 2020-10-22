import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { move, fadeInOpacity } from './Move'
import big1 from '../img/big1.jpg'
import big2 from '../img/big2.jpg'
import big3 from '../img/big3.jpg'
import big4 from '../img/big4.jpg'

export default class CarouselImg extends Component {
  ImgContains = React.createRef()
  UlRef = React.createRef()
  PointRef = React.createRef()
  pointTimer
  automaticTimer

  render () {
    return (
      <Fragment>
        <div className="Home-ImgContains-wrap"
             ref={this.ImgContains}
        >
          <div className="Home-ImgContains">
            <div className="Home-Img-box">
              <ul
                ref={this.UlRef}
                onMouseOver={this.imgOnMouseOver}
                onMouseOut={this.imgOnMouseOut}
              >
                <li><Link to="#"><img src={big1} alt=""/></Link></li>
                <li><Link to="#"><img src={big2} alt=""/></Link></li>
                <li><Link to="#"><img src={big3} alt=""/></Link></li>
                <li><Link to="#"><img src={big4} alt=""/></Link></li>
                <li><Link to="#"><img src={big1} alt=""/></Link></li>
              </ul>
            </div>
          </div>
          <ul
            className="Home-ImgContains-point"
            ref={this.PointRef}
            onClick={this.handelOnClick}
          >
            <li className="1" id="0"/>
            <li className="1" id="1"/>
            <li className="1" id="2"/>
            <li className="1" id="3"/>
          </ul>
          <div className="lt"/>
          <div className="gt"/>
          <ul className="Home-options">
            <li><Link to="#">手机 电话卡</Link></li>
            <li><Link to="#">电视 盒子</Link></li>
            <li><Link to="#">笔记本 显示器</Link></li>
            <li><Link to="#">家电 插线板</Link></li>
            <li><Link to="#">出行 穿戴</Link></li>
            <li><Link to="#">智能 路由器</Link></li>
            <li><Link to="#">电源 配件</Link></li>
            <li><Link to="#">健康 儿童</Link></li>
            <li><Link to="#">耳机 音响</Link></li>
            <li><Link to="#">生活 箱包</Link></li>
          </ul>
        </div>
      </Fragment>
    )
  }

  /*
   * 轮播图片点击切换
   */
  // handelOnClick = (even) => {
  //   let lis = this.PointRef.current.childNodes
  //   let ul = this.UlRef.current
  //   let imgWidth = parseInt(getComputedStyle(ul.childNodes[0]).width)
  //   let id = parseInt(even.target.id)
  //   let ulLeft = parseInt(getComputedStyle(ul).left)
  //   let seep = ulLeft
  //   clearInterval(this.automaticTimer)
  //   if (even.target.className === '1') {
  //     this.switchPoint(lis)
  //     even.target.style.backgroundColor = 'red'
  //     let point = parseInt(id * imgWidth * -1)
  //     clearInterval(this.pointTimer)
  //     this.pointTimer = setInterval(() => {
  //       if (ulLeft > point) {
  //         seep -= 20
  //         console.log('1', seep, point)
  //       } else if (ulLeft < point) {
  //         seep += 20
  //         console.log('2', seep, point)
  //       } else {
  //         return
  //       }
  //       ul.style.left = seep + 'px'
  //       if (seep === point) {
  //         clearInterval(this.pointTimer)
  //         this.automaticPlay()
  //       }
  //     }, 8)
  //   }
  // }

  /*清除轮播图点背景样式*/
  switchPoint = (elements) => {
    elements.forEach(i => i.style.backgroundColor = '')
  }
  /*图片自动轮播*/
  automaticPlay = () => {
    let ul = this.UlRef.current
    let imgWidth = parseInt(getComputedStyle(ul.childNodes[0]).width)
    let lis = this.PointRef.current.childNodes
    this.automaticTimer = setInterval(() => {
      this.switchPoint(this.PointRef.current.childNodes)
      let ulLeft = parseInt(getComputedStyle(ul).left)
      if ((ulLeft + imgWidth * -1) === (lis.length) * imgWidth * -1) {
        ulLeft = 0
        ul.style.left = ulLeft + 'px'
        this.PointRef.current.childNodes[0].style.backgroundColor = 'rgb(255,104,0)'
        return
      }
      let index = Math.floor(Math.abs((ulLeft + imgWidth * -1) / 1220))
      if (index === 4) {index = 1}
      this.PointRef.current.childNodes[index].style.backgroundColor = 'rgb(255,104,0)'
      // ul.style.left = (ulLeft + imgWidth * -1) + 'px'
      move(ul, 'left', (ulLeft + imgWidth * -1), 40, () => {})
    }, 5000)
  }

  /*模块挂载后自动播放轮播*/
  componentDidMount () {
    setTimeout(() => {
      fadeInOpacity(this.ImgContains.current, 60, () => {
        this.PointRef.current.childNodes[0].style.backgroundColor = 'rgb(255,104,0)'
        this.automaticPlay()
      })
    }, 1000)
  }

  /*模块卸载前取消轮播定时器*/
  componentWillUnmount () {
    clearInterval(this.automaticTimer)
  }
  /*鼠标移入图片，清除轮播定时器*/
  imgOnMouseOver = (even) => {
    clearInterval(this.automaticTimer)
  }
  /*鼠标移开图片，重新轮播*/
  imgOnMouseOut = (even) => {
    this.automaticPlay()
  }
  /*点击按钮切换图片*/
  handelOnClick = (even) => {
    let lis = this.PointRef.current.childNodes
    let ul = this.UlRef.current
    let imgWidth = parseInt(getComputedStyle(ul.childNodes[0]).width)
    let id = parseInt(even.target.id)
    clearInterval(this.automaticTimer)
    if (even.target.className === '1') {
      this.switchPoint(lis)
      even.target.style.backgroundColor = 'rgb(255,104,0)'
      let point = parseInt(id * imgWidth * -1)
      clearInterval(this.pointTimer)
      move(ul, 'left', point, 40, this.automaticPlay())
    }
  }
}

