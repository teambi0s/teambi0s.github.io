import Head from "next/head";
import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, title }) => (
    <React.Fragment>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/branding/favicon.png" />
        </Head>
        <div className="flex justify-center p-2">
            <div style={{ width: '1100px', maxWidth: '100%' }}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    </React.Fragment>
);

export default Layout;