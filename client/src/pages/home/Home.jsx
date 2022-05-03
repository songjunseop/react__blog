import React from 'react';
import './home.css';
import Posts from '../../components/posts/Posts';
import Side from '../../components/side/Side';


export default function Main() {
    return (
        <>
            <main id="main">
                <h2 className="ir_so">컨텐츠 영역</h2>
                <section id="blog-type" className="section center">
                    <div className="container">
                        <h3 className="section__title">React 블로그</h3>
                        <p className="section__desc">React수업과 관련된 블로그입니다. 다양한 정보를 확인하세요.</p>
                        <div className="blog__search">
                            <form action="blogSearch.php" method="get">
                                <fieldset>
                                    <legend className="ir_so">검색영역</legend>
                                    <input
                                        type="search"
                                        name="searchKeyword"
                                        id="blogSearch"
                                        className="search"
                                        placeholder="검색어를 입력해주세요."
                                    />
                                    <label htmlFor="searchKeyword" className="ir_so">
                                        검색
                                    </label>
                                    <button className="button">검색</button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="blog__inner">
                            <Posts />
                            <Side />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
