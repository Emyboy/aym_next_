import React, { useEffect } from 'react'
import firebase from "firebase/app";
import initFirebase from "../services/firebase";
import EachPost from '../components/EachPost/EachPost';
import SidePanel from '../components/SidePanel/SidePanel';
import Google from '../components/Google'
import { NextSeo} from 'next-seo'

initFirebase();


export default function Index(props) {
  return (
    <div>
      <NextSeo
        title="African Youth Minds"
        description="African Youth Minds"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'African Youth Minds',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/project-managemnt-a12b8.appspot.com/o/aym%2FAYM.png?alt=media&token=c0400067-a403-408d-a942-7c8e1b49a8e0',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/project-managemnt-a12b8.appspot.com/o/aym%2FAYM.png?alt=media&token=c0400067-a403-408d-a942-7c8e1b49a8e0',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://firebasestorage.googleapis.com/v0/b/project-managemnt-a12b8.appspot.com/o/aym%2FAYM.png?alt=media&token=c0400067-a403-408d-a942-7c8e1b49a8e0' },
            { url: 'https://firebasestorage.googleapis.com/v0/b/project-managemnt-a12b8.appspot.com/o/aym%2FAYM.png?alt=media&token=c0400067-a403-408d-a942-7c8e1b49a8e0' },
          ],
          site_name: 'AfricanYouthMinds',
        }}
      // twitter={{
      //     handle: '@handle',
      //     site: '@site',
      //     cardType: 'summary_large_image',
      // }}
      />
      <Google />
      <div className='axil-post-list-area post-listview-visible-color axil-section-gap is-active'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-xl-8'>

              <EachPost />
              <EachPost />
              <EachPost />
              <EachPost />
              <EachPost />

            </div>
            <SidePanel />
          </div>
        </div>
      </div>

    </div>
  )
}

// Index.getInitialProps = async (ctx) => {
//   const data = [];
//   const posts = await firebase.firestore().collection('posts').get()
//   return { posts }
// }