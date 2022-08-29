const students = [
    {
        "username": "Abhishek",
        "firstname": "Abhishek",
        "lastname": "M Bharadwaj",
        "category": "Cryptography",
        "team": "CTF",
        "year": 4,
        "email": "medicherlaabhishekbharadwajmvp@gmail.com"
    },
    {
        "username": "AmunRha",
        "firstname": "Adhithya",
        "lastname": "Suresh Kumar",
        "category": "Reverse Engineering",
        "team": "CTF",
        "year": 3,
        "twitter": "amun_rha",
        "github": "AmunRha",
        "email": "adhithyasureshk@gmail.com"
    },
    {
        "username": "Alfin",
        "firstname": "Alfin",
        "lastname": "Joseph",
        "category": "Web Exploitation",
        "team": "CTF",
        "year": 2,
        "twitter": "Alfinjoseph19",
        "email": "josealfin542@gmail.com"
    },
    {
        "username": "DarkKnight",
        "firstname": "Anand",
        "lastname": "Balaji",
        "category": "Binary Exploitation",
        "team": "CTF",
        "year": 4,
        "email": "anandabalaji@gmail.com"
    },
    {
        "username": "ma1f0y",
        "firstname": "Aneesh",
        "lastname": "Nadh R",
        "category": "Web Exploitation",
        "team": "CTF",
        "year": 3,
        "email": "aneeshabhi246@gmail.com"
    },
    {
        "username": "Av4nth1ka",
        "firstname": "Avanthika",
        "lastname": "Anand",
        "category": "Web Exploitation",
        "team": "CTF",
        "year": 2,
        "twitter": "AvanthikaAnand1",
        "linkedin": "Avanthika Anand",
        "github": "Avanthikaanand",
        "email": "avanthikaanand1@gmail.com"
    },
    {
        "username": "Barla Abhishek",
        "firstname": "Barla",
        "lastname": "Abhishek",
        "category": "Reverse Engineering",
        "team": "CTF",
        "year": 4,
        "email": "barlaabhi07@gmail.com"
    },
    {
        "username": "morb1u5",
        "firstname": "Gokul",
        "lastname": "Panicker",
        "category": "Binary Exploitation",
        "team": "CTF",
        "year": 2,
        "twitter": "GokulPramod3",
        "github": "m0rb1u5-46",
        "email": "panicker.gokul@gmail.com"
    },
    {
        "username": "fug1t1ve",
        "firstname": "Gourav",
        "lastname": "Singh Bajeli",
        "category": "Reversing",
        "team": "CTF",
        "year": 4,
        "email": "gbajeli36@gmail.com"
    },
    {
        "username": "Pwn_Solo",
        "firstname": "Hrishikesh",
        "lastname": "Pankaj",
        "category": "Binary Exploitation",
        "team": "CTF",
        "year": 4,
        "email": "hrishikeshpankaj12@gmail.com"
    },
    {
        "username": "Claire de lune",
        "firstname": "Indulekha",
        "lastname": "P Menon",
        "category": "Binary Exploitation",
        "team": "CTF",
        "year": 2,
        "github": "clairede-lune",
        "email": "indulekhapm24@gmail.com"
    },
    {
        "username": "V!CT!M",
        "firstname": "Manohar",
        "lastname": "Reddy Pagilla",
        "category": "Cryptography",
        "team": "CTF",
        "year": 3
    },
    {
        "username": "LS",
        "firstname": "Mohith",
        "lastname": "L S",
        "category": "Cryptography",
        "team": "CTF",
        "year": 2,
        "email": "mohithls1@gmail.com"
    },
    {
        "username": "bl4ck_Widw",
        "firstname": "Namitha",
        "lastname": "S",
        "category": "Reversing",
        "team": "CTF",
        "year": 4,
        "email": "namitha1701@gmail.com"
    },
    {
        "username": "nandita sangeeth",
        "firstname": "Nandita",
        "lastname": "Sangeeth",
        "category": "Forensics",
        "team": "CTF",
        "year": 2,
        "email": "nandita.sangeeth@gmail.com"
    },
    {
        "username": "Z_Pacifist",
        "firstname": "Nandu",
        "lastname": "S Pillai",
        "category": "Web Exploitation",
        "team": "CTF",
        "year": 2,
        "twitter": "ZePacifist",
        "linkedin": "nandu-s-pillai",
        "github": "Ze-Pacifist",
        "email": "nspmail12@gmail.com"
    },
    {
        "username": "Azr43lKn1ght",
        "firstname": "Nithin",
        "lastname": "Chenthur P",
        "category": "Forensics",
        "team": "CTF",
        "year": 2,
        "email": "nithinchenthur@gmail.com"
    },
    {
        "username": "Pavani",
        "firstname": "Poluru",
        "lastname": "Pavani",
        "category": "Cryptography",
        "team": "CTF",
        "year": 4,
        "email": "pavanipoluru.21.01@gmail.com"
    },
    {
        "username": "Ad0lphus",
        "firstname": "Prabith",
        "lastname": "GS",
        "category": "Reverse Engineering",
        "team": "CTF",
        "year": 3,
        "twitter": "Ad0lphu5",
        "linkedin": "prabithgs",
        "github": "Ad0lphus",
        "email": "prabith7.g.s@gmail.com"
    },
    {
        "username": "d3liri0us",
        "firstname": "Pranav",
        "lastname": "Nair",
        "category": "Forensics",
        "team": "CTF",
        "year": 4,
        "twitter": "d3liri0us_",
        "email": "pnepranav.na1r@gmail.com"
    },
    {
        "username": "Sk4d00sh",
        "firstname": "Rahul",
        "lastname": "Sunder",
        "category": "Web Exploitation",
        "year": 3,
        "team": "CTF",
        "twitter": "rahulsundar8",
        "github": "Skad0sh",
        "email": "rkillzboom@gmail.com"
    },
    {
        "username": "revathi",
        "firstname": "Revathi",
        "lastname": "Chundi",
        "category": "Reverse Engineering",
        "team": "CTF",
        "year": 4,
        "email": "chundirevathi@am.students.amrita.edu"
    },
    {
        "username": "rohit",
        "firstname": "Rohit",
        "lastname": "Narayanan M",
        "category": "Web Exploitation",
        "team": "CTF",
        "year": 3,
        "twitter": "RohitNarayana11",
        "email": "rohitnanu.m@gmail.com"
    },
    {
        "username": "Sabhya",
        "firstname": "Sabhya",
        "lastname": "Raj Mehta",
        "category": "Forensics",
        "team": "CTF",
        "year": 2,
        "email": "sabhrajmeh05@gmail.com"
    },
    {
        "username": "spektre",
        "firstname": "Sanjay",
        "lastname": "Vardhan",
        "category": "Binary Exploitation",
        "team": "CTF",
        "year": 2,
        "email": "sanjayvardhanpadala@gmail.com"
    },
    {
        "username": "1nt3rc3pt0r",
        "firstname": "Sayooj",
        "lastname": "B Kumar",
        "category": "Web Exploitation",
        "team": "CTF",
        "year": 4,
        "twitter": "_1nt3rc3pt0r_",
        "email": "sayoojbkumar@gmail.com"
    },
    {
        "username": "k1n0r4",
        "firstname": "Sejal",
        "lastname": "Vinay Koshta",
        "category": "Reverse Engineering",
        "team": "CTF",
        "year": 2,
        "twitter": "k1n0r4",
        "linkedin": "sejal-koshta-",
        "github": "k1n0r4",
        "email": "sejal.koshta2003@gmail.com"
    },
    {
        "username": "shravya",
        "firstname": "Shravya",
        "lastname": "Bhaskara",
        "category": "Binary Exploitation",
        "team": "CTF",
        "year": 4,
        "email": "shrabhas@gmail.com"
    },
    {
        "username": "retr0ds",
        "firstname": "Sidharth",
        "lastname": "V",
        "category": "Reverse Engineering",
        "team": "CTF",
        "year": 2,
        "email": "sidharth0x56@gmail.com"
    },
    {
        "username": "imm0rt4l_5t4rk",
        "firstname": "Simran",
        "lastname": "Kathpalia",
        "category": "Reversing",
        "team": "CTF",
        "year": 4,
        "twitter": "simrankathpalia",
        "github": "simran-kathpalia",
        "email": "skathpalia3@gmail.com"
    },
    {
        "username": "v1Ru5",
        "firstname": "Sridevi",
        "lastname": "K",
        "category": "Forensics",
        "team": "CTF",
        "year": 4,
        "twitter": "sridevikrishn16",
        "linkedin": "sridevi-krishnan",
        "github": "ksridevi2908",
        "email": "ksridevi1501@gmail.com"
    },
    {
        "username": "k1R4",
        "firstname": "Srijith",
        "lastname": "S",
        "category": "Binary Exploitation",
        "team": "CTF",
        "year": 2,
        "twitter": "__k1r4",
        "github": "k1R4",
        "email": "ssrijiith@gmail.com"
    },
    {
        "username": "L0xmii",
        "firstname": "Srilakshmi",
        "lastname": "Prathapan",
        "category": "Web Exploitation",
        "team": "CTF",
        "year": 2,
        "twitter": "L0xm1_07",
        "linkedin": "srilakshmi-prathapan-",
        "github": "L0xm1",
        "email": "lakshmiprathapan007@gmail.com"
    },
    {
        "username": "The_Str1d3r",
        "firstname": "Vishvesh",
        "lastname": "S Rao",
        "category": "Cryptography",
        "team": "CTF",
        "year": 4,
        "twitter": "the_str1d3r",
        "github": "Vishvesh-rao",
        "email": "vishveshsrao@gmail.com"
    },
    {
        "username": "yadhu",
        "firstname": "Yadhu",
        "lastname": "Krishna M",
        "category": "Web Exploitation",
        "team": "CTF",
        "year": 4,
        "twitter": "YadhuKrishna_",
        "linkedin": "yadhukrishnam",
        "github": "yadhukrishnam",
        "email": "yadhukrishna.mpm@gmail.com"
    },
    {
        "username": "A7HUL",
        "firstname": "Athul",
        "lastname": "Menon",
        "category": "Hardware Security",
        "team": "Hardware",
        "year": 4,
        "twitter": "athulmenon_",
        "linkedin": "athulmenon17",
        "github": "athul-menon",
        "email": "athulmenon17@gmail.com"
    },
    {
        "username": "IndyGod",
        "firstname": "Indraraj",
        "lastname": "Biswas",
        "category": "Hardware Security",
        "team": "Hardware",
        "year": 4,
        "email": "saket.biswas@gmail.com"
    },
    {
        "username": "whrs_makey",
        "firstname": "Kiran",
        "lastname": "S Pillai",
        "category": "Hardware Security",
        "team": "Hardware",
        "year": 3,
        "twitter": "ks_pillai02",
        "linkedin": "kiranspillai02",
        "github": "kirkiosk",
        "email": "kiransp2002@gmai.com"
    },
    {
        "username": "Chainfire73",
        "firstname": "Sreesankar",
        "lastname": "S",
        "category": "Hardware Security",
        "team": "Hardware",
        "year": 3,
        "twitter": "SreeSankr",
        "linkedin": "ssreesankar",
        "github": "Chainfire73",
        "email": "chainfire73@gmail.com"
    },
    {
        "username": "narikodanhridul",
        "firstname": "Nariokdan",
        "lastname": "Hridul",
        "category": "Hardware Security",
        "team": "Hardware",
        "year": 3,
        "twitter": "narikodanhridul",
        "linkedin": "narikodanhridul",
        "github": "narikodanhridul",
        "email": "narikodanhridul@gmail.com"
    },
    {
        "username": "V!p3r",
        "firstname": "Ranit",
        "lastname": "Pradhan",
        "category": "Hardware Security",
        "team": "Hardware",
        "year": 4,
        "twitter": "pradhan_ranit",
        "linkedin": "ranit-pradhan",
        "github": "RanitPradhan",
        "email": "pradhanranit0019@gmail.com"
    },
    {
        "username": "MiHawk",
        "firstname": "C P",
        "lastname": "Ghanshyam",
        "category": "Hardware Security",
        "team": "Hardware",
        "year": 3,
        "twitter": "GhanShyam917",
        "github": "shyam917",
        "email": "shyamku917@gmail.com"
    },
    {
        "username": "KⒶꓘ",
        "firstname": "Archit",
        "lastname": "Kak",
        "category": "Hardware Security",
        "team": "Hardware",
        "year": 3,
        "twitter": "",
        "linkedin": "",
        "github": "",
        "email": "4rch1tk4k@gmail.com"
    }
]

export default students;
