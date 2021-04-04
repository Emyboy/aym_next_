import React, { useState } from 'react'
import initFirebase from "../services/firebase";
import EachPost from '../components/EachPost/EachPost';
import SidePanel from '../components/SidePanel/SidePanel';
import { withTheme } from '../context/AppContext';
import Head from 'next/head'
import Global from '../Global';

initFirebase();


const HomePage = withTheme((props=> {
  // console.log('INDEX PROPS --',props);
  const { data } = props;
  return (
    <div>
      <Head>
        <title>African Youth Minds</title>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content={Global.THEME_COLOR} />
        <meta name="description" content="AYM is a Youth blog that show the world youths with incredible skills and minds" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <meta property="og:title" content="African Youth Minds" />
        <meta property="og:description" content="AYM is a Youth blog that show the world youths with incredible skills and minds" />
        <meta property="og:image" content={Global.ICON_URL} />
      </Head>
      {/* <Google /> */}
      <div className='axil-post-list-area post-listview-visible-color axil-section-gap is-active'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-xl-8'>

             {data.map((val, i) => {
               return <EachPost key={i} data={val} />
             })}

            </div>
            <SidePanel data={data} />
          </div>
        </div>
      </div>

    </div>
  )
}))



HomePage.getInitialProps = async (ctx) => {
  const res = await fetch(Global.API_URL + '/posts')
  const data = await res.json()

  console.log('INEXT DATA ---', data.statusCode)

  return { data: res.status === 200 ? data : [] }
}

export default HomePage;