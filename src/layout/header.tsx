import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";

const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  font-weight: 600;
  li {
    margin-right: 2vw;
  }
  li:last-of-type {
    margin-right: 0;
  }
`;

const MENU_ITEMS = [
    {
        label: "Home",
        href: "/"
    },
    // {
    //     label: "About",
    //     href: "/about"
    // },
    // {
    //     label: "Projects",
    //     href: "/projects"
    // },
    {
        label: "Team",
        href: "/team"
    },
    {
        label: "Blog",
        href: "https://blog.bi0s.in"
    },
    // {
    //     label: "Updates",
    //     href: "/updates"
    // }
]

const MenuItem = ({ href, label }) => (
  <li>
      <Link href={href} passHref>
        <a>{label}</a>
      </Link>
  </li>
);

const Header = () => (
    <header className="py-6">
        <div className="flex flex-wrap mx-0">
            <div className="w-1/2 lg:w-1/4 flex items-center px-2">
                <Image src="/branding/dark-logo.png" width={106} height={37} />
            </div>
            <div className="w-1/2 lg:w-3/4 flex justify-end px-2">
                <MenuContainer>
                    {MENU_ITEMS.map((i) => (
                        <MenuItem key={i.href} {...i} />
                    ))}
                </MenuContainer>
            </div>
        </div>
    </header>
);

export default Header;