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