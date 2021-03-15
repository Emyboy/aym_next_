import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Mentanace() {
    return (
        <div className="maintanence-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="logo">
                                <a href="index.html">
                                    {/* <img className="dark-logo" src="assets/images/logo/logo-black.png" alt="Logo Images" />
                                    <img className="light-logo" src="assets/images/logo/logo-white2.png" alt="Logo Images" /> */}
                                    <h2 className='border border-1 h1'>AYM.</h2>
                                </a>
                            </div>
                            <h1 className="title">This project is under construction</h1>
                            <Link href='/'>
                                <a className="axil-button button-rounded hover-flip-item-wrapper" href="index.html">
                                    <span className="hover-flip-item">
                                        <span data-text="Back to Homepage">Back to Homepage</span>
                                    </span>
                                </a>
                            </Link>
                            {/* <h5>Subscribe to our weekly newsletter</h5>
                            <p>No spam, notifications only about news products, updates.</p>
                            <div className="inner d-flex align-items-center flex-wrap">
                                <h5 className="follow-title mb--0 mr--20">Follow Us</h5>
                                <ul className="social-icon color-tertiary md-size justify-content-start">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div> */}
                            {/* <form action="#" className="subscription-form">
                                <div className="form-group">
                                    <input type="text" name="subscription-email" placeholder="Enter your email" />
                                    <button className="axil-button button-rounded"><span>Subscribe</span></button>
                                </div>
                            </form> */}
                        </div>
                    </div>
                    <div className="order-1 order-lg-2 col-lg-5 offset-lg-1">
                        <div className="thumbnail">
                            <Image src="/img/maintenence.png" alt="Images" width={500}
                                height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
