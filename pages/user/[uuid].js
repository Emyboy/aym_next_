import React from 'react'
import EachPost from '../../components/EachPost/EachPost'
import SidePanel from '../../components/SidePanel/SidePanel'

export default function uuid() {
    return (
        <div>
            <div className="axil-author-area axil-author-banner bg-color-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-author">
                                <div className="media">
                                    <div className="thumbnail">
                                        <a href="#">
                                            <img src="https://hubstaff-talent.s3.amazonaws.com/avatars/2216852fe9157a7d1c79667d906cf661.jpg" alt="Author Images" />
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <div className="author-info">
                                            <h1 className="title"><a href="#">Rahabi Ahmed Khan</a></h1>
                                            <span className="b3 subtitle">Sr. UX Designer</span>
                                        </div>
                                        <div className="content">
                                            <p className="b1 description">At 40+ years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come from</p>
                                            <ul className="social-share-transparent size-md">
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="far fa-envelope"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='axil-post-list-area axil-section-gap bg-color-white'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-xl-8'>
                            <EachPost />
                            <EachPost />
                            <EachPost />
                            <EachPost />
                        </div>
                        <SidePanel />
                    </div>
                </div>
            </div>
        </div>
    )
}
