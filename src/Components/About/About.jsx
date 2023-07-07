import React from "react";
import "./About.css";
import Me from "../../MyImgs/AboutMe.jpg";
import { FaCalendarCheck } from "react-icons/fa";
const About = () => {
  return (
    <div className="About" id="About">
      <h1>
        About <span>Me</span>
      </h1>
      <div className="about-container">
        <div className="img">
          <img src={Me} alt="me" />
          <span className="circle-spin"></span>
        </div>
        <div className="introduction">
          <h2>Introduction</h2>
          <p>
            As a client-focused front-end web designer, I offer a distinct
            advantage with my youthful perspective and fresh approach to design.
            At just 18 years old, I bring a unique blend of creativity, passion,
            and technical skills to create captivating websites that stand out
            from the competition. By staying up-to-date with the latest trends
            and technologies, I ensure that your website not only looks visually
            stunning but also incorporates innovative and modern features. With
            my dedication, attention to detail, and commitment to delivering
            exceptional results, I provide a refreshing and differentiated
            experience that sets your brand apart in the digital landscape.
          </p>
        </div>
        <>
          <h1>
            My <span>Skills</span> & <span>Experience</span>
          </h1>
          <div className="abt-bottom">
            <div className="skills ">
              <h2>Skills</h2>
              <div className="skills-box">
                <div className="skills-container">
                  <h3>HTML</h3>

                  <div className="layer">
                    <div className="HTML"></div>
                    <div className="HTML-percen animate__animated animate__fadeIn">
                      90%
                    </div>
                  </div>
                  <h3>CSS</h3>

                  <div className="layer">
                    <div className="CSS"></div>
                    <div className="CSS-percen animate__animated animate__fadeIn">
                      75%
                    </div>
                  </div>
                  <h3>JAVASCRIPT</h3>

                  <div className="layer">
                    <div className="JAVASCRIPT"></div>
                    <div className="JAVASCRIPT-percen animate__animated animate__fadeIn">
                      45%
                    </div>
                  </div>
                  <h3>REACTJS</h3>

                  <div className="layer">
                    <div className="REACT"></div>
                    <div className="REACT-percen animate__animated animate__fadeIn">
                      55%
                    </div>
                  </div>
                  <h3>Communication</h3>

                  <div className="layer">
                    <div className="communication"></div>
                    <div className="communication-percen animate__animated animate__fadeIn">
                      75%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="other-skills">
              <h2>Experience</h2>
              <div className="expericence-box">
                <div className="edu-box">
                  <p>
                    <FaCalendarCheck /> 06/2022 - 09/2022
                  </p>
                  <strong>Internship</strong>
                  <p>
                    
Through persistence and a strong passion for front-end web development, I secured my first internship opportunity. Leveraging my skills in HTML, CSS, and JavaScript, I showcased my portfolio and actively sought out internship positions. With determination, I impressed the hiring team with my talent and drive, ultimately earning the valuable experience and mentorship that propelled my career forward.
                  </p>
                </div>
                <div className="edu-box">
                  <p>
                    <FaCalendarCheck /> 04/2023 - Present
                  </p>
                  <strong>Mentorship & Online classes</strong>
                  <p>
                    Not only I am a front-end developer, I have also taken on
                    the fulfilling role of a mentor and web development
                    educator. Sharing my knowledge and expertise with aspiring
                    developers has become an integral part of my professional
                    journey. As a mentor, I guide and support individuals in
                    their quest to master the art of web development, offering
                    valuable insights, industry best practices, and practical
                    advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default About;
