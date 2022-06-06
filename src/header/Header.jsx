import './header.css'
import $ from 'jquery'
import { Nav } from './Nav';
import { useState } from 'react';
import Navtool from "./Navtool.json"
import { Link } from 'react-router-dom';
const Header = () => {
  const [i, seti] = useState(0)
  // console.log('asd');

  const show01 = () =>{
    document.getElementById('topnav-01').style.display = "flex";
    document.getElementById('circle01').style.display = "flex";
    seti(0)
  }
  const show02 = () =>{
    document.getElementById('topnav-01').style.display = "flex";
    document.getElementById('circle02').style.display = "flex";
    seti(1)
  }
  const show03 = () =>{
    document.getElementById('topnav-01').style.display = "flex";
    document.getElementById('circle03').style.display = "flex";
    document.getElementById('topnav-01-drop-c-sm-p').style.display = "none";
    seti(2)
  }
  const show04 = () =>{
    document.getElementById('topnav-01').style.display = "flex";
    document.getElementById('circle04').style.display = "flex";

    // let tagtarget = document.getElementById('topnav-01-drop-c');
    // let creat = document.createElement('ul');
    // creat.setAttribute('className','topnav-01-drop-c-sm');
    // creat.innerHTML = `<p className='topnav-01-drop-c-sm-p' id='topnav-01-drop-c-sm-p'>{props.info.tap06}</p>`;
    // tagtarget.prependChild(creat);
    seti(3)
  }
  

  const hide01 = () => {
    document.getElementById('circle01').style.display = "none";
    // document.getElementById('circle02').style.display = "none";
  }
  const hide02 = () => {
    // document.getElementById('circle01').style.display = "none";
    document.getElementById('circle02').style.display = "none";
  }
  const hide03 = () => {
    document.getElementById('circle03').style.display = "none";
  }
  const hide04 = () => {
    document.getElementById('circle04').style.display = "none";
  }

  // $(document).ready(function(){
  //   $('.topnav-01-drop').css("display","none")
  //   $('.topnav').mouseenter(function(){
  //     $('.topnav-01-drop').css("display","flex")
  //   })
  //   $('.topnav').mouseleave(function(){
  //     $('.topnav-01-drop').css("display","none")
  //   })
  // })
  // let add ="<ul className='topnav-01-drop-c-sm'><p className='topnav-01-drop-c-sm-p' id='topnav-01-drop-c-sm-p'>{props.info.tap06}</p></ul>";

  return (
    <>
      <div className='headerbox'>
          <div className='header'>
              <Link to='/Home' className='headerimg'><img src='logo.png'/></Link>
              <ul className='topnav'>
                  <a className='topnav-01' onMouseEnter={()=>{show01()}} onMouseLeave={()=>{hide01()}} >
                    도서관안내
                    <i className="fa-regular fa-circle-dot circle01" id='circle01'></i>
                  </a>
                  <a className='topnav-01' onMouseEnter={()=>{show02()}} onMouseLeave={()=>{hide02()}} >
                    자료검색
                    <i className="fa-regular fa-circle-dot circle02" id='circle02'></i>
                  </a>
                  <a className='topnav-01' onMouseEnter={()=>{show03()}} onMouseLeave={()=>{hide03()}} >
                    문화행사
                    <i className="fa-regular fa-circle-dot circle03" id='circle03'></i>
                  </a>
                  <a  className='topnav-01' onMouseEnter={()=>{show04()}} onMouseLeave={()=>{hide04()}} >
                    정보광장
                    <i className="fa-regular fa-circle-dot circle04" id='circle04'></i>
                  </a>
                  <Link to="/Login" className='lasta'>로그인/회원가입</Link>  
              </ul>  
          </div>
          <Nav info={Navtool.libraryinfo[i]} />
          {/* ---------------------- */}
      </div>
    </>
  )
}

export default Header


