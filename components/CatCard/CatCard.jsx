import React from 'react'

export default function CatCard() {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-12">
        {/* <div className="col-md-6"> */}
            <div className="content-block post-grid mt--30">
                <div className="post-thumbnail">
                    <a href="post-details.html">
                        <img src="https://static.toiimg.com/photo/72975551.cms" alt="Post Images" />
                    </a>
                </div>
                <div className="post-grid-content">
                    <div className="post-content">
                        <div className="post-cat">
                            <div className="post-cat-list">
                                <a className="hover-flip-item-wrapper" href="#">
                                    <span className="hover-flip-item">
                                        <span data-text="LIFESTYLE">LIFESTYLE</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <h4 className="title"><a href="post-details.html">The underrated
                        design book
                                                                    that transformed the</a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
