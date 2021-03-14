import '../assets/css/plugins/plugins.css'
import '../assets/css/vendor/base.css'
import '../assets/css/vendor/slick-theme.css'
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/vendor/slick.css'
import '../assets/css/style.css';
import '../assets/css/App.css';
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }) {
  return <div className='main-wrapper'>
    <Header />
    <Component {...pageProps} />
  </div>
}

export default MyApp
