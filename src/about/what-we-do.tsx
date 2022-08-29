import React from "react";
import styled from "@emotion/styled";

const WhatWeDoContainer = styled.section`
    padding: 3.5vh 0;
    ol {
      list-style: decimal;
      margin-left: 2.5rem;
      li {
        margin-bottom: 0.5rem;
        font-size: 110%;
      }
    }
`;

const WhatWeDoSection = () => (
    <WhatWeDoContainer id="what-we-do">
        <h2 className="font-semibold text-xl md:text-2xl mb-4 lg:text-3xl xl:text-4xl">
            What do we do?
        </h2>
        <p className="mb-3">
            Here are some of the things our members do:
        </p>
        <ol>
            <li>Learning & Researching on various Cyber Security fields</li>
            <li>Participating & organizing CTFs across the world</li>
            <li>Organizing workshops & training programmes</li>
            <li>Contributing to open-source security tools</li>
            <li>Designing and testing hardware security modules</li>
            <li>Collaborating in international cyber-security research projects</li>
            <li>Penetration testing, bug-bounty hunting & submitting CVEs</li>
            <li>Providing Cyber Security Consultancy Services</li>
        </ol>
    </WhatWeDoContainer>
);

export default WhatWeDoSection;