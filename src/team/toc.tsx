import React from "react";

const TableOfContents = ({ type = 'ALL', setType }) => (
<div className="p-3">
    <ul className="my-3">
        <li className="mb-2">
            {type ==='ALL' && <span>{'> '}</span>}
            <button onClick={() => setType('ALL')}>All Members</button>
        </li>
        <li className="mb-2">
            {type ==='ADVISORS' && <span>{'> '}</span>}
            <button onClick={() => setType('ADVISORS')}>Team Advisors</button>
        </li>
        <li className="mb-2">
            {type ==='STAFF' && <span>{'> '}</span>}
            <button onClick={() => setType('STAFF')}>Staff Mentors</button>
        </li>
        <li className="mb-2">
            {type ==='STUDENTS' && <span>{'> '}</span>}
            <button onClick={() => setType('STUDENTS')}>Student Members</button>
        </li>
        <li className="mb-2">
            {type ==='ALUMNI' && <span>{'> '}</span>}
            <button onClick={() => setType('ALUMNI')}>Alumni</button>
        </li>
    </ul>
</div>
);

export default TableOfContents;
