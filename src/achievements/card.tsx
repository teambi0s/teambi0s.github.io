import React from "react";

const AchievementCard = ({ text, infoText = null, date = null, links = [] }) => (
    <div className="py-5 border-b-2">
        <div className="flex items-center mb-3">
            <div className="w-100 md:w-2/3">
                <div>{infoText}</div>
            </div>
            <div className="w-100 md:w-1/3 flex justify-end text-sm font-semibold mr-4">
                {date}
            </div>
        </div>
        <div className="my-1">{text}</div>
        {links?.length > 0 && (
            <div className="md:flex items-center text-sm">
                {links.map((s, index) => (
                    <a href={s.href} className="mr-2" key={`link_${index}`}>
                        {s.text} {'>'}
                    </a>
                ))}
            </div>
        )}
    </div>
);

export default AchievementCard;