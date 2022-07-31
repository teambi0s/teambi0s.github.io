const Achievements = [
    {
        type: 'CVE',
        infoText: 'CVE-2021-23718, CVE-2021-23448',
        text: <>
            <b>Sayooj B Kumar</b> discovered a prototype pollution bug inside the <b>config-handler</b>, which is a Node
            package and at <b>ssrf-agent</b>. Both were awarded a CVE (Common Vulnerabilities and Exposures) for the
            discoveries.
        </>,
        date: 'November 22, 2021',
        links: [
            {
                text: 'View CVE-2021-23718 Report',
                href: 'https://cve.report/CVE-2021-23718'
            },
            {
                text: 'View CVE-2021-23448 Report',
                href: 'https://www.cve.org/CVERecord?id=CVE-2021-23448'
            }
        ]
    },
    {
        type: 'CTF',
        infoText: '#13 @ Volga 21 World Finals',
        text: <>
            bi0s qualified and were invited for the <b>Volga 2021 world finals at Russia</b>. Volga is a high-profile,
            international jeopardy-styled CTF conducted by a group of IT enthusiasts based in Samara, Russia. Our members {' '}
            <b>Jaswanth Bommidi</b>, <b>Pranjal Singh</b> and <b>Sourag K</b> flew to Russia and participated in the
            contest, and emerged <b>13th worldwide</b>.
        </>,
        date: 'September 16, 2021',
        links: [
            {
                text: 'View Final Scoreboard',
                href: 'https://ctftime.org/event/1335'
            }
        ]
    },
    {
        type: 'CVE',
        infoText: 'CVE-2021-23404',
        text: <>
            <b>Yadhu Krishna M</b> discovered a <b>high severity</b> bug in <b>SQLite-Web</b>, where the dashboard area
            allows sensitive actions to be performed without validating that the request originated from the application.
        </>,
        date: 'September 08, 2021',
        links: [
            {
                text: 'View CVE Report',
                href: 'https://www.cve.org/CVERecord?id=CVE-2021-23404'
            }
        ]
    },
    {
        type: 'GSoC',
        text: <>
            <b>Simran Kathpalia</b> got selected for Google Summer of Code 2021 with <b>FreeBSD</b>,
            and worked on a project with a goal to &apos;enhance syzkaller support for FreeBSD&apos;.
        </>,
        date: 'May 2021',
        links: [
            {
                text: 'View GSoC Profile',
                href: 'https://summerofcode.withgoogle.com/archive/2021/projects/4855908315693056'
            }
        ]
    },
    {
        type: 'GSoC',
        text: <>
            <b>Ashwin C</b> got selected for Google Summer of Code 2021 with <b>Rizin</b>,
            and worked on a project titled - &apos;Support for CPU and Platform Profiles&apos;.
        </>,
        date: 'May 2021',
        links: [
            {
                text: 'View GSoC Profile',
                href: 'https://summerofcode.withgoogle.com/archive/2021/projects/6125873907892224'
            }
        ]
    },
    {
        type: 'GSoC',
        text: <>
            <b>Vishnu Madhav</b> got selected for Google Summer of Code 2021 with <b>GNU GCC</b>,
            and worked on a project to &apos;Make Cp-demangler non recursive&apos;.
        </>,
        date: 'May 2021'
    },
    {
        type: 'GSoC',
        text: <>
            <b>Pranjal Singh</b> got selected for Google Summer of Code 2021 with <b>The Honeynet Project</b>,
            for the Xen project.
        </>,
        date: 'May 2021'
    },
    {
        type: 'CVE',
        text: <>
            <b>Yaswant</b> (@az3z3l) found a <b>high severity</b> vulnerability at <b>GitLab</b> where an attacker could
            <i>bypass the existing CSRF check on the GraphQL endpoint</i>, and bounty of 3370 USD was awarded.
        </>,
        date: 'March 10, 2021',
        links: [
            {
                text: 'View HackerOne Report',
                href: 'https://hackerone.com/reports/1122408'
            }
        ]
    },
];

export default Achievements;