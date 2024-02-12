"use client";
import Image from "next/image";
import "./Navbar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const goToLink = (targetElement: any) => {
    scroll.scrollTo(targetElement, {
      duration: 500,
      offset: -70,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <>
      <MobileNav isOpen={isOpenMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <Image
            width={500}
            height={500}
            className="logo"
            src="/assets/oximets-logo-transparent.png"
            alt="Logo Image"
          />
          <ul>
            <li>
              <ScrollLink
                to="home"
                className="menu-item"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Головна
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                className="menu-item"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Мої навички
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="my-advantages"
                className="menu-item"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Чому варто працювати зі мною?
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="reviews"
                className="menu-item"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Відгуки
              </ScrollLink>
            </li>
            <ScrollLink
              to="contact-me"
              className="contact-btn"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              Зв&apos;язатися зі мною
            </ScrollLink>
          </ul>
          <button type="button" className="menu-btn" onClick={toggleMenu}>
            {isOpenMenu ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
