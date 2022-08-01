import React, {useState} from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";

const HeaderBar = styled.header`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: 0.25s background ease-in-out;
  position: sticky;
  width: 100%;
  left: 0;
  padding: 1rem;
  top: 0;
  z-index: 5000;
`;

const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  font-weight: 600;
  li {
    margin-right: 2vw;
    padding: 0.25rem 0.5rem;
    border-radius: 7px;
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
  li:last-of-type {
    margin-right: 0;
  }
`;
type MobileMenuContainer = {
    isOpen?: boolean
};

const MobileMenuContainer = styled.ul<MobileMenuContainer>`
  list-style: none;
  font-weight: 600;
  height: ${({ isOpen }) => isOpen ? `${4 * MENU_ITEMS.length}rem` : 0};
  transition: 0.5s height ease;
  overflow: hidden;
  li {
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
  li:last-of-type {
    border-bottom: none;
  }
`;

const MENU_ITEMS = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    // {
    //     label: "Projects",
    //     href: "/projects"
    // },
    {
        label: "Team",
        href: "/team"
    },
    {
        label: "Achievements",
        href: "/achievements"
    },
    {
        label: "Blog",
        href: "https://blog.bi0s.in"
    }
]

const MenuItem = ({ href, label }) => (
  <li>
      <Link href={href} passHref>
        <a className="text-lg">{label}</a>
      </Link>
  </li>
);

const Header = ({ isDarkTheme, setDarkTheme = (_b) => {} }) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <React.Fragment>
            <HeaderBar>
                <div className="flex justify-center">
                    <div style={{ width: '1100px', maxWidth: '100%' }}>
                        <div className="flex flex-wrap mx-0">
                            <div className="w-1/2 lg:w-1/4 flex items-center px-2">
                                <Link passHref href="/">
                                    <a>
                                        <Image alt="Team bi0s" src="/branding/dark-logo.png" width={106} height={37} />
                                    </a>
                                </Link>
                            </div>
                            <div className="w-1/2 lg:w-3/4 flex items-center justify-end px-2">
                                <div className="hidden flex items-center md:block">
                                    <MenuContainer>
                                        {MENU_ITEMS.map((i) => (
                                            <MenuItem key={i.href} {...i} />
                                        ))}
                                        <button className="ml-4 flex items-center text-sm" onClick={() => setDarkTheme(!isDarkTheme)}>
                                            <Image
                                                alt="Switch Theme"
                                                src={isDarkTheme ? "/icons/sun.svg" : "/icons/moon.svg"}
                                                width={30}
                                                height={30}
                                            />
                                        </button>
                                    </MenuContainer>
                                </div>
                                <div className="flex items-center md:hidden">
                                    <button className="mr-3 flex items-center text-sm" onClick={() => setDarkTheme(!isDarkTheme)}>
                                        <Image
                                            alt="Switch Theme"
                                            src={isDarkTheme ? "/icons/sun.svg" : "/icons/moon.svg"}
                                            width={30}
                                            height={30}
                                        />
                                    </button>
                                    <button className="flex items-center" onClick={() => setOpen(!isOpen)}>
                                        <Image alt="menu" src="/icons/bars.svg" width={25} height={25} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <MobileMenuContainer isOpen={isOpen} className={isOpen && "py-3"}>
                            {MENU_ITEMS.map((i) => (
                                <MenuItem key={i.href} {...i} />
                            ))}
                        </MobileMenuContainer>
                    </div>
                </div>
            </HeaderBar>
        </React.Fragment>
    );
}

export default Header;