import '../assets/css/plugins/plugins.css'
import '../assets/css/vendor/base.css'
import '../assets/css/vendor/slick-theme.css'
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/vendor/slick.css'
import '../assets/css/style.css';
import '../assets/css/App.css';
import '../styles/globals.css';
import 'react-activity/dist/react-activity.css';
import Header from '../components/Header/Header';
import Head from 'next/head'
import { AppContextProvider } from '../context/AppContext';
// import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return <div className='main-wrapper'>
    <AppContextProvider>
      {/* <NextSeo
      title="Simple Usage Example"
      description="A short description goes here."
    /> */}
      <Header />
      <Component {...pageProps} />

    </AppContextProvider>
  </div>
}

export default MyApp
