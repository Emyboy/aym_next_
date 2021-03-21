import React from 'react'
import Link from 'next/link'

export default function PageNotFound() {
    return (
        <div className="error-area bg_image--4 bg-color-grey">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner">
                            {/* <img src="assets/images/others/404.png" alt="Error Images" /> */}
                            <h1 style={{ fontSize: '160px' }}>404</h1>
                            <h1 className="title">Page not found!</h1>
                            <p>Sorry, but the page you were looking for could not be found.</p>
                            <div className="back-totop-button cerchio d-inline-block" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                                <Link href='/'>
                                    <a className="axil-button button-rounded hover-flip-item-wrapper" href="index.html">
                                        <span className="hover-flip-item">
                                            <span data-text="Back to Homepage">Back to Homepage</span>
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
