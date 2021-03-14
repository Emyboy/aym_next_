import React, { useEffect } from 'react'
import firebase from "firebase/app";
import initFirebase from "../services/firebase";
import EachPost from '../components/EachPost/EachPost';
import SidePanel from '../components/SidePanel/SidePanel';
import Google from '../components/Google'

initFirebase();


export default function Index(props) {
  console.log(props)
  return (
    <div>
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