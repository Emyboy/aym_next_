import React, { useState } from 'react'
import firebase from "firebase/app";
import initFirebase from "../services/firebase";
import EachPost from '../components/EachPost/EachPost';
import SidePanel from '../components/SidePanel/SidePanel';
import Google from '../components/Google'
import { NextSeo} from 'next-seo'
import { withTheme } from '../context/AppContext';
import Head from 'next/head'
import Global from '../Global';
import axios from 'axios';

initFirebase();


export default withTheme(props=> {
  // console.log('INDEX PROPS --',props);
  const { data } = props;
  return (
    <div>
      <Head>
        <title>African Youth Minds</title>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content={Global.THEME_COLOR} />
        <meta name="description" content="AYM IS A Youth blog THAT SHOW THE WORLD YOUTHS WITH INCREDIBLE SKILLS" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <meta property="og:title" content="African Youth Minds" />
        <meta property="og:description" content="AYM IS A Youth blog THAT SHOW THE WORLD YOUTHS WITH INCREDIBLE SKILLS" />
        <meta property="og:image" content={Global.ICON_URL} />
      </Head>
      {/* <Google /> */}
      <div className='axil-post-list-area post-listview-visible-color axil-section-gap is-active'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-xl-8'>

             {/* {data.map((val, i) => {
               return <EachPost key={i} data={val} />
             })} */}

            </div>
            <SidePanel />
          </div>
        </div>
      </div>

    </div>
  )
});

export async function getStaticProps(context) {
  const res = await fetch(Global.API_URL+'/posts')
  const data = await res.json()

  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: { data }, // will be passed to the page component as props
  }
}