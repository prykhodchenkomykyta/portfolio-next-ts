"use client";
import Image from "next/image";
import "./MobileNav.css";
import Link from "next/link";

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
            width={0}
            height={0}
            alt="Logo Image"
            src="/assets/oximets-logo-transparent.png"
            className="logo"
          />

          <ul>
            <li>
              <Link href="#home" className="menu-item">
                Головна
              </Link>
            </li>
            <li>
              <Link href="#skills" className="menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#reviews" className="menu-item">
                Відгуки
              </Link>
            </li>
            <li>
              <Link href="#contact-me" className="menu-item">
                Зв'язатися зі мною
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
