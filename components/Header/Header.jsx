import React, { useState } from 'react'
import Link from 'next/link'
import { MdHome, MdModeEdit, MdMenu } from "react-icons/md";
import firebase from "firebase/app";
import "firebase/auth";

import initFirebase from "../../services/firebase";
import Global from '../../Global';
import axios from 'axios';
import { withTheme } from '../../context/AppContext';
import { RiUserFill } from 'react-icons/ri'


initFirebase();

const provider = new firebase.auth.GoogleAuthProvider();

export default withTheme((props) => {
    const { context } = props;
    const [userData, setUserData] = useState(null)

    const loginUser = (user) => {
        axios(Global.API_URL + '/auth/local', {
            method: 'POST',
            data: {
                identifier: user ? user[0].email: userData[0].email,
                password: user ? user[0].uid : userData[0].uid,
            }
        })
            .then(res => {
                console.log('LOGIN --', res)
                localStorage.setItem('auth', JSON.stringify(res.data))
                context.setContextState({
                    auth: res.data
                })
            })
            .catch(err => {
                console.log('LOGIN --', err)
            })
    }

    const handleAuthentication = async () => {

        try {
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user.providerData;
            console.log('USER ----', user);
            setUserData(user);
            axios(Global.API_URL + "/auth/local/register", {
                method: 'POST',
                data: {
                    username: user[0].uid,
                    email: user[0].email,
                    password: user[0].uid,
                    first_name: user[0].displayName.split(' ')[0],
                    last_name: user[0].displayName.split(' ')[1],
                    avatar_url: user[0].photoURL,
                    phone_number: user[0].phoneNumber
                }
            })
                .then(res => {
                    console.log('STATUS ---', res.status)
                    console.log(res);
                    context.setContextState({
                        auth: res.data
                    })
                    localStorage.setItem('auth', JSON.stringify(res.data))
                })
                .catch(err => {
                    const error = { ...err }
                    console.log('STATUS --', error.status)
                    loginUser(user)
                })
        } catch (error) {
            alert('Error registering', error)
        }

    };
    return (
        <header className="header axil-header  header-light header-sticky fixed-top"
        // style={{ position: 'fixed' }}
        >
            <div className="header-wrap">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
                        <div className="logo">
                            <Link href='/'>
                                <a href="#">
                                    {/* <img className="dark-logo" src="assets/images/logo/logo-black.png" alt="Blogar logo" />
                                <img className="light-logo" src="assets/images/logo/logo-white2.png" alt="Blogar logo" /> */}
                                    {/* <h2>AYM.</h2> */}
                                    <span className='h2' style={{
                                        border: "gray 1px solid",
                                        padding: "10px"
                                    }}>AYM.</span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-6 d-none d-xl-block">
                        <div className="mainmenu-wrapper">
                            <nav className="mainmenu-nav">
                                <ul className="mainmenu">
                                    <li className="menu-item-has-children"><Link href='/'><a href="#">Home</a></Link>
                                    </li>

                                    <li className="menu-item-has-children"><a href="#">Posts</a>
                                        <ul className="axil-submenu">
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="post-format-standard.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Post Format Standard">Post Format Standard</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="post-format-video.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Post Format Video">Post Format Video</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="post-format-gallery.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Post Format Gallery">Post Format Gallery</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="post-format-text.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Post Format Text Only">Post Format Text Only</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="post-layout-1.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Post Layout One">Post Layout One</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="post-layout-2.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Post Layout Two">Post Layout Two</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="post-layout-3.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Post Layout Three">Post Layout Three</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="post-layout-4.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Post Layout Four">Post Layout Four</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="post-layout-5.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Post Layout Five">Post Layout Five</span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="menu-item-has-children megamenu-wrapper"><a href="#">Mega Menu</a>
                                        <ul className="megamenu-sub-menu">
                                            <li className="megamenu-item">

                                                <div className="axil-vertical-nav">
                                                    <ul className="vertical-nav-menu">
                                                        <li className="vertical-nav-item active">
                                                            <a className="hover-flip-item-wrapper" href="#tab1">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="Accessibility">Accessibility</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="vertical-nav-item">
                                                            <a className="hover-flip-item-wrapper" href="#tab2">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="Android Dev">Android Dev</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="vertical-nav-item">
                                                            <a className="hover-flip-item-wrapper" href="#tab3">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="Blockchain">Blockchain</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="vertical-nav-item">
                                                            <a className="hover-flip-item-wrapper" href="#tab4">
                                                                <span className="hover-flip-item">
                                                                    <span data-text="Gadgets">Gadgets</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="axil-vertical-nav-content">
                                                    <div className="axil-vertical-inner tab-content" id="tab1" style={{ display: "block" }}>
                                                        <div className="axil-vertical-single">
                                                            <div className="row">

                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-01.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">India may require online shops to hand</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-02.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="CREATIVE">CREATIVE</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">Lightweight, grippable, and ready to go.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-03.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="TRAVEL">TRAVEL</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">Bold new experience. Same Mac magic.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="GADGETS">GADGETS</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="axil-vertical-inner tab-content" id="tab2">
                                                        <div className="axil-vertical-single">
                                                            <div className="row">

                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">India may require online shops to hand</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-03.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">Lightweight, grippable, and ready to go.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-02.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">Bold new experience. Same Mac magic.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="axil-vertical-inner tab-content" id="tab3">
                                                        <div className="axil-vertical-single">
                                                            <div className="row">

                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-03.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">Bold new experience. Same Mac magic.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-02.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">Lightweight, grippable, and ready to go.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">India may require online shops to hand</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="axil-vertical-inner tab-content" id="tab4">
                                                        <div className="axil-vertical-single">
                                                            <div className="row">

                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-01.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">India may require online shops to hand</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">Lightweight, grippable, and ready to go.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-03.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">Bold new experience. Same Mac magic.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-3">
                                                                    <div className="content-block image-rounded">
                                                                        <div className="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img className="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="post-content">
                                                                            <div className="post-cat">
                                                                                <div className="post-cat-list">
                                                                                    <a className="hover-flip-item-wrapper" href="#">
                                                                                        <span className="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 className="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="menu-item-has-children"><a href="#">Pages</a>
                                        <ul className="axil-submenu">
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="post-list.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Post List">Post List</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="archive.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Post Archive">Post Archive</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="author.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Author Page">Author Page</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="about.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="About Page">About Page</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="contact.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Contact Us">Contact Us</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="404.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="404 Page">404 Page</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="maintenance.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Maintenance">Maintenance</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="hover-flip-item-wrapper" href="privacy-policy.html">
                                                    <span className="hover-flip-item">
                                                        <span data-text="Privacy Policy">Privacy Policy</span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><a href="home-lifestyle-blog.html">Lifestyle</a></li>
                                    <li><a href="home-tech-blog.html">Gadgets</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-8 col-md-8 col-sm-9 col-12">
                        <div className="header-search text-right d-flex align-items-center">
                            {/* <form className="header-search-form">
                                <div className="axil-search form-group">
                                    <button type="submit" className="search-button"><i className="fal fa-search"></i></button>
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                            </form> */}
                            <ul className="metabar-block">
                                <li className="icon">
                                    <Link href='/'>
                                        <a href="#"><MdHome size={20} /></a>
                                    </Link>
                                </li>

                                <li className="icon"><Link href='/create'>
                                    <a href="#"><MdModeEdit size={20} /></a>
                                </Link></li>
                                {
                                    context.auth ?
                                        <li className='icon'>
                                            <Link href={`/user/${context.auth.user.username}`}>
                                                {
                                                    <a href="#"><img src={context.auth.user.avatar_url} alt="Author Images" /></a>
                                                }
                                            </Link>
                                        </li> :
                                        <li onClick={handleAuthentication} className='icon'>
                                            <Link href='/user/849348984'>
                                                <a href='#c'><RiUserFill size={20} /></a>
                                            </Link>
                                        </li>
                                }
                            </ul>
                            <div className="hamburger-menu d-block d-xl-none">
                                <div className="hamburger-inner">
                                    <div className="icon"><MdMenu size={20} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
});
