import React from 'react'
import Link from 'next/link'

export default function EachCat() {
    return (
        <li className="cat-item">
            <Link href='/category/93489384'>
                <a href="#" className="inner">
                    <div className="thumbnail">
                        <img src="assets/images/post-images/category-image-01.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h5 className="title">Tech</h5>
                    </div>
                </a>
            </Link>
        </li>
    )
}
