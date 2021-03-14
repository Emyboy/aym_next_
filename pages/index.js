import React, { useEffect } from 'react'
import firebase from "firebase/app";
import initFirebase from "../services/firebase";

initFirebase();


export default function Index(props) {
  console.log(props)
  return (
    <div>

    </div>
  )
}

// Index.getInitialProps = async (ctx) => {
//   const data = [];
//   const posts = await firebase.firestore().collection('posts').get()
//   return { posts }
// }