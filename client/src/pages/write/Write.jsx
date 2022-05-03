import React from 'react';
import './write.css';

export default function Write() {
  return (
    <section id="blog-type" className="section center">
        <div className="container">
            <h3 className="section__title">게시글 작성하기</h3>
            <p className="section__desc">수업과 관련된 블로그를 작성해주세요.</p>
            <div className="blog__inner">
                <div className="blog__write">
                    <form action="blogWriteSave.php" name="blogWrite" method="post" enctype="multipart/form-data">
                        <fieldset>
                            <legend className="ir_so">블로그 게시글 작성 영역</legend>
                            <div>
                                <label htmlFor="blogCategory">카테고리</label>
                                <select name="blogCategory" id="blogCate">
                                    <option value="javascript">javascript</option>
                                    <option value="jquery">jquery</option>
                                    <option value="html">html</option>
                                    <option value="css">css</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="blogTitle">제목</label>
                                <input type="text" name="blogTitle" id="blogTitle" placeholder="제목을 넣어주세요." required />
                            </div>
                            <div>
                                <label for="blogContents">내용</label>
                                <textarea name="blogContents" id="blogContents" placeholder="내용을 넣어주세요." required></textarea>
                            </div>
                            <div>
                                <label htmlFor="blogImgFile">파일</label>
                                <input type="file" name="blogImgFile" id="blogImgFile" accept=".jpg, .jpeg, .png, .svg, .gif" placeholder="사진을 넣어주세요. 사진은 jpg, gif, png 파일만 지원이 됩니다." />
                            </div>
                            <button type="submit" value="저장하기">저장하기</button>
                        </fieldset>
                        
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
