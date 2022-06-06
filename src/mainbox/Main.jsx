import React, { Component } from 'react'
import './main.css'
import $ from 'jquery';

export default class Main extends Component {

  componentDidMount() {
    const changeImg = () =>{
      $('#leftbtn').off('click').on('click', function(){
        $('.slide').animate({left:'+=600px'},function(){
          $('.slide img').last().clone().prependTo('.slide');
          $('.slide img').last().remove();
          $('.slide').css('left','-600px');
        })
      })
      $('#rightbtn').off('click').on('click', function(){
        $('.slide').animate({left:'-=600px'},function(){
          $('.slide img').first().clone().appendTo('.slide');
          $('.slide img').first().remove();
          $('.slide').css('left','-600px');
        })
      })
    }
    changeImg();

    const autoImg = () =>{
      $('.slide').animate({left:'-=600px'},function(){
        $('.slide img').first().clone().appendTo('.slide');
        $('.slide img').first().remove();
        $('.slide').css('left','-600px');
      })
    }
    const auto01 = setInterval(autoImg,3000)
    

    const stop = () => {
      $('#stopbtn').click(function(){
        clearInterval(auto01);
      })
    }
    stop();


    }

    
  render() {
    return (
      <>
        <div className='mainbox'>
            <div className='main' >
              <div className='slidebox'>
                <div className='slide'>
                    <img id='slide01' src='slide01.jpg'/>
                    <img id='slide02' src='slide02.jpg'/>
                    <img id='slide03' src='slide03.jpg'/>
                  </div>
                  <div className='btnbox'>
                    <i className="fa-regular fa-circle-left btn" id='leftbtn'></i>
                    <i className="fa-regular fa-circle-stop btn" id='stopbtn'></i>
                    <i className="fa-regular fa-circle-right btn"id='rightbtn'></i>
                  </div>
                  <div className='minibox'>
                    <div className='minibook'>
                      <img src="rowgroup_library_icon.png" />
                      <div>
                        <p>나만의</p>
                        <p>도서관</p>
                      </div>
                    </div>
                    <ul className='minilist'>
                      <li>대출조회/반납연기</li>
                      <li>대출조회/반납연기</li>
                      <li>대출조회/반납연기</li>
                      <li>대출조회/반납연기</li>
                    </ul>
                  </div>
              </div>


              <div className='manus'>
                <p>주요 서비스</p>
                <div className='manuicons'>
                  <div className='manubox'>
                    <i className="manuicon fa-solid fa-book"></i>
                    <h3>도서대출</h3>
                  </div>
                  <div className='manubox'>
                    <i className="manuicon fa-regular fa-clipboard"></i>
                    <h3>문의사항</h3>
                  </div>
                  <div className='manubox'>
                    <i className="manuicon fa-solid fa-desktop"></i>
                    <h3>사이버도서관</h3>
                  </div>
                  <div className='manubox'>
                    <i className="manuicon fa-regular fa-rectangle-list"></i>
                    <h3>도서현황</h3>
                  </div>
                  <div className='manubox'>
                    <i className="manuicon fa-solid fa-wifi"></i>
                    <h3>Wi-Fi 등록</h3>
                  </div>
                  <div className='manubox'>
                    <i className="manuicon fa-solid fa-address-card"></i>
                    <h3>ID카드 발급</h3>
                  </div>
                  <div className='manubox'>
                    <i className="manuicon fa-solid fa-comment-dollar"></i>
                    <h3>이용금액</h3>
                  </div>
                  <div className='manubox'>
                    <i className="manuicon fa-solid fa-map"></i>
                    <h3>도서관 오시는길</h3>
                  </div>
                </div>
              </div>






            </div>
        </div>
      </>
    )
  }
}
