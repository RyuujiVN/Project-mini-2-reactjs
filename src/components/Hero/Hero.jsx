import { IoLocationOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { SiTripadvisor } from "react-icons/si";
import { RiApps2AddLine } from "react-icons/ri";
import { TbList } from "react-icons/tb";
import video from "../../assets/videos/Hotel.mp4";
import "./Hero.scss";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  const [price, setPrice] = useState(5000);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <section className="hero">
        <div className="overplay"></div>
        <video src={video} muted autoPlay loop></video>
        <div className="hero__inner container">
          <div className="hero__top">
            <h3 className="hero__title" data-aos="fade-down">Our Packages</h3>
            <h2 className="hero__subtitle" data-aos="fade-down">Search our Holiday</h2>
          </div>
          <div className="hero__search" data-aos="fade-up">
            <div className="grid">
              <div className="hero__input" id="destination">
                <label htmlFor="destination">Search for destination</label>
                <div className="input">
                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    placeholder="Enter your name here..."
                  />
                  <IoLocationOutline className="hero__icon" />
                </div>
              </div>

              <div className="hero__input" id="date">
                <label htmlFor="date">Select your date</label>
                <div className="input">
                  <input type="date" name="date" id="date" />
                </div>
              </div>

              <div className="hero__input" id="price">
                <div className="flex">
                  <label htmlFor="price">Max price:</label>
                  <span>{`$${price}`}</span>
                </div>
                <div className="input">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min="0"
                    max="10000"
                    step="50"
                    value={price}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <button className="btn hero__btn">
              <FaFilter />
              More filter
            </button>
          </div>
          <div className="hero__footer flex">
            <div className="hero__icon--left flex" data-aos="fade-up-right">
              <SlSocialFacebook className="icon" />
              <FaInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>

            <div className="hero__icon--right flex" data-aos="fade-up-left">
              <TbList className="icon" />
              <RiApps2AddLine className="icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
