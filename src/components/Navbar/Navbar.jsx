import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import "./Navbar.scss";
import { useState } from "react";

function Navbar() {
  const [showNav, setshowNav] = useState(false);

  console.log(showNav);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <MdOutlineTravelExplore className="icon" />
              <h1>Travel.</h1>
            </div>

            <nav className={`nav ${showNav ? "show" : ""}`}>
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="">Home</a>
                </li>
                <li className="nav__item">
                  <a href="">Packages</a>
                </li>
                <li className="nav__item">
                  <a href="">Shop</a>
                </li>
                <li className="nav__item">
                  <a href="">About</a>
                </li>
                <li className="nav__item">
                  <a href="">Pages</a>
                </li>
                <li className="nav__item">
                  <a href="">News</a>
                </li>
                <li className="nav__item">
                  <a href="">Contact</a>
                </li>

                <button className="nav__item btn nav__item--btn">
                  <a href="">Book Now</a>
                </button>

                <IoIosCloseCircle
                  className="close"
                  onClick={() => setshowNav(!showNav)}
                />
              </ul>
            </nav>
            <FaListUl
              className="open"
              onClick={() => setshowNav(!showNav)}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
