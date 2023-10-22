import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos';
import 'aos/dist/aos.css'


const Footer = () => {
    useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <p>KEEP IN TOUCH</p>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="email" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">

          <div className="footerIntro flex">

            <div className="logoDiv">
              <a href="" className='logo flex'>
                <SiYourtraveldottv className='icon'/> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              <p>Plan your best adventures with us! Our team offers the most convenient and affordable ways for your travels. Find the perfect destination, book hotels and transportation tickets with just a few clicks. Crossing distances has never been easier. Join us and make your travel dreams a reality!</p>
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <a href="https://twitter.com/">
              <AiOutlineTwitter className='icon' />
              </a>
              <a href="https://www.youtube.com/">
              <AiFillYoutube className='icon' />
              </a>
              <a href="https://www.instagram.com/">
              <AiFillInstagram className='icon' />
              </a>
              <a href="https://www.tripadvisor.com/">
              <FaTripadvisor className='icon' />
              </a>
            </div>
          </div>

          <div  className="footerLinks grid">
              {/* First group */}
              <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                <span className="groupTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Insurance
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Payment
                </li>

              </div>
              {/* Second group */}
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">
                  PARTNERS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Bookings
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Rentcars
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  HostelWorld
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Trivago
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  TripAdvisor
                </li>

              </div>
              {/* Third group */}
              <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                <span className="groupTitle">
                  LAST MINUTE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  London
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  California
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Lviv
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Tokio
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Bern
                </li>

              </div>

          </div>
  
          <div className="footerDiv flex">
            <span> BEST TRAVEL WEBSITE</span>
            <span> COPYRIGHTS RESERVED - ZHOYEV 2023</span>
          </div>
        </div>
      </div>
    </section>
  ) 
}

export default Footer;
