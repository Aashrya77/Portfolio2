import React from "react";
import "./Services.css";
import { FaCode } from "react-icons/fa";
import { BiCrop } from "react-icons/bi";
const Services = () => {
  return (
    <div className="services" id="Services">
      <div className="heading">
        <h1>
          My <span>Services</span>
        </h1>
      </div>

      <div className="service-container">
        <div className="service">
          <div className="service-head">
            <FaCode className="code" />
            <h2>Web Design</h2>
          </div>
          <p>
            My web design services bring your vision to life with captivating
            online experiences. With a focus on your brand and objectives, I
            design custom solutions that stand out. From stunning layouts to
            responsive design, I create websites that leave a lasting
            impression, ensuring a seamless browsing experience across all
            devices.
          </p>
        </div>
        <div className="service">
          <div className="service-head">
            <BiCrop className="code" />
            <h2>UI/UX Design</h2>
          </div>
          <p>
            Crafting seamless and intuitive user experiences is at the core of
            my UI/UX design services. I create visually appealing interfaces
            that are easy to navigate and optimize for maximum usability and
            engagement. From wireframing to user testing, I ensure your website
            or application delivers a delightful experience that drives positive
            outcomes.
          </p>
        </div>
      </div>
      <a href="#Contact"><button className="hire-btn">Hire Me</button></a> 
    </div>
  );
};

export default Services;
