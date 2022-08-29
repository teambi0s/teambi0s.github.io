import React from "react";
import styled from "@emotion/styled";

const StyledInput = styled.input`
    width: 100%;
    padding: 0.5rem 0.35rem;
    background: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.text};
    &:focus {
      outline: none;
      border-bottom-color: red;
    }
`;

const TableOfContents = ({ type = 'ALL', setType, team, setTeam = (_t) => {}, keyword, setKeyword = (_k) => {} }) => (
<div className="mt-8 p-3">
    <div className="mb-8">
        <StyledInput
            placeholder="Search here"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
        />
    </div>
    <div className="mb-8">
        <ul>
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
    <div className="mt-8 mb-6">
        <div className="font-semibold mb-2">
            By Team
        </div>
        <ul>
            <li className="mb-2">
                {team ==='ALL' && <span>{'> '}</span>}
                <button onClick={() => setTeam('ALL')}>All Teams</button>
            </li>
            <li className="mb-2">
                {team ==='CTF' && <span>{'> '}</span>}
                <button onClick={() => setTeam('CTF')}>CTF</button>
            </li>
            <li className="mb-2">
                {team ==='Hardware' && <span>{'> '}</span>}
                <button onClick={() => setTeam('Hardware')}>Hardware</button>
            </li>
            <li className="mb-2">
                {team === 'Pentest' && <span>{'> '}</span>}
                <button onClick={() => setTeam('Pentest')}>Pentest</button>
            </li>
        </ul>
    </div>
</div>
);

export default TableOfContents;
