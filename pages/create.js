import React from 'react'
import { GrLinkNext } from 'react-icons/gr'
import Link from 'next/link'

export default function create() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center mt-5">
                        <h2 className="title">Select Creation Method.</h2>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="row mt--30">
                <div className="col-lg-12">
                    <ul className="instagram-post-list" style={{ justifyContent: 'center' }}>
                        <li className="single-post">
                            <Link href={'/editor'}>
                                <a href="#">
                                    <img style={{ height: '130px' }} src="https://image.freepik.com/free-vector/video-editor-vector-illustration_126608-698.jpg" alt="Instagram Images" />
                                    <span className="instagram-button"><GrLinkNext size={20} /></span>
                                    <h5 className='text-center pt-2'>Editor</h5>
                                </a>
                            </Link>
                        </li>
                        <li className="single-post">
                            <Link href='/maintenence'>
                                <a href="#">
                                    <img style={{ height: '130px' }} src="https://freedesignfile.com/upload/2017/03/City-building-construction-template-vectors-12.jpg" alt="Instagram Images" />
                                    <span className="instagram-button"><GrLinkNext size={20} /></span>
                                    <h5 className='text-center pt-2'>Builder</h5>
                                </a>
                            </Link>
                        </li>
                        <li className="single-post">
                            <Link href='/maintenence'>
                                <a href="#">
                                    <img style={{ height: '130px' }} src="https://image.freepik.com/free-vector/influencer-recording-new-video_23-2148522553.jpg" alt="Instagram Images" />
                                    <span className="instagram-button"><GrLinkNext size={20} /></span>
                                    <h5 className='text-center pt-2'>Video</h5>
                                </a>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
