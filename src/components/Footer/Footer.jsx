import video from "../../assets/videos/Sea.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import { IoChevronForward } from "react-icons/io5";
import "./Footer.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <footer className="footer">
        <video src={video} loop autoPlay muted type="video/mp4"></video>

        <div className="container">
          <div className="footer__inner">
            <div className="footer__top">
              <div className="footer__contact flex">
                <div className="text" data-aos="fade-down-right">
                  <h3>Keep in touch</h3>
                  <h2>Travel with us</h2>
                </div>

                <div className="footer__input flex" data-aos="fade-down-left">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email here..."
                    className="input"
                  />
                  <button className="btn footer__btn" type="submit">
                    Send
                    <FiSend />
                  </button>
                </div>
              </div>
            </div>

            <div className="footer__bottom grid">
              <div className="col col-1" data-aos="fade-right">
                <div className="footer__logo flex">
                  <MdOutlineTravelExplore className="icon" />
                  <h2>Travel</h2>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  earum eveniet doloribus? Voluptatum quis perspiciatis
                  assumenda libero doloremque quia minima autem laborum
                  veritatis? Iure aspernatur voluptas minus quibusdam aliquam
                  ea.
                </p>
                <div className="footer__social flex">
                  <FaTwitter className="icon" />
                  <FaYoutube className="icon" />
                  <FaInstagram className="icon" />
                  <SiTripadvisor className="icon" />
                </div>
              </div>

              <div className="col col-2" data-aos="fade-left">
                <div className="footer__title">
                  <span> Our agency</span>
                </div>

                <ul className="footer__list flex">
                  <li className="flex">
                    <IoChevronForward /> Services
                  </li>

                  <li className="flex">
                    <IoChevronForward /> Insurance
                  </li>

                  <li className="flex">
                    <IoChevronForward /> Agency
                  </li>

                  <li className="flex">
                    <IoChevronForward /> Tourism
                  </li>

                  <li className="flex">
                    <IoChevronForward /> Payment
                  </li>
                </ul>
              </div>

              <div className="col col-3" data-aos="fade-left">
                <div className="footer__title">
                  <span>Partners</span>
                </div>

                <ul className="footer__list flex">
                  <li className="flex">
                    <IoChevronForward /> Booking
                  </li>

                  <li className="flex">
                    <IoChevronForward /> RentaiCar
                  </li>

                  <li className="flex">
                    <IoChevronForward /> HostelWorld
                  </li>

                  <li className="flex">
                    <IoChevronForward /> Trivago
                  </li>

                  <li className="flex">
                    <IoChevronForward /> TripAdvisor
                  </li>
                </ul>
              </div>

              <div className="col col-4" data-aos="fade-left">
                <div className="footer__title">
                  <span>Last minute</span>
                </div>

                <ul className="footer__list flex">
                  <li className="flex">
                    <IoChevronForward /> Lodon
                  </li>

                  <li className="flex">
                    <IoChevronForward /> California
                  </li>

                  <li className="flex">
                    <IoChevronForward /> Indonesia
                  </li>

                  <li className="flex">
                    <IoChevronForward /> Europe
                  </li>

                  <li className="flex">
                    <IoChevronForward /> Oceania
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer__copyright flex">
              <p>Best Travel Website theme</p>
              <p>Copyright Reversed-Isratech 2022</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
