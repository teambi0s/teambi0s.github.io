import React from "react";
import MemberCard from "./card";

const StudentMemberSection = ({ members, title }) => (
    <div className="my-3 border-b-2 border-dashed border-opacity-60">
        <h4 className="text-lg md:text-xl font-semibold mt-4 mb-2">{title}</h4>
        <div className="flex flex-wrap mx-0">
            {members.sort((a, b) => a.firstname > b.firstname ? 1 : -1 ).map((s) => (
                <MemberCard key={s?.username?.length > 0 ? s.username : s.firstname} {...s} />
            ))}
        </div>
    </div>
);

const MemberSection = ({ members, title, id, isStudent = false, isAlumni = false, team = 'ALL' }) =>
members?.length > 0 ? (
    <section id={id} className="py-8 px-3">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">{title}</h3>
        {isStudent ? (
            <React.Fragment>
                {members.filter((s) => s.year === 4).length > 0 && (
                    <StudentMemberSection members={members.filter((s) => s.year === 4)} title="Fourth Years" />
                )}
                {members.filter((s) => s.year === 3).length > 0 && (
                    <StudentMemberSection members={members.filter((s) => s.year === 3)} title="Third Years" />
                )}
                {members.filter((s) => s.year === 2).length > 0 && (
                    <StudentMemberSection members={members.filter((s) => s.year === 2)} title="Second Years" />
                )}
                {members.filter((s) => s.year === 1).length > 0 && (
                    <StudentMemberSection members={members.filter((s) => s.year === 1)} title="First Years" />
                )}
            </React.Fragment>
        ) :
        isAlumni ? (
            <React.Fragment>
                {members.filter((s) => s.batch === 2022).length > 0 && (
                    <StudentMemberSection members={members.filter((s) => s.batch === 2022)} title="2022 Batch" />
                )}
                {members.filter((s) => s.batch === 2021).length > 0 && (
                    <StudentMemberSection members={members.filter((s) => s.batch === 2021)} title="2021 Batch" />
                )}
                {members.filter((s) => s.batch === 2020).length > 0 && (
                    <StudentMemberSection members={members.filter((s) => s.batch === 2020)} title="2020 Batch" />
                )}
                {members.filter((s) => s.batch === 2019).length > 0 && (
                    <StudentMemberSection members={members.filter((s) => s.batch === 2019)} title="2019 Batch" />
                )}
                {members.filter((s) => s.batch === 2018).length > 0 && (
                    <StudentMemberSection members={members.filter((s) => s.batch === 2018)} title="2018 Batch" />
                )}
                {members.filter((s) => s.batch === 2017).length > 0 && (
                    <StudentMemberSection members={members.filter((s) => s.batch === 2017)} title="2017 Batch" />
                )}
                {members.filter((s) => s.batch === 2016).length > 0 && (
                    <StudentMemberSection members={members.filter((s) => s.batch === 2016)} title="2016 Batch" />
                )}
            </React.Fragment>
        ) : (
            <div className="flex flex-wrap mx-0">
                {members.sort((a, b) => a.firstname > b.firstname ? 1 : -1).map((s) => (
                    <MemberCard key={s.username} {...s} />
                ))}
            </div>
        )}
    </section>
) : <div />;

export default MemberSection;