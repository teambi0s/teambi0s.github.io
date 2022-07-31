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
  padding: 5vh 1rem;      
  h1 {
    font-size: calc(2rem + 2.5vw);
    font-weight: bold;
  }
`;

const TeamPage = () => (
    <Layout title="Team Members | team bi0s - India's No.1 Ranked CTF Team & Cyber Security Research Club">
        <HeaderSection>
            <h1>Our Team</h1>
        </HeaderSection>
        <TableOfContents />
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