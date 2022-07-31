import React from "react";
import MemberCard from "./card";

const StudentMemberSection = ({ members, title }) => (
    <div className="my-3 border-b-2 border-dashed">
        <h4 className="text-xl font-semibold mt-4 mb-2">{title}</h4>
        <div className="flex flex-wrap mx-0">
            {members.map((s) => (
                <MemberCard key={s.username} {...s} />
            ))}
        </div>
    </div>
);

const MemberSection = ({ members, title, id, isStudent = false }) => (
    <section id={id} className="py-8">
        <h3 className="text-4xl font-bold mb-6">{title}</h3>
        {isStudent ? (
            <React.Fragment>
                <StudentMemberSection members={members.filter((s) => s.year === 4)} title="Fourth Years" />
                <StudentMemberSection members={members.filter((s) => s.year === 3)} title="Third Years" />
                <StudentMemberSection members={members.filter((s) => s.year === 2)} title="Second Years" />
                <StudentMemberSection members={members.filter((s) => s.year === 1)} title="First Years" />
            </React.Fragment>
        ) : (
            <div className="flex flex-wrap mx-0">
                {members.map((s) => (
                    <MemberCard key={s.username} {...s} />
                ))}
            </div>
        )}
    </section>
);

export default MemberSection;