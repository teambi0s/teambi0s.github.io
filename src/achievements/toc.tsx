import React from "react";

const TableOfContentsAchievements = ({ type = 'ALL', setType }) => (
<div className="p-3">
    <ul className="my-3">
        <li className="mb-2">
            {type ==='ALL' && <span>{'> '}</span>}
            <button onClick={() => setType('ALL')}>All Members</button>
        </li>
        <li className="mb-2">
            {type ==='CTF' && <span>{'> '}</span>}
            <button onClick={() => setType('CTF')}>CTF Results</button>
        </li>
        <li className="mb-2">
            {type ==='CVE' && <span>{'> '}</span>}
            <button onClick={() => setType('CVE')}>CVEs</button>
        </li>
        <li className="mb-2">
            {type ==='GSOC' && <span>{'> '}</span>}
            <button onClick={() => setType('GSOC')}>GSoC</button>
        </li>
        <li className="mb-2">
            {type ==='TALKS' && <span>{'> '}</span>}
            <button onClick={() => setType('TALKS')}>Talks & Trainings</button>
        </li>
        <li className="mb-2">
            {type ==='MISC' && <span>{'> '}</span>}
            <button onClick={() => setType('MISC')}>Misc.</button>
        </li>
    </ul>
</div>
);

export default TableOfContentsAchievements;
