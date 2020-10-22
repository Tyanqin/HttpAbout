import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import HouseholdAppliances from '../img/optionscard/jiadian.jpg'
import card_1 from '../img/optionscard/1.jpg'
import card_2 from '../img/optionscard/2.jpg'
import card_3 from '../img/optionscard/3.jpg'
import card_4 from '../img/optionscard/4.jpg'
import card_5 from '../img/optionscard/5.jpg'
import card_6 from '../img/optionscard/6.jpg'
import card_7 from '../img/optionscard/7.jpg'

import card_2_1 from '../img/optionscard/2_1.jpg'
import card_2_2 from '../img/optionscard/2_2.jpg'
import card_2_3 from '../img/optionscard/2_3.jpg'
import card_2_4 from '../img/optionscard/2_4.jpg'
import card_2_5 from '../img/optionscard/2_5.jpg'
import card_2_6 from '../img/optionscard/2_6.jpg'
import card_2_7 from '../img/optionscard/2_7.jpg'

import card_1_0 from '../img/optionscard/1_0.jpg'
import card_1_01 from '../img/optionscard/1_01.jpg'

import timg2 from '../img/optionscard/timg2.jpg'
// import timg3 from '../img/optionscard/timg3.jpg'

import card_1_bottom_1 from '../img/optionscard/1_bottom_1.jpg'
import jiantou from '../img/optionscard/jiantou.jpg'
import girl from '../img/optionscard/meinv1.jpg'

export default class OptionsCard extends Component {

  OptionsCardBoxOptionsRef = React.createRef()
  OptionsCardContentsBoxRef = React.createRef()
  index = 2
  ulHandleOnMouseOver = (even) => {
    if (even.target.className === '1') {
      let element  = this.OptionsCardBoxOptionsRef.current.childNodes
      element[element.length-1].style.borderBottom = ""
      element[element.length-1].childNodes[0].style.color = "0"


      let index = parseInt(even.target.id)
      this.OptionsCardContentsBoxRef.current.childNodes[this.index].style.opacity = '0'
      this.OptionsCardContentsBoxRef.current.childNodes[this.index].style.zIndex = '0'
      element[this.index-1].style.borderBottom = ""
      element[this.index-1].childNodes[0].style.color = ""
      console.log(this.index)

      this.OptionsCardContentsBoxRef.current.childNodes[index].style.zIndex = '1'
      this.OptionsCardContentsBoxRef.current.childNodes[index].style.opacity = '1'
      element[index-1].style.borderBottom = "3px solid rgb(254, 103, 0)"
      element[index-1].childNodes[0].style.color = "red"
      this.index = index
    }
  }
  componentDidMount () {
    let element  = this.OptionsCardBoxOptionsRef.current.childNodes
    element[element.length-1].style.borderBottom = "3px solid rgb(254, 103, 0)"
    element[element.length-1].childNodes[0].style.color = "red"
    this.OptionsCardContentsBoxRef.current.childNodes[2].style.opacity = 1
  }

