import Head from "next/head";
import React from "react";
import { ScrollerMotion } from 'scroller-motion';

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, title }) => (
    <React.Fragment>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/branding/favicon.png" />
        </Head>
        <Header />
        <ScrollerMotion>
            <div className="flex justify-center">
                <div style={{ width: '1100px', maxWidth: '100%' }}>
                    <div style={{ height: '7vh' }} />
                    <main className="p-2">
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </ScrollerMotion>
    </React.Fragment>
);

export default Layout;