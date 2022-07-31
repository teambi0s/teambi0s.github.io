import React, {useState} from "react";
import styled from "@emotion/styled";
import TableOfContentsAchievements from "./toc";
import Layout from "../layout";
import ACHIEVEMENTS from '../data/achievements';
import AchievementCard from "./card";

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
            <div className="flex flex-wrap mx-0">
                <div className="w-100 lg:w-1/4 xl:w-1/5 px-2">
                    <div className="sticky top-0" style={{ paddingTop: '7.5vh' }}>
                        <TableOfContentsAchievements type={type} setType={setType} />
                    </div>
                </div>
                <div className="w-100 lg:w-3/4 xl:w-4/5 px-2">
                    <div style={{ height: '7.5vh' }} />
                    {ACHIEVEMENTS.filter((s) => (
                        type == 'ALL' || s.type == type
                    )).map((s, index) => (
                        <div key={`si_${index}`}>
                            <AchievementCard {...s} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default AchievementsPage;