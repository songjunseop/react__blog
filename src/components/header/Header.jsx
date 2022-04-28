import React from 'react';
import '../../App.css';
import './header.css';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <Link to="/">
                    React <em>class</em>
                </Link>
            </h1>
            <nav className="menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">로그인</Link>
                    </li>
                    <li>
                        <Link to="/join">회원가입</Link>
                    </li>
                    <li>
                        <Link to="/">블로그</Link>
                    </li>
                    {/* <li>
                        <a href="/">퀴즈</a>
                        <ul className="sub">
                            <li>
                                <a href="/">문제 만들기</a>
                            </li>
                            <li>
                                <a href="/">문제 풀기</a>
                            </li>
                            <li>
                                <a href="/">기출 문제</a>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </nav>
            <div className="member">
                <span className="ir_so">회원 정보 영역</span>
                <Link to="/" className="setting">
                    <img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500
"
                        alt="이미지"
                    />
                </Link>
                <p>님 반갑습니다.</p>
            </div>
        </header>
    );
}
