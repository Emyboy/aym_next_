import Document, { Html, Head, Main, NextScript } from 'next/document'
import { resetServerContext } from "react-beautiful-dnd";
import { NextSeo } from 'next-seo'
import Global from '../Global'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        resetServerContext()
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="google-site-verification" content="SGNQl2x48lINsICO2MdEckM_n8fCnXFuH6ZyyGRg-YQ" />
                    <meta name="theme-color" content="#3858F6" />
                    <meta
                        name="description"
                        content="African Youth Minds"
                    />
                    <link rel="icon" href="/logo.png" />
                    <link rel="apple-touch-icon" href="/logo.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta property="og:title" content="African Youth Minds" />
                    <meta property="og:description" content="AYM is a Youth blog that show the world youths with incredible skills and minds" />
                    <meta property="og:image" content={Global.ICON_URL} />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>)
    }
}

export default MyDocument