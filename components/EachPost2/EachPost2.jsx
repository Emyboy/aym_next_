import React from 'react'
import Link from 'next/link'

export default function EachPost2() {
    return (
        <div className="content-block post-medium mb--20">
            <div className="post-thumbnail">
                <Link href='/post/3483948/3'>
                    <a href="#c">
                        <img src="assets/images/small-images/blog-sm-01.jpg" alt="Post Images" />
                    </a>
                </Link>
            </div>
            <div className="post-content">
                <h6 className="title">
                    <Link href='/post/3483948/3'>
                        <a href="post-details.html">The underrated design book that transformed the way I
                                                    work </a>
                    </Link>
                </h6>
                <div className="post-meta">
                    <ul className="post-meta-list">
                        <li>Feb 17, 2019</li>
                        <li>300k Views</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
