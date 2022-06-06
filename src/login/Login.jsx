import React from 'react'
import Bottombar from '../bottombar/Bottombar'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Top from '../top/Top'
import './login.css'

const Login = () => {
  return (
    <>
        <div className='logins'>
            <h1>로그인</h1>
            <div className='logins-info-box'>
                <div className='logins-info-box-imgbox'></div>
                <div className='logins-info-box-text'>
                  <p>김포시청 홈페이지에 오신 것을 환영합니다.</p>
                  <p>김포시 통합 홈페이지에서는 신규 회원가입을 받지 않고, 본인인증 및 간편로그인을 통해 서비스합니다.</p>
                  <p className='sptexts'>홈페이지 로그인 시스템이 변경되었습니다.</p>
                  <p className='sptexts'>기존 도서관회원들께서는 로그인 후 본인인증 절차를 진행하여 주시기 바랍니다.(최초 1회)</p>
                  <p className='sptexts'>김포시립도서관 홈페이지에서는 대출회원 가입을 위한 회원가입 절차가 있사오니 이용에 참고하여 주시기 바랍니다.</p>
                </div>
            </div>
            <div className='logins-boxs'>
                <div className='logins-simple'>
                    <div className='logins-simple-top'>
                        <span>간편로그인</span>
                    </div>
                    <div className='logins-simple-main'>
                        <a href="https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com"><img src="login_naverid.png" /></a>
                        <p className='sptexts'>최초 1회 본인인증 필요</p>
                    </div>
                </div>
                <div className='logins-book'>
                    <div className='logins-book-top'>
                        <span>도서회원로그인</span>
                    </div>
                    <div className='logins-book-main'>
                      <div className='logins-book-main-box'>
                        <div className='logins-book-main-login'>
                          <div className='logins-book-main-id'>
                            <p className='logins-book-main-login-p'>아이디</p>
                            <input type="text" className='logins-book-main-login-input' />
                          </div>
                          <div className='logins-book-main-pass'>
                            <p className='logins-book-main-login-p'>비밀번호</p>
                            <input type="text" className='logins-book-main-login-input' />
                          </div>
                        </div>
                        <div className='logins-book-main-login-btn'>
                            로그인
                        </div>
                      </div>
                      <p className='sptexts'>비밀번호 : 영문, 숫자, 특수문자(!@#$%^&*만 허용) 조합으로 9자리 이상.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login