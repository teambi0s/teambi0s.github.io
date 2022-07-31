import React from "react";
import styled from "@emotion/styled";

import Layout from "../layout";
import IntroductionSection from "./intro";
import Testimonials from "./testimonials";
import WhatWeDoSection from "./what-we-do";
import HowItFunctions from "./how-it-functions";

const HeaderSection = styled('section')`
  min-height: 35vmin;
  display: flex;
  align-items: center;
  padding: 5vh 1rem;
`;

const AboutPage = () => (
    <Layout title="About team bi0s - India's No.1 CTF Team & Cyber Security Research Club">
        <HeaderSection>
            <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                About bi0s
            </h1>
        </HeaderSection>
        <IntroductionSection />
        <HowItFunctions />
        <WhatWeDoSection />
        <Testimonials />
    </Layout>
);

export default AboutPage;