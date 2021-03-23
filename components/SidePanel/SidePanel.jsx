import React from 'react'
import EachPost2 from '../EachPost2/EachPost2'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineLink, AiFillLinkedin } from 'react-icons/ai'
import EachCat from '../EachCat/EachCat'

export default function SidePanel({
    data
}) {
    console.log('SIDE PANEL DATA ---', data)
    return (
        <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
            <div className="sidebar-inner">

                <div className="axil-single-widget widget widget_categories mb--30">
                    <ul>
                        <EachCat />
                        <EachCat />
                        <EachCat />
                        <EachCat />
                    </ul>
                </div>

                <div className="axil-single-widget widget widget_postlist mb--30">
                    <h5 className="widget-title">Popular on Blogar</h5>
                    <div className="post-medium-block">
                        {
                            data.map((val, i) => {
                                return <EachPost2 data={val} key={i} />
                            })
                        }
                    </div>

                </div>

                <div className="axil-single-widget widget widget_social mb--30">
                    <h5 className="widget-title">Stay In Touch</h5>
                    <ul className="social-icon md-size justify-content-center">
                        <li><a href="#"><FaFacebook size={20} /></a></li>
                        <li><a href="#"><AiFillInstagram size={20} /></a></li>
                        <li><a href="#"><AiFillTwitterCircle size={20} /></a></li>
                        {/* <li><a href="#"><i className="fab fa-slack"></i></a></li> */}
                        <li><a href="#"><AiFillLinkedin size={20}/></a></li>
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
