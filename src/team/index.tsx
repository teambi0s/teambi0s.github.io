import React, {useState} from "react";
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
  padding: 1rem 0.35rem;
`;

const TeamPage = () => {

    const [selection, setSelection] = useState('ALL');

    return (
        <Layout title="Team Members | team bi0s - India's No.1 Ranked CTF Team & Cyber Security Research Club">
            <div className="px-3">
                <HeaderSection>
                    <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Our Team</h1>
                </HeaderSection>
            </div>
            <div className="flex flex-wrap mx-0">
                <div className="w-100 lg:w-1/4 xl:w-1/5 px-2">
                    <div className="sticky top-0" style={{ paddingTop: '7vh' }}>
                        <TableOfContents setType={setSelection} type={selection} />
                    </div>
                </div>
                <div className="w-100 lg:w-3/4 xl:w-4/5 px-2">
                    {(selection === 'ALL' || selection === 'ADVISORS') && (
                        <MemberSection
                            id="advisors"
                            title="Advisors"
                            members={ADVISORS}
                        />
                    )}
                    {(selection === 'ALL' || selection === 'STAFF') && (
                        <MemberSection
                            id="staff"
                            title="Staff Mentors"
                            members={STAFF}
                        />
                    )}
                    {(selection === 'ALL' || selection === 'STUDENTS') && (
                        <MemberSection
                            id="students"
                            title="Student Members"
                            members={STUDENTS}
                            isStudent
                        />
                    )}
                    {(selection === 'ALL' || selection === 'ALUMNI') && (
                        <MemberSection
                            id="alumni"
                            title="Alumni"
                            members={ALUMNI}
                            isAlumni
                        />
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default TeamPage;