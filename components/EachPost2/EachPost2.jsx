import React from 'react'
import Link from 'next/link'

export default function EachPost2({
    data
}) {
    return (
        <div className="content-block post-medium mb--20">
            <div className="post-thumbnail">
                <Link href={`/post/${data.title}/${data.id}`}>
                    <img src={data.image_url} alt="Post Images" />
                </Link>
            </div>
            <div className="post-content">
                <h6 className="title">
                    <Link href={`/post/${data.title}/${data.id}`}>
                        {data.title}
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
