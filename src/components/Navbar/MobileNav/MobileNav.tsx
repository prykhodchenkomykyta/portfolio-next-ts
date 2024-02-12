"use client";
import Image from "next/image";
import "./MobileNav.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

interface MobileNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <Image
            width={500}
            height={500}
            alt="Logo Image"
            src="/assets/oximets-logo-transparent.png"
            className="logo"
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
            <li>
              <ScrollLink
                to="contact-me"
                className="menu-item"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Зв'язатися зі мною
              </ScrollLink>
            </li>
            <ScrollLink
              to="get-consult"
              className="contact-btn"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              Отримати консультацію
            </ScrollLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
