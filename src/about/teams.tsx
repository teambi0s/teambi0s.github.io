import React from "react";

const TEAMS = [
    {
        name: 'bi0s CTF',
        description: `
            The bi0s CTF team participates in various global CTFs throughout the year, and organizes various 
            CTFs including the InCTFs. It has members specializing in Web Security, Reverse Engineering, Binary Exploitation, 
            Cryptography, Forensics, Android etc.
        `,
    },
    {
        name: 'bi0s Hardware',
        description: `
            The bi0s Hardware specializes in hardware cyber security. Members of this team have expertise in
            Embedded Systems, Firmware Analysis, Wireless Security, Automotive Security, ICS/SCADA Security,
            Side Channel Analysis etc.
        `,
    },
    {
        name: 'bi0s Pentest',
        description: `
            The bi0s Pentest team actively research on how to detect and exploit flaws in various networks, cloud appliances 
            and web-based  systems. With the main focus on penetration testing and boot2root type CTFs, we actively 
            participate in bug-bounty programs for a real-time bug-hunting experience.
        `
    },
    {
        name: 'bi0s Tools',
        description: `
            The bi0s Tools team engages itself in the development of wide-variety of cyber-security tools. 
        `
    }
]

const Teams = () => (
    <section id="teams" className="py-8">
        <h2 className="font-semibold text-xl md:text-2xl mb-4 lg:text-3xl xl:text-4xl">
            Our Teams
        </h2>
        <p className="mb-3">
           We have specialized teams focusing on various areas in cyber-security -
        </p>
        <div className="flex flex-wrap mx-0 my-4">
            {TEAMS.map((t) => (
                <div className="w-full md:w-1/2 px-2 py-4" key={t.name}>
                    <div className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                        {t.name}
                    </div>
                    <p className="opacity-90 text-sm">{t.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Teams;