import React from 'react'
import EachPost2 from '../EachPost2/EachPost2'

export default function SidePanel() {
    return (
        <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
            <div className="sidebar-inner">

                <div className="axil-single-widget widget widget_categories mb--30">
                    <ul>
                        <li className="cat-item">
                            <a href="#" className="inner">
                                <div className="thumbnail">
                                    <img src="assets/images/post-images/category-image-01.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <h5 className="title">Tech</h5>
                                </div>
                            </a>
                        </li>
                        <li className="cat-item">
                            <a href="#" className="inner">
                                <div className="thumbnail">
                                    <img src="assets/images/post-images/category-image-02.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <h5 className="title">Style</h5>
                                </div>
                            </a>
                        </li>
                        <li className="cat-item">
                            <a href="#" className="inner">
                                <div className="thumbnail">
                                    <img src="assets/images/post-images/category-image-03.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <h5 className="title">Travel</h5>
                                </div>
                            </a>
                        </li>
                        <li className="cat-item">
                            <a href="#" className="inner">
                                <div className="thumbnail">
                                    <img src="assets/images/post-images/category-image-04.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <h5 className="title">Food</h5>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="axil-single-widget widget widget_search mb--30">
                    <h5 className="widget-title">Search</h5>
                    <form action="#">
                        <div className="axil-search form-group">
                            <button type="submit" className="search-button"><i className="fal fa-search"></i></button>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                    </form>
                </div>

                <div className="axil-single-widget widget widget_postlist mb--30">
                    <h5 className="widget-title">Popular on Blogar</h5>
                    <div className="post-medium-block">
                        <EachPost2 />
                        <EachPost2 />
                        <EachPost2 />
                        <EachPost2 />
                    </div>

                </div>

                <div className="axil-single-widget widget widget_social mb--30">
                    <h5 className="widget-title">Stay In Touch</h5>
                    <ul className="social-icon md-size justify-content-center">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-slack"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>

                <div className="axil-single-widget widget widget_instagram mb--30">
                    <h5 className="widget-title">Instagram</h5>
                    <ul className="instagram-post-list-wrapper">
                        <li className="instagram-post-list">
                            <a href="#">
                                <img src="assets/images/small-images/instagram-01.jpg" alt="Instagram Images" />
                            </a>
                        </li>
                        <li className="instagram-post-list">
                            <a href="#">
                                <img src="assets/images/small-images/instagram-02.jpg" alt="Instagram Images" />
                            </a>
                        </li>
                        <li className="instagram-post-list">
                            <a href="#">
                                <img src="assets/images/small-images/instagram-03.jpg" alt="Instagram Images" />
                            </a>
                        </li>
                        <li className="instagram-post-list">
                            <a href="#">
                                <img src="assets/images/small-images/instagram-04.jpg" alt="Instagram Images" />
                            </a>
                        </li>
                        <li className="instagram-post-list">
                            <a href="#">
                                <img src="assets/images/small-images/instagram-05.jpg" alt="Instagram Images" />
                            </a>
                        </li>
                        <li className="instagram-post-list">
                            <a href="#">
                                <img src="assets/images/small-images/instagram-06.jpg" alt="Instagram Images" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>



        </div>
    )
}
