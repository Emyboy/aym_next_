import React from 'react'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineLink } from 'react-icons/ai'

export default function EachPost() {
    return (
        <div className="content-block post-list-view axil-control mt--30">
            <div className="post-thumbnail">
                <Link href='/post/9493488434/4'>
                    <a href="post-details.html">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6KQQQtnCi09Ja_Ic4sQ-dVkhH7dn3odFBQ&usqp=CAU" alt="Post Images" />
                    </a>
                </Link>
            </div>
            <div className="post-content bg-color-white">
                <div className="post-cat">
                    <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                            <span className="hover-flip-item">
                                <span data-text="FOOD">FOOD</span>
                            </span>
                        </a>
                    </div>
                </div>
                <h4 className="title">
                    <Link href='/post/9493488434/4'>
                        <a href="post-details.html">Security isn’t just a technology problem
                                        it’s about design, too </a>
                    </Link>
                </h4>
                <div className="post-meta-wrapper">
                    <div className="post-meta">
                        <div className="content">
                            <h6 className="post-author-name">
                                <a className="hover-flip-item-wrapper" href="author.html">
                                    <span className="hover-flip-item">
                                        <span data-text="Jane Ara">Jane Ara</span>
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
