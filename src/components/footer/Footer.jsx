import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <h2 className="ir_so">푸터 바로가기 메뉴</h2>
                <div className="footer-menu">
                    <div>
                        <h3>레이아웃 영역</h3>
                        <ul>
                            <li>
                                <Link to="/">레이아웃 유형 01</Link>
                            </li>
                            <li>
                                <Link to="/">레이아웃 유형 02</Link>
                            </li>
                            <li>
                                <Link to="/">레이아웃 유형 03</Link>
                            </li>
                            <li>
                                <Link to="/">레이아웃 유형 04</Link>
                            </li>
                            <li>
                                <Link to="/">레이아웃 유형 05</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>메뉴 영역</h3>
                        <ul>
                            <li>
                                <Link to="/">메뉴 유형 01</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>메인 영역</h3>
                        <ul>
                            <li>
                                <Link to="/">이미지 유형 01</Link>
                            </li>
                            <li>
                                <Link to="/">동영상 유형 02</Link>
                            </li>
                            <li>
                                <Link to="/">슬라이드 유형 03</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>게시판 영역</h3>
                        <ul>
                            <li>
                                <Link to="/">게시판</Link>
                            </li>
                            <li>
                                <Link to="/">게시판 수정하기</Link>
                            </li>
                            <li>
                                <Link to="/">게시판 보기</Link>
                            </li>
                            <li>
                                <Link to="/">게시판 쓰기</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>푸터 영역</h3>
                        <ul>
                            <li>
                                <Link to="/">컨택트 유형 01</Link>
                            </li>
                            <li>
                                <Link to="/">푸터 유형 02</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>사이트</h3>
                        <ul>
                            <li>
                                <Link to="/">웹표준 사이트</Link>
                            </li>
                            <li>
                                <Link to="/">반응형 사이트</Link>
                            </li>
                            <li>
                                <Link to="/">패럴랙스 사이트</Link>
                            </li>
                            <li>
                                <Link to="/">포트폴리오 사이트</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <address className="footer-rights">&copy; 2022 junseop. All rights reserved.</address>
            </div>
        </footer>
    );
}

export default Footer;
