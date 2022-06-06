import React, { Component } from 'react'
import './search.css'
export default class Search extends Component {
  render() {
    return (
      <div className='searchbox'>
          <p>도서검색</p>
          <div className='cearchbar'>
            <p className='cearchtext'>전체</p>
            <p className='parrow'>▼</p>
            <input type="text" placeholder='     검색어를 입력하세요'/>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className='lastbox'>
              <p>상세검색</p>
          </div>
      </div>
    )
  }
}
