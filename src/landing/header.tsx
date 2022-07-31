import React from "react";
import styled from "@emotion/styled";

const HeaderSection = styled.header`
    min-height: 75vh;
    display: flex;
    align-items: center;
    h1 {
      font-size: calc(1.35rem + 1.5vw);
      font-weight: 900;
    }
    p {
      width: 600px;
      max-width: 100%;
    }
`;

const LandingHeader = () => (
    <HeaderSection>
        <div>
            <h1 className="mb-6">
                India&apos;s No.1 Ranked CTF Team &
                <div className="inline-block">Cyber Security Research Club</div>
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