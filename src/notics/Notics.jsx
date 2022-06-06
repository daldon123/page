import React, { Component } from 'react'
import './notics.css'

export default class Notics extends Component {
  render() {
    return (
      <div className='notics'>
          <div className='notics01'>
              <div className='notics01-manu'>
                <p>공지사항</p>
                <p>문화행사</p>
                <div className='notics01-xbtn'>
                    <i className="fa-regular fa-circle-xmark"></i>
                </div>
              </div>
              <ul className='notics01-text'>
                <li>김포시 시립도서관 기간제근로자 채용 면접 일정 및 대상...</li>
                <li>2022년 시청자미디어재단 지원사업 공모선정 「영상으로, ...</li>
                <li>세상을 보는 부모교육 ＜사춘기 마주하기＞ 운영 안내</li>
                <li>4월의 사람책 ＜카페 해달별＞</li>
                <li>2022년 장기도서관 성인자원봉사자 모집</li>
              </ul>
          </div>
          <div className='notics02'>
            <div className='notics02-manu'>
                <p>휴관일</p>
                <div className='notics02-xbtn'>
                    <i className="fa-regular fa-circle-xmark"></i>
                </div>
            </div>
            <div className='notics02-middle'>
                <p>2022.04</p>
                <i className="fa-solid fa-calendar-check"></i>
            </div>
            <div className='notics02-text'>
                <p>-장기도서관 04월 휴관일</p>
                <p>휴관일은 매주 <strong>금요일,일요일을 제외한 법정 공휴일</strong>입니다.</p>
            </div>
          </div>
      </div>
    )
  }
}
