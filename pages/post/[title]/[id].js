import React, { useEffect, useState } from 'react'
import SidePanel from '../../../components/SidePanel/SidePanel'
import { useRouter } from 'next/router'
import Global from '../../../Global'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import { BlogJsonLd, NextSeo } from 'next-seo';


const parse = require('html-react-parser')


const DetailsPage = (props) => {
    console.log('details -', props)
    const { data } = props;
    useEffect(() => {
        document.getElementById('body').innerHTML += data.body
    }, [])
    return <div className='post-single-wrapper axil-section-gap '>
        {/* <Head>
            <title>African Youth Minds - {data.title}</title>
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:image" content={data.image_url} />
        </Head> */}
        <NextSeo
            openGraph={{
                title: `African Youth Minds - ${data.title}`,
                description: data.description,
                url: `https://africanyouthminds.com/post/${data.title}/${data.id}`,
                type: 'article',
                article: {
                    publishedTime: data.published_at,
                    modifiedTime: data.updated_at,
                    // expirationTime: '2022-12-21T22:04:11Z',
                    section: data.category.name,
                    authors: [
                        `https://africanyouthminds.com/user/${data.users_permissions_user.id}`,
                    ],
                    tags: data.categories.map(val => val.name),
                },
                images: [
                    {
                        url: data.image_url,
                        width: 850,
                        height: 650,
                        alt: 'Photo of ' + data.title,
                    },
                ],
            }}
        />
        <BlogJsonLd
            url={`https://africanyouthminds.com/post/${data.title}/${data.id}`}
            title={data.title}
            images={[
                data.image_url,
            ]}
            datePublished={data.published_at}
            dateModified={data.updated_at}
            authorName={`${data.users_permissions_user.first_name} ${data.users_permissions_user.last_name}`}
            description={data.description}
        />
        <div className='container'>
            <div className='row'>

                <div className="col-lg-8 bg-color-white">
                    <div className="axil-post-details">
                        <h1 className="has-medium-font-size h3">{data.title}</h1>
                        <img src={data.image_url} width='100%' height='60%' />

                        <div id='body'></div>

                        <hr />
                        <div className="tagcloud">
                            <a href="#">Design</a>
                            <a href="#">Life Style</a>
                            <a href="#">Web Design</a>
                            <a href="#">Development</a>
                            <a href="#">Design</a>
                            <a href="#">Life Style</a>
                        </div>

                        <div className="social-share-block">
                            <div className="post-like">
                                <a href="#"><i className="fal fa-thumbs-up"></i><span>2.2k Like</span></a>
                            </div>
                            <ul className="social-icon icon-rounded-transparent md-size">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>

                        {
                            data.users_permissions_user ?
                                <div className="about-author">
                                    <div className="media">
                                        <div className="thumbnail">
                                            <Link href={`/user/${data.users_permissions_user.username}`}>
                                                <a href="#">
                                                    <img src={data.users_permissions_user.avatar_url} alt={data.users_permissions_user.first_name + "'s Images"} />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <div className="author-info">
                                                <h5 className="title">
                                                    <Link href={`/user/${data.users_permissions_user.username}`}>
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text={`${data.users_permissions_user.first_name} ${data.users_permissions_user.last_name}`}>{data.users_permissions_user.first_name + ' ' + data.users_permissions_user.last_name}</span>
                                                            </span>
                                                        </a>
                                                    </Link>
                                                </h5>
                                                <span className="b3 subtitle">{data.users_permissions_user.title}</span>
                                            </div>
                                            <div className="content">
                                                <p className="b1 description">{data.users_permissions_user.bio}</p>
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
                                : null
                        }

                        <div className="axil-comment-area">
                            <div className="axil-total-comment-post">
                                <div className="title">
                                    <h4 className="mb--0">30+ Comments</h4>
                                </div>
                                <div className="add-comment-button cerchio" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                                    <a className="axil-button button-rounded" href="post-details.html" tabindex="0"><span>Add Your Comment</span></a>
                                </div>
                            </div>

                            <div className="comment-respond">
                                <h4 className="title">Post a comment</h4>
                                <form action="#">
                                    <p className="comment-notes"><span id="email-notes">Your email address will not be
                                                published.</span> Required fields are marked <span className="required">*</span></p>
                                    <div className="row row--10">
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group">
                                                <label>Your Name</label>
                                                <input id="name" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group">
                                                <label>Your Email</label>
                                                <input id="email" type="email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group">
                                                <label>Your Website</label>
                                                <input id="website" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Leave a Reply</label>
                                                <textarea name="message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <p className="comment-form-cookies-consent">
                                                <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" />
                                                <label for="wp-comment-cookies-consent">Save my name, email, and
                                                        website in this browser for the next time I comment.</label>
                                            </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-submit cerchio" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                                                <input name="submit" type="submit" id="submit" className="axil-button button-rounded" value="Post Comment" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="axil-comment-area">
                                <h4 className="title">2 comments</h4>
                                <ul className="comment-list">
                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="single-comment">
                                                <div className="comment-img">
                                                    <img src="assets/images/post-images/author/author-b2.png" alt="Author Images" />
                                                </div>
                                                <div className="comment-inner">
                                                    <h6 className="commenter">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="Cameron Williamson">Cameron Williamson</span>
                                                            </span>
                                                        </a>
                                                    </h6>
                                                    <div className="comment-meta">
                                                        <div className="time-spent">Nov 23, 2018 at 12:23 pm</div>
                                                        <div className="reply-edit">
                                                            <div className="reply">
                                                                <a className="comment-reply-link hover-flip-item-wrapper" href="#">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Reply">Reply</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment-text">
                                                        <p className="b2">Duis hendrerit velit scelerisque felis tempus, id porta
                                                        libero venenatis. Nulla facilisi. Phasellus viverra
                                                        magna commodo dui lacinia tempus. Donec malesuada nunc
                                                        non dui posuere, fringilla vestibulum urna mollis.
                                                                Integer condimentum ac sapien quis maximus. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="children">
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="single-comment">
                                                        <div className="comment-img">
                                                            <img src="assets/images/post-images/author/author-b3.png" alt="Author Images" />
                                                        </div>
                                                        <div className="comment-inner">
                                                            <h6 className="commenter">
                                                                <a className="hover-flip-item-wrapper" href="#">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Rahabi Khan">Rahabi Khan</span>
                                                                    </span>
                                                                </a>
                                                            </h6>
                                                            <div className="comment-meta">
                                                                <div className="time-spent">Nov 23, 2018 at 12:23 pm
                                                                    </div>
                                                                <div className="reply-edit">
                                                                    <div className="reply">
                                                                        <a className="comment-reply-link hover-flip-item-wrapper" href="#">
                                                                            <span className="hover-flip-item">
                                                                                <span data-text="Reply">Reply</span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="comment-text">
                                                                <p className="b2">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse lobortis cursus lacinia. Vestibulum vitae leo id diam pellentesque ornare.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="single-comment">
                                                <div className="comment-img">
                                                    <img src="assets/images/post-images/author/author-b2.png" alt="Author Images" />
                                                </div>
                                                <div className="comment-inner">
                                                    <h6 className="commenter">
                                                        <a className="hover-flip-item-wrapper" href="#">
                                                            <span className="hover-flip-item">
                                                                <span data-text="Rahabi Khan">Rahabi Khan</span>
                                                            </span>
                                                        </a>
                                                    </h6>
                                                    <div className="comment-meta">
                                                        <div className="time-spent">Nov 23, 2018 at 12:23 pm</div>
                                                        <div className="reply-edit">
                                                            <div className="reply">
                                                                <a className="comment-reply-link hover-flip-item-wrapper" href="#">
                                                                    <span className="hover-flip-item">
                                                                        <span data-text="Reply">Reply</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment-text">
                                                        <p className="b2">Duis hendrerit velit scelerisque felis tempus, id porta
                                                        libero venenatis. Nulla facilisi. Phasellus viverra
                                                        magna commodo dui lacinia tempus. Donec malesuada nunc
                                                        non dui posuere, fringilla vestibulum urna mollis.
                                                                Integer condimentum ac sapien quis maximus. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>


                    </div>
                </div>

                <SidePanel />
            </div>
        </div>
    </div>
}

DetailsPage.getInitialProps = async (ctx) => {
    const id = ctx.query.id;
    const title = ctx.query.title;
    console.log('CONTEXT ---', id, title)
    const res = await fetch(Global.API_URL + `/posts/${id}`)
    const json = await res.json()
    return { data: json }
}

export default DetailsPage;