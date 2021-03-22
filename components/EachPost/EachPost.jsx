import React from 'react'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineLink } from 'react-icons/ai'

export default function EachPost({
    data
}) {
    // console.log('EACH POST --', data)
    return (
        <div className="content-block post-list-view axil-control mt--30">
            {
                data.image_url ? <div className="post-thumbnail">
                    <Link href={`/post/${data.title}/${data.id}`}>
                        <a href="#details">
                            <img src={data.image_url} alt="Post Images" />
                        </a>
                    </Link>
                </div> : null
            }
            <div className="post-content bg-color-white">
                <div className="post-cat">
                    <div className="post-cat-list">
                        {
                            data.category ?
                                <a className="hover-flip-item-wrapper" href="#">
                                    <span className="hover-flip-item">
                                        <span data-text="FOOD">{data.category.name.toUpperCase()}</span>
                                    </span>
                                </a> : null
                        }
                    </div>
                </div>
                <h4 className="title">
                    <Link href={`/post/${data.title}/${data.id}`}>
                        <a href="#details">{data.title} </a>
                    </Link>
                </h4>
                <div className="post-meta-wrapper">
                    <div className="post-meta">
                        <div className="content">
                            <h6 className="post-author-name">
                                <a className="hover-flip-item-wrapper" href="author.html">
                                    <span className="hover-flip-item">
                                        <span data-text={`${data.users_permissions_user.first_name}' ' ${data.users_permissions_user.last_name}`}>{data.users_permissions_user.first_name} {data.users_permissions_user.last_name} </span>
                                    </span>
                                </a>
                            </h6>
                            <ul className="post-meta-list">
                                <li>Feb 17, 2019</li>
                                <li>3 min read</li>
                            </ul>
                        </div>
                    </div>
                    <ul className="social-share-transparent justify-content-end">
                        <li><a href="#"><FaFacebook size={20} /></a></li>
                        <li><a href="#"><AiFillInstagram size={20} /></a></li>
                        <li><a href="#"><AiFillTwitterCircle size={20} /></a></li>
                        <li><a href="#"><AiOutlineLink size={20} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
