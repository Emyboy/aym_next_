import React from 'react'
import EachPost from '../../components/EachPost/EachPost'
import SidePanel from '../../components/SidePanel/SidePanel'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineLink } from 'react-icons/ai'
import { RiUserFollowFill } from 'react-icons/ri'
import { FaPowerOff } from 'react-icons/fa'
import { MdModeEdit } from 'react-icons/md'
import Heading from '../../components/Heading/Heading'
import { withTheme } from '../../context/AppContext'
import Global from '../../Global'
import AppLoading from '../../components/AppLoading'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

const UserProfile = withTheme((props) => {

    console.log(props);
    const { data, recent } = props;

    if (!data) {
        return <AppLoading />
    } else
        return (
            <div>
                <Head>
                    <title>{`${data.first_name} ${data.last_name}`} - {`${data.title || ''}`} | African Youth Minds </title>
                    <meta property="og:title" content={`${data.first_name} ${data.last_name} | ${data.title}`} />
                    <meta property="og:description" content={data.bio} />
                    <meta property="og:image" content={data.avatar_url} />
                </Head>
                {/* <NextSeo
                    openGraph={{
                        title: `${data.first_name} ${data.last_name}`,
                        description: data.bio || '',
                        url: `https://africanyouthminds.com/user/${data.username}`,
                        type: 'profile',
                        profile: {
                            firstName: data.first_name,
                            lastName: data.last_name,
                            username: data.username,
                            gender: data.gender,
                        },
                        images: [
                            {
                                url: data.avatar_url,
                                width: 850,
                                height: 650,
                                alt: data.first_name + '\'s Profile Photo',
                            },
                        ],
                    }}
                /> */}
                <div className="axil-author-area axil-author-banner bg-color-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-author">
                                    <div className="media row">
                                        <div className='col-md-3'>
                                            <div className="thumbnail">
                                                <a href="#">
                                                    <img src={data.avatar_url} alt="Author Images" style={{ width: '100%' }} />
                                                </a>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="media-body">
                                                <div className="author-info">
                                                    <h1 className="title"><a href="#">{data.first_name + ' ' + data.last_name}</a></h1>
                                                    <span className="b3 subtitle">{data.title}</span>
                                                </div>
                                                <div className="content">
                                                    <p className="b1 description">{data.bio}</p>
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
                                                <MdModeEdit size={20} />{' '}
                                            Edit</button>
                                            <button className='btn p-3 mt-1 h5 text-white button-rounded btn-danger'>
                                                <FaPowerOff size={20} />{' '}
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
                            <Heading text='Authors Posts' />
                            <div className='col-lg-8 col-xl-8'>
                                {/* <EachPost />
                            <EachPost />
                            <EachPost />
                            <EachPost /> */}
                            </div>
                            <SidePanel data={recent} />
                        </div>
                    </div>
                </div>
            </div>
        )
});

UserProfile.getInitialProps = async (ctx) => {
    const id = ctx.query.id;
    console.log('CONTEXT ---', id)
    const posts = await fetch(Global.API_URL + '/posts')
    const allPosts = await posts.json()
    const res = await fetch(Global.API_URL + `/users/?username=${id}`)
    const json = await res.json()
    return { data: json[0], recent: allPosts }
}

export default UserProfile;
