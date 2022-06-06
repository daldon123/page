import React, { Component } from 'react'
import './bottombar.css'

export default class Bottombar extends Component {
  render() {
    return (
      <div className='bottombar'>
          <div className='bottombar-select'>
            <div className='bottombar'>
                <p>시민</p>
                <i className="fa-solid fa-angle-up bottombaricon"></i>
            </div>
            <div className='bottombar'>
                <p>사업자</p>
                <i className="fa-solid fa-angle-up bottombaricon"></i>
            </div>
            <div className='bottombar'>
                <p>관광객</p>
                <i className="fa-solid fa-angle-up bottombaricon"></i>
            </div>
            <div className='bottombar'>
                <p>직속기관/사업소</p>
                <i className="fa-solid fa-angle-up bottombaricon"></i>
            </div>
            <div className='bottombar'>
                <p>읍면동</p>
                <i className="fa-solid fa-angle-up bottombaricon"></i>
            </div>
            <div className='bottombar'>
                <p>유관기관</p>
                <i className="fa-solid fa-angle-up bottombaricon"></i>
            </div>
          </div>
      </div>
    )
  }
}
