import React, { Component, Fragment } from 'react'
import '../../icon/iconfont.css'
import './css/home.css'
import HomeSectionBox from './components/HomeSectionBox'
import CarouselImg from './components/CarouselImg'
import HotCommodity from './components/HotCommodity'
import SecondskillCommodity from './components/SecondsKillCommodity'
import OptionsCard from './components/OptionsCard'
import HomeHeader from './components/HomeHeader'
import VideoMode from './components/VideoMode'

export default class HomeContainer extends Component {

  render () {
    return (
      <Fragment>
        <div className = "Index-Wrap">
          <div className="Index-Advertising">

          </div>
          <HomeHeader/>
          <div className="home-wrap-box">
            <section className="home-section-wrap">
              <div className="home-section-box">
                <HomeSectionBox/> {/*导航条*/}
                <CarouselImg/> {/*轮播图*/}
                <HotCommodity/>{/*热门商品*/}
              </div>
            </section>
            <SecondskillCommodity/> {/*秒杀商品*/}
            <div className="OptionsCard-Wrap">
              <div className="OptionsCard-Wrap-box">
                <OptionsCard/> {/*选项卡*/}
                <OptionsCard/> {/*选项卡*/}
                <OptionsCard/> {/*选项卡*/}
                <OptionsCard/> {/*选项卡*/}
                <VideoMode/>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

