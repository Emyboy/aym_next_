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