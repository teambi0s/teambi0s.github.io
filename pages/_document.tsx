import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, minimum-scale=1, shrink-to-fit=no, initial-scale=1"
                    />
                    <meta name="theme-color" content="#000" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta property="og:site_name" content="Team bi0s" />
                    <meta property="og:locale" content="en_US" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&display=swap"
                        rel="stylesheet"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }

}

export default MyDocument;