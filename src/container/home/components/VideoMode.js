import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import HouseholdAppliances from '../img/optionscard/jiadian.jpg'
import media_1 from '../img/media/media_1.jpg'
import media_2 from '../img/media/media_2.jpg'
import media_3 from '../img/media/media_3.jpg'
import media_4 from '../img/media/media_4.jpg'

export default class VideoMode extends Component {



  render () {
    return(
      <Fragment>
          <div className="VideoMode-Wrap">
             <div>
               <img src={HouseholdAppliances} alt=""/>
             </div>
            <div>
              <div>
                <ul><li>视频</li><li><Link to="#">查看全部</Link></li></ul>
              </div>
              <div>
                 <ul>
                  <li><div><img src={media_1} alt=""/></div><p>xxxxxx</p></li>
                  <li><div><img src={media_2} alt=""/></div><p>xxxxxx</p></li>
                  <li><div><img src={media_3} alt=""/></div><p>xxxxxx</p></li>
                  <li><div><img src={media_4} alt=""/></div><p>xxxxxx</p></li>
                </ul>
              </div>
            </div>
          </div>
      </Fragment>
    )
  }
}