  render () {
    return (
      <Fragment>
        <div className="OptionsCard-Box">
          <div><Link to="#"><img src={HouseholdAppliances} alt=""/></Link></div>
          <div>
            <div><h2>家电</h2></div>
            <ul
              ref={this.OptionsCardBoxOptionsRef}
              onMouseOver={this.ulHandleOnMouseOver}
              // onMouseOut={this.ulHandleOnMouseOut}
            >
              <li>
                <span className="1" id="1">影音</span>
              </li>
              <li>
                <span className="1" id="2">热门</span>
              </li>
              {/*<li>*/}
              {/*  <span className="1" id="0">123</span>*/}
              {/*</li>*/}
            </ul>
          </div>
          <div className="OptionsCard-Contents-Box"
               ref={this.OptionsCardContentsBoxRef}>
            <div className="OptionsCard-Contents">
              <ul>
                <li><Link to="#">1</Link></li>
                <li>
                  <div>ff</div>
                  <Link to="#">
                    <div>123</div>
                  </Link></li>
                <li>
                  <div>ff</div>
                  <Link to="#">
                    <div>123</div>
                  </Link></li>
                <li>
                  <div>ff</div>
                  <Link to="#">
                    <div>123</div>
                  </Link></li>
                <li>
                  <div>ff</div>
                  <Link to="#">
                    <div>123</div>
                  </Link></li>
              </ul>
              <ul>
                <li><Link to="#">1</Link></li>
                <li>
                  <div>ff</div>
                  <Link to="#">
                    <div>123</div>
                  </Link></li>
                <li>
                  <div>ff</div>
                  <Link to="#">
                    <div>123</div>
                  </Link></li>
                <li>
                  <div>ff</div>
                  <Link to="#">
                    <div>123</div>
                  </Link></li>
                <li>
                  <div><Link to="#">1</Link></div>
                  <div><Link to="#">2</Link></div>
                </li>
              </ul>
            </div>
            <div className="OptionsCard-Contents">
              <ul>
                <li><Link to="#"><img src={card_1_0} alt=""/></Link></li>
                <li className="hover">
                  <div><img src={timg2} alt=""/></div>
                  <Link to="#">
                    <div><img src={card_2_1} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link></li>
                <li className="hover">
                  <div><img src={timg2} alt=""/></div>
                  <Link to="#">
                    <div><img src={card_2_2} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link></li>
                <li className="hover">
                  <div><img src={timg2} alt=""/></div>
                  <Link to="#">
                    <div><img src={card_2_3} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link></li>
                <li className="hover">
                  <div><img src={timg2} alt=""/></div>
                  <Link to="#">
                    <div><img src={card_2_4} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link></li>
              </ul>

              <ul>
                <li><Link to="#"><img src={card_1_01} alt=""/></Link></li>
                <li className="hover">
                  <div><img src={timg2} alt=""/></div>
                  <Link to="#">
                    <div><img src={card_2_5} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link></li>
                <li className="hover">
                  <div><img src={timg2} alt=""/></div>
                  <Link to="#">
                    <div><img src={card_2_6} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link></li>
                <li className="hover">
                  <div><img src={timg2} alt=""/></div>
                  <Link to="#">
                    <div><img src={card_2_7} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link></li>
                <li className="OptionsCard-Contents-Last">
                  <div><Link to="#">
                    <div>
                      <p>xxxxxxxxxxxx</p>
                      <p>xxxxxxxxxxxx</p>
                      <p>xxxxxxxxxxxx</p>
                    </div>
                    <img src={card_1_bottom_1} alt=""/></Link></div>
                  <div><Link to="#">
                    <div>
                      <p>xxxxxxxxxxxx</p>
                      <p>xxxxxxxxxxxx</p>
                      <p>xxxxxxxxxxxx</p>
                    </div>
                    <img src={jiantou} alt=""/></Link></div>
                </li>
              </ul>
            </div>
            <div className="OptionsCard-Contents">
              <ul>
                <li><Link to="#"><img src={card_1_0} alt=""/></Link></li>
                <li className="hover">
                  <div><img src={girl} alt=""/></div>
                  <Link to="#">
                    <div className="hover"><img src={card_1} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link>
                </li>
                <li className="hover">
                  <div><img src={girl} alt=""/></div>
                  <Link to="#">
                    <div><img src={card_2} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link>
                </li>
                <li className="hover">
                  <div><img src={girl} alt=""/></div>
                  <Link to="#">
                    <div><img src={card_3} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link></li>
                <li className="hover">
                  <div><img src={girl} alt=""/></div>
                  <Link to="#">
                    <div><img src={card_4} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link></li>
              </ul>

          {/*123*/}
              <ul>
                <li><Link to="#"><img src={card_1_01} alt=""/></Link></li>
                <li className="hover">
                  <div><img src={girl} alt=""/></div>
                  <Link to="#">
                    <div><img src={card_5} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link></li>
                <li className="hover">
                  <div><img src={girl} alt=""/></div>
                  <Link to="#">
                    <div><img src={card_6} alt=""/><p>小米智能摄像机 云台版xxxxxxx</p><p>xxxxxxxxxx</p>
                      <p><span>150元</span></p></div>
                  </Link></li>
                <li className="hover">
                  <div><img src={girl} alt=""/></div>
                  <Link to="#">
                    <div>
                      <img src={card_7} alt=""/>
                      <p>小米智能摄像机 云台版xxxxxxx</p>
                      <p>xxxxxxxxxx</p>
                      <p><span>150元</span></p>
                    </div>
                  </Link>
                </li>
                <li className="OptionsCard-Contents-Last">
                  <div><Link to="#">
                    <div>
                      <p>xxxxxxxxxxxx</p>
                      <p>xxxxxxxxxxxx</p>
                      <p>xxxxxxxxxxxx</p>
                    </div>
                    <img src={card_1_bottom_1} alt=""/></Link></div>
                  <div><Link to="#">
                    <div>
                      <p>xxxxxxxxxxxx</p>
                      <p>xxxxxxxxxxxx</p>
                      <p>xxxxxxxxxxxx</p>
                    </div>
                    <img src={jiantou} alt=""/></Link></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}