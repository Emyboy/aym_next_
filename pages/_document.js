import Document, { Html, Head, Main, NextScript } from 'next/document'
import { resetServerContext } from "react-beautiful-dnd";

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