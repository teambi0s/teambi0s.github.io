import React from "react";
import styled from "@emotion/styled";
import Layout from "../layout";

import TableOfContents from "./toc";
import MemberSection from "./section";

import STUDENTS from '../data/students';
import ADVISORS from '../data/advisors';
import ALUMNI from '../data/alumni';
import STAFF from '../data/staff';

const HeaderSection = styled.section`
  display: flex;
  align-items: center;
  min-height: 35vmin;      
  padding: 7.5vh 0 0 0;      
  h1 {
    font-size: calc(2rem + 3.5vw);
    font-weight: bold;
  }
`;

const TeamPage = () => (
    <Layout title="Team Members | team bi0s - India's No.1 Ranked CTF Team & Cyber Security Research Club">
        <div className="px-3">
                <HeaderSection>
                        <h1>Our Team</h1>
                </HeaderSection>
                <TableOfContents />
        </div>
        <MemberSection
            id="advisors"
            title="Advisors"
            members={ADVISORS}
        />
        <MemberSection
            id="staff"
            title="Staff Mentors"
            members={STAFF}
        />
        <MemberSection
            id="students"
            title="Student Members"
            members={STUDENTS}
            isStudent
        />
        <MemberSection
            id="alumni"
            title="Alumni"
            members={ALUMNI}
            isAlumni
        />
    </Layout>
);

export default TeamPage;