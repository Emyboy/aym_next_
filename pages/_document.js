import Document, { Html, Head, Main, NextScript } from 'next/document'
import { resetServerContext } from "react-beautiful-dnd";
import { NextSeo } from 'next-seo'

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
                    <meta name="theme-color" content="#3858F6" />
                    <meta
                        name="description"
                        content="African Youth Minds"
                    />
                    <link rel="icon" href="/logo.png" />
                    <link rel="apple-touch-icon" href="/logo.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta property="og:title" content="African Youth Minds" />
                    <meta property="og:description" content="African Youth Minds" />
                    <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
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