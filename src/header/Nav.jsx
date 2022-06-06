import React from 'react'
// import "./nav.css"
import Background from './47046_84952_2317.jpg';
import $ from 'jquery'

export const Nav = (props) => {

  // console.log(props.info.top)
  const hide = () =>{
    document.getElementById('topnav-01').style.display = 'none';
    document.getElementById('circle01').style.display = "none";
    document.getElementById('circle02').style.display = "none";
  }
  // const backstyle ={
  //   opacity: 0.5,
  //   backgroundImage: `url(${Background})`
  // }
  return (
    <div>
      <div className='topnav-01-drop' id='topnav-01' onMouseLeave={()=>{hide()}}>
            <div className='topnav-01-drop-l'>
                <p>{props.info.main}</p>
                <p>장기동 도서관에 오신걸 환영합니다.</p>
            </div>
            <div className='topnav-01-drop-c' id='topnav-01-drop-c'>
                  <ul className='topnav-01-drop-c-sm'>
                    <p className='topnav-01-drop-c-sm-p'>{props.info.tap01}</p>
                    <li>{props.info.taps01_01}</li>
                    <li>{props.info.taps01_02}</li>
                    <li>{props.info.taps01_03}</li>
                    <li>{props.info.taps01_04}</li>
                    <li>{props.info.taps01_05}</li>
                    <li>{props.info.taps01_06}</li>
                    <li>{props.info.taps01_07}</li>
                    <li></li>
                  </ul>
                  <ul className='topnav-01-drop-c-sm'>
                    <p className='topnav-01-drop-c-sm-p'>{props.info.tap02}</p>
                    <li>{props.info.taps02_01}</li>
                    <li>{props.info.taps02_02}</li>
                    <li>{props.info.taps02_03}</li>
                    <li>{props.info.taps02_04}</li>
                    <li></li>
                  </ul>
                  <ul className='topnav-01-drop-c-sm'>
                    <p className='topnav-01-drop-c-sm-p'>{props.info.tap03}</p>
                    <li>{props.info.taps03_01}</li>
                    <li>{props.info.taps03_02}</li>
                    <li></li>
                  </ul>
                  <ul className='topnav-01-drop-c-sm'>
                    <p className='topnav-01-drop-c-sm-p'>{props.info.tap04}</p>
                  </ul>
                  <ul className='topnav-01-drop-c-sm'>
                    <p className='topnav-01-drop-c-sm-p'>{props.info.tap05}</p>
                    <li>{props.info.taps04_01}</li>
                    <li>{props.info.taps04_02}</li>
                    <li>{props.info.taps04_03}</li>
                    <li>{props.info.taps04_04}</li>
                    <li>{props.info.taps04_05}</li>
                    <li>{props.info.taps04_06}</li>
                    <li>{props.info.taps04_07}</li>
                    <li></li>
                  </ul>
                  <ul className='topnav-01-drop-c-sm'>
                    <p className='topnav-01-drop-c-sm-p' id='topnav-01-drop-c-sm-p'>{props.info.tap06}</p>
                  </ul>
            </div>
            <div className='topnav-01-drop-r'></div>
        </div>
    </div>
  )
}
