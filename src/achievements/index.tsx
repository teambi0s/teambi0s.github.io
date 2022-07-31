import React, {useState} from "react";
import styled from "@emotion/styled";
import TableOfContentsAchievements from "./toc";
import Layout from "../layout";

const HeaderSection = styled('section')`
  min-height: 35vmin;
  display: flex;
  align-items: center;
  padding: 5vh 1rem;
`;

const AchievementsPage = () => {

    const [type, setType] = useState('ALL');

    return (
        <Layout title="Achievements | team bi0s - India's No.1 Ranked CTF Team">
            <HeaderSection>
                <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                    Achievements
                </h1>
            </HeaderSection>
            <TableOfContentsAchievements type={type} setType={setType} />
        </Layout>
    );
}

export default AchievementsPage;