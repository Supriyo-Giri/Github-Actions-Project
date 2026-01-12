import React, { useEffect, useState } from "react";
import "./home.css";
import myPic from "../assets/my-pic.png";
import TestimonialCard from "../components/TestimonialCard";
import axios from "axios";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Project from "../components/Project";
import todoImg from "../assets/todo-img.png";
import storeImg from "../assets/store-img.png";
import portfolioImg from "../assets/portfolio-img.png";
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchFeaturedData = async () => {
      try {
        setLoading(true);

        const featuredTestimonials = await axios.get(
          "https://supriyo-portfolio.onrender.com/api/user/featured"
        );

        setTestimonials(featuredTestimonials.data);
      } catch (error) {
        console.log(
          `Error in fetching all featured testimonials from database: ${error}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedData();
  }, []);

  return (
    <div className="homepage-main-container">
      <div className="hero">
        <div className="hero-content">
          <h5>
            HELLO ! <br />
            <br />
          </h5>
          <h1 className="hero-heading">
            I'm <span className="yellow-green">Supriyo Giri.</span>
          </h1>
          <br />
          <h3 className="yellow-green">Full stack web developer</h3>
          <br />
          <p className="hero-para">
            I am a Computer Science and Engineering undergraduate specializing
            in full-stack development with MERN and Spring Boot. I focus on
            building scalable, enterprise-grade applications and clean system
            architectures, driven by continuous learning and problem-solving.
          </p>
          <br />
          <br />
          <button className="ui-btn">
            <span>
              <a
                href="https://drive.google.com/file/d/1KMR_q4cvBwOoP-ORR4eARZBj5s_pRAwq/view?usp=sharing"
                className="download"
              >
                Download CV
              </a>
            </span>
          </button>
          <div className="social-icons">
            <a href="https://github.com/Supriyo-Giri" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/supriyo-giri-49ba07200/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/Supriyo_Giri04" target="_blank">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <img src={myPic} alt="" className="my-image" />
      </div>

      <div className="my-summary">
        <h2 className="yellow-green">My Summary</h2>
        <br />
        <br />
        <p className="hero-para">
          I am Supriyo Giri, a B.Tech Computer Science & Engineering student at
          the Institute of Engineering & Management, Kolkata (IEM ’28), with a
          strong interest in full-stack web development and building real-world,
          scalable applications. I primarily work with the MERN stack (MongoDB,
          Express.js, React.js, Node.js) and have a solid understanding of
          backend architecture, RESTful APIs, and database design, along with
          experience in Spring Boot. I have built complete end-to-end projects
          such as a MERN-based Todo List application, featuring task creation,
          editing, deletion, and status tracking with a responsive UI, and a
          MERN Product Store application, which includes product management,
          dynamic data handling, and CRUD operations. I enjoy developing clean,
          maintainable code, creating intuitive user interfaces, and designing
          backend systems that are reliable and easy to scale. With strong
          problem-solving and analytical skills, I am continuously learning and
          exploring new technologies to strengthen my fundamentals in software
          engineering and to build impactful applications that solve real-world
          problems.
        </p>
      </div>

      <div className="testimonials">
        <h2 className="yellow-green">Testimonials</h2>
        <br />

        <div className="testimonial-cards-container">
          {loading ? (
            <div className="loader"></div>
          ) : testimonials.length === 0 ? (
            <p className="no-testimonials"><br />No testimonials available <br /> <br /><br /></p> 
          ) : (
            testimonials.map((testimony) => (
              <TestimonialCard
                key={testimony._id}
                name={testimony.name}
                comment={testimony.comment}
              />
            ))
          )}
        </div>
      </div>
      <br />

      {/* --------------------Skills section-------------------- */}
      <div className="skills">
        <h2 className="yellow-green">Skills</h2>
        <div className="skills-container">
          <Skills skills={"HTML"}/>
          <Skills skills={"CSS"}/>
          <Skills skills={"JS"}/>
          <Skills skills={"React JS"}/>
          <Skills skills={"Node JS"}/>
          <Skills skills={"Express JS"}/>
          <Skills skills={"Spring & Spring Boot"}/>
          <Skills skills={"MongoDB"}/>
          <Skills skills={"MySQL"}/>
          <Skills skills={"Git & Github"}/>
          <Skills skills={"Postman"}/>
          <Skills skills={"Rest APIs"}/>
        </div>
      </div>
      <br />
      <div className="projects">
        <h2 className="yellow-green">Projects</h2>
        <div className="project-container">
          <Project title={"1. Todo list Application"} projImg={todoImg} projDesc={"Built a full-stack Todo app to help users plan, track, and manage daily tasks efficientlyImplemented complete CRUD operations with task status toggling (done / pending)Designed a clean and responsive React UI for smooth user experienceDeveloped RESTful APIs using Node.js and Express.js Integrated MongoDB for secure and persistent data storageFollowed proper project structure with error handling and scalable backend logic"} githubLink={"https://github.com/Supriyo-Giri/TODO-MERN"} demoLink={"https://todo-mern-1o4y.onrender.com/"} />

          <Project title={"2. Product Store Application"} projImg={storeImg} projDesc={"I built a Product Store using the MERN stack (MongoDB, Express.js, React.js, Node.js) to showcase my full-stack development skills. This application allows users to add products by providing an image URL, product name, and price, which are then dynamically stored and displayed with a clean, responsive UI. The project demonstrates seamless frontend–backend integration, RESTful API design, and efficient state management in React. With a focus on scalability and user experience, the Product Store highlights my ability to build real-world web applications using modern JavaScript technologies."} githubLink={"https://github.com/Supriyo-Giri/Product-Store-MERN"} demoLink={"https://product-store-7b65.onrender.com/"} />

          <Project title={"3. MERN stack Portfolio website"} projImg={portfolioImg} projDesc={"I developed a Portfolio Testimonial Website using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to submit testimonials with their name, email, and feedback through a structured backend system. The application includes a featured testimonial system, where selected testimonials are dynamically highlighted on the home page, enhancing credibility and user engagement. Built with a modern, clean UI, the project emphasizes smooth user experience, responsive design, and efficient data handling. This project showcases my ability to design scalable full-stack applications with real-world features such as content management, conditional rendering, and database-driven UI updates."}
          githubLink={"https://github.com/Supriyo-Giri/Portfolio"} demoLink={""}/>
        </div>
      </div>
      <p className="contact-me">I’d love to hear your feedback! Share your thoughts, suggestions, or experience—your input helps me grow and improve</p> <br />

      <Link to={'/contact'} className='link-btn'>
            <button className="animated-button">
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
            </svg>
            <span className="text">Contact me</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
            </svg>
            </button>
        </Link>
      <br /><br />

      <Footer />
    </div>
  );
};

export default HomePage;
