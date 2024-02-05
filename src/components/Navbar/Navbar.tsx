import Image from "next/image";
import Link from "next/link";
import "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <Image
            width={100}
            height={100}
            className="logo"
            src="logo.svg"
            alt="Logo Image"
          ></Image>
          <ul>
            <li>
              <Link href="" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link href="" className="menu-item">
                Work Experience
              </Link>
            </li>
            <li>
              <Link href="" className="menu-item">
                Contact Me
              </Link>
            </li>
          </ul>
          <button className="contact-btn" onClick={() => {}}>
            Hire Me
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
