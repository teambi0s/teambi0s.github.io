import React from "react";
import styled from "@emotion/styled";

const HeaderSection = styled.header`
    min-height: 75vh;
    display: flex;
    align-items: center;
    padding: 1rem;
    h1 {
      line-height: 1.35;
    }
    p {
      width: 600px;
      max-width: 100%;
    }
`;

const LandingHeader = () => (
    <HeaderSection>
        <div style={{ maxWidth: '100%' }}>
            <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl mb-6">
                India&apos;s No.1 Ranked CTF Team & {' '}
                <div className="inline md:inline-block">Cyber Security Research Club</div>
            </h1>
            <p>
                We are a team of college students from Amrita university, passionate about cyber security, and dedicated to
                protect tommorow&apos;s cyberspace. At our student-run club, our mentors train freshers in cyber-security through
                CTFs. We organize infosec events, trainings, and work on a wide variety of cyber-security research projects.
            </p>
        </div>
    </HeaderSection>
);

export default LandingHeader;