import React from 'react'
import {Link} from 'react-router-dom';
import './mypage.css';

export default function Mypage() {
  return (
    <section className="join-type gray">
        <div className="member-form">
            <h3>회원 정보</h3>                
            <div className="join-intro">
                <div className='face'><img src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='프로필이미지' /></div>
            </div>
            <div className="blog__btn">
                <Link to="/write">글쓰기</Link>
            </div>
            <div className="join-info">
                <ul>
                    <li><strong>이메일</strong><span></span></li>
                    <li><strong>닉네임</strong><span></span></li>
                    <li><strong>이름</strong><span></span></li>
                    <li><strong>생년월일</strong><span></span></li>
                    <li><strong>핸드폰 번호</strong><span></span></li>
                    <li><strong>성별</strong><span></span></li>
                    <li><strong>사이트</strong><span></span></li>
                </ul>
            </div>

            <div className="join-btn">
                <Link to="/">수정하기</Link>
                <Link to="/">탈퇴하기</Link>
            </div>

        </div>
    </section>
  )
}
