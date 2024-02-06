"use client";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";

const Navbar: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <MobileNav isOpen={isOpenMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <Image
            width={1500}
            height={212}
            className="logo"
            src="/assets/oximets-logo-transparent.png"
            alt="Logo Image"
          />
          <ul>
            <li>
              <Link href="#home" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="#skills" className="menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#work-experience" className="menu-item">
                Work Experience
              </Link>
            </li>
            <li>
              <Link href="#contact-me" className="menu-item">
                Contact Me
              </Link>
            </li>
            <button className="contact-btn">Hire Me</button>
          </ul>
          <button type="button" className="menu-btn" onClick={toggleMenu}>
            {isOpenMenu ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
          </button>

          {/*onClick={() => {}} */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
