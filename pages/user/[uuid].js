import React from 'react'
import EachPost from '../../components/EachPost/EachPost'
import SidePanel from '../../components/SidePanel/SidePanel'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineLink } from 'react-icons/ai'
import { RiUserFollowFill } from 'react-icons/ri'
import { FaPowerOff } from 'react-icons/fa'
import { MdModeEdit } from 'react-icons/md'
import Heading from '../../components/Heading/Heading'

export default function uuid() {
    return (
        <div>
            <div className="axil-author-area axil-author-banner bg-color-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-author">
                                <div className="media row">
                                    <div className='col-md-3'>
                                        <div className="thumbnail">
                                            <a href="#">
                                                <img src="https://hubstaff-talent.s3.amazonaws.com/avatars/2216852fe9157a7d1c79667d906cf661.jpg" alt="Author Images" style={{ width: '100%' }} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="media-body">
                                            <div className="author-info">
                                                <h1 className="title"><a href="#">Rahabi Ahmed Khan</a></h1>
                                                <span className="b3 subtitle">Sr. UX Designer</span>
                                            </div>
                                            <div className="content">
                                                <p className="b1 description">At 40+ years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come from</p>
                                                <ul className="social-share-transparent size-md">
                                                    <li><a href="#"><FaFacebook size={20} /></a></li>
                                                    <li><a href="#"><AiFillInstagram size={20} /></a></li>
                                                    <li><a href="#"><AiFillTwitterCircle size={20} /></a></li>
                                                    <li><a href="#"><AiOutlineLink size={20} /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3 mt-3'>
                                        <button className='btn p-3 mt-1 h5 text-white button-rounded btn-primary'>
                                            <RiUserFollowFill size={20} />{' '}
                                            Follow
                                        </button>
                                        <button className='btn p-3 mt-1 h5 text-white button-rounded btn-success'>
                                            <MdModeEdit size={20}  />{' '}
                                            Edit</button>
                                        <button className='btn p-3 mt-1 h5 text-white button-rounded btn-danger'>
                                            <FaPowerOff size={20}  />{' '}
                                            Logout
                                            </button>
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
                        <Heading text='Authors Posts'/>
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
