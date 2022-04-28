import React from 'react'
import './view.css'
import {Link} from 'react-router-dom';

export default function View() {
  return (
      <>
        <div className="blog__label">
            <h3 className="section__title">블로그 제목</h3>
            <div>
                <span className="author"><Link to="/">작가</Link></span>
                <span className="date">날짜</span><br/>
                <span className="modify"><Link to="/">수정</Link></span>
                <span className="delete"><Link to="/">삭제</Link></span>
            </div>
        </div>
        <div className="container">
            <div className="blog__layout">
                <div className="blog__left">블로그 내용</div>
                <div className="blog__right">광고</div>
            </div>
        </div>
      </>
  )
}
