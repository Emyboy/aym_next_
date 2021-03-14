import React from 'react'
import { MdHome, MdModeEdit } from "react-icons/md";

export default function Header() {
    return (
        <header class="header axil-header  header-light header-sticky ">
            <div class="header-wrap">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
                        <div class="logo">
                            <a href="index.html">
                                <img class="dark-logo" src="assets/images/logo/logo-black.png" alt="Blogar logo" />
                                <img class="light-logo" src="assets/images/logo/logo-white2.png" alt="Blogar logo" />
                            </a>
                        </div>
                    </div>

                    <div class="col-xl-6 d-none d-xl-block">
                        <div class="mainmenu-wrapper">
                            <nav class="mainmenu-nav">
                                <ul class="mainmenu">
                                    <li class="menu-item-has-children"><a href="#">Home</a>
                                        <ul class="axil-submenu">
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="index.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Home Default">Home Default</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="home-creative-blog.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Home Creative Blog">Home Creative Blog</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="home-seo-blog.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Home SEO Blog">Home SEO Blog</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="home-tech-blog.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Home Tech Blog">Home Tech Blog</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="home-lifestyle-blog.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Home Lifestyle Blog">Home Lifestyle Blog</span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="menu-item-has-children"><a href="#">Posts</a>
                                        <ul class="axil-submenu">
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="post-format-standard.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Post Format Standard">Post Format Standard</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="post-format-video.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Post Format Video">Post Format Video</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="post-format-gallery.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Post Format Gallery">Post Format Gallery</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="post-format-text.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Post Format Text Only">Post Format Text Only</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="post-layout-1.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Post Layout One">Post Layout One</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="post-layout-2.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Post Layout Two">Post Layout Two</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="post-layout-3.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Post Layout Three">Post Layout Three</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="post-layout-4.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Post Layout Four">Post Layout Four</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="post-layout-5.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Post Layout Five">Post Layout Five</span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="menu-item-has-children megamenu-wrapper"><a href="#">Mega Menu</a>
                                        <ul class="megamenu-sub-menu">
                                            <li class="megamenu-item">

                                                <div class="axil-vertical-nav">
                                                    <ul class="vertical-nav-menu">
                                                        <li class="vertical-nav-item active">
                                                            <a class="hover-flip-item-wrapper" href="#tab1">
                                                                <span class="hover-flip-item">
                                                                    <span data-text="Accessibility">Accessibility</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li class="vertical-nav-item">
                                                            <a class="hover-flip-item-wrapper" href="#tab2">
                                                                <span class="hover-flip-item">
                                                                    <span data-text="Android Dev">Android Dev</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li class="vertical-nav-item">
                                                            <a class="hover-flip-item-wrapper" href="#tab3">
                                                                <span class="hover-flip-item">
                                                                    <span data-text="Blockchain">Blockchain</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li class="vertical-nav-item">
                                                            <a class="hover-flip-item-wrapper" href="#tab4">
                                                                <span class="hover-flip-item">
                                                                    <span data-text="Gadgets">Gadgets</span>
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="axil-vertical-nav-content">
                                                    <div class="axil-vertical-inner tab-content" id="tab1" style={{ display: "block" }}>
                                                        <div class="axil-vertical-single">
                                                            <div class="row">

                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-01.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">India may require online shops to hand</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-02.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="CREATIVE">CREATIVE</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">Lightweight, grippable, and ready to go.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-03.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="TRAVEL">TRAVEL</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">Bold new experience. Same Mac magic.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="GADGETS">GADGETS</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="axil-vertical-inner tab-content" id="tab2">
                                                        <div class="axil-vertical-single">
                                                            <div class="row">

                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">India may require online shops to hand</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-03.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">Lightweight, grippable, and ready to go.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-02.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">Bold new experience. Same Mac magic.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="axil-vertical-inner tab-content" id="tab3">
                                                        <div class="axil-vertical-single">
                                                            <div class="row">

                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-03.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">Bold new experience. Same Mac magic.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-02.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">Lightweight, grippable, and ready to go.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">India may require online shops to hand</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="axil-vertical-inner tab-content" id="tab4">
                                                        <div class="axil-vertical-single">
                                                            <div class="row">

                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-01.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">India may require online shops to hand</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">Lightweight, grippable, and ready to go.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-03.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">Bold new experience. Same Mac magic.</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-3">
                                                                    <div class="content-block image-rounded">
                                                                        <div class="post-thumbnail mb--20">
                                                                            <a href="post-details.html">
                                                                                <img class="w-100" src="assets/images/others/mega-post-04.jpg" alt="Post Images" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            <div class="post-cat">
                                                                                <div class="post-cat-list">
                                                                                    <a class="hover-flip-item-wrapper" href="#">
                                                                                        <span class="hover-flip-item">
                                                                                            <span data-text="DESIGN">DESIGN</span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <h5 class="title"><a href="post-details.html">Creative Game With The New DJI Mavic Air</a></h5>
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

                                    <li class="menu-item-has-children"><a href="#">Pages</a>
                                        <ul class="axil-submenu">
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="post-list.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Post List">Post List</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="archive.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Post Archive">Post Archive</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="author.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Author Page">Author Page</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="about.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="About Page">About Page</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="contact.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Contact Us">Contact Us</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="404.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="404 Page">404 Page</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="maintenance.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Maintenance">Maintenance</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="hover-flip-item-wrapper" href="privacy-policy.html">
                                                    <span class="hover-flip-item">
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

                    <div class="col-xl-3 col-lg-8 col-md-8 col-sm-9 col-12">
                        <div class="header-search text-right d-flex align-items-center">
                            <form class="header-search-form">
                                <div class="axil-search form-group">
                                    <button type="submit" class="search-button"><i class="fal fa-search"></i></button>
                                    <input type="text" class="form-control" placeholder="Search" />
                                </div>
                            </form>
                            <ul class="metabar-block">
                                <li class="icon"><a href="#"><MdHome size={20} /></a></li>
                                
                                <li class="icon"><a href="#"><MdModeEdit size={20} /></a></li>
                                <li><a href="#"><img src="https://hubstaff-talent.s3.amazonaws.com/avatars/2216852fe9157a7d1c79667d906cf661.jpg" alt="Author Images" /></a></li>
                            </ul>
                            <div class="hamburger-menu d-block d-xl-none">
                                <div class="hamburger-inner">
                                    <div class="icon"><i class="fal fa-bars"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
