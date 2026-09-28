import React from "react";

function Dashboard() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const projects = [
    {
      title: "Online Driving Licence Registration System",
      description:
        "A full-stack web application for online driving licence registration, application management, payment and admin approval.",
      technologies:
        "React • Node.js • Express • MongoDB • Razorpay",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
      link: "https://tanairahul.github.io/Online-driving-License/",
    },
    {
      title: "React Portfolio Website",
      description:
        "A responsive personal portfolio website built with React to showcase web development skills and projects.",
      technologies: "React • JavaScript • HTML • CSS",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      link: "https://tanairahul.github.io/React-project/",
    },
    {
      title: "Frontend Web Project",
      description:
        "A responsive frontend website with clean user interface, responsive layouts and modern web design.",
      technologies: "HTML • CSS • JavaScript",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      link: "https://tanairahul.github.io/project1/",
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "Git",
    "GitHub",
    "Responsive Design",
    "C/C++",
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 85px;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #f8fafc;
          color: #0f172a;
        }

        a {
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        .dashboard {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ================= NAVBAR ================= */

        .navbar {
          position: sticky;
          top: 0;
          left: 0;
          z-index: 9999;
          width: 100%;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-bottom: 1px solid #e5e7eb;
        }

        .navbar-container {
          width: 100%;
          max-width: 1180px;
          height: 72px;
          margin: auto;
          padding: 0 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          color: #111827;
          font-size: 24px;
          font-weight: 800;
          cursor: pointer;
        }

        .logo span {
          color: #2563eb;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          border: none;
          outline: none;
          background: transparent;
          color: #475569;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.25s ease;
          padding: 8px 2px;
        }

        .nav-link:hover {
          color: #2563eb;
        }

        .nav-resume {
          color: white !important;
          background: #2563eb !important;
          padding: 10px 18px !important;
          border-radius: 8px;
          box-shadow: 0 7px 18px rgba(37, 99, 235, 0.22);
        }

        .nav-resume:hover {
          color: white !important;
          background: #1d4ed8 !important;
          transform: translateY(-2px);
        }

        /* ================= HERO ================= */

        .hero {
          min-height: 650px;
          display: flex;
          align-items: center;
          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(37, 99, 235, 0.11),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(79, 70, 229, 0.1),
              transparent 30%
            ),
            #f8fafc;
          scroll-margin-top: 85px;
        }

        .hero-container {
          width: 100%;
          max-width: 1180px;
          margin: auto;
          padding: 80px 25px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 70px;
          align-items: center;
        }

        .available {
          display: inline-block;
          padding: 8px 14px;
          margin-bottom: 20px;
          background: #dbeafe;
          color: #1d4ed8;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
        }

        .hero h1 {
          font-size: clamp(42px, 6vw, 68px);
          line-height: 1.08;
          letter-spacing: -2px;
          color: #0f172a;
          margin-bottom: 20px;
        }

        .hero h1 span {
          color: #2563eb;
        }

        .hero h2 {
          font-size: 25px;
          color: #475569;
          margin-bottom: 18px;
          font-weight: 600;
        }

        .hero-description {
          max-width: 680px;
          color: #64748b;
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .hero-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 22px;
          border-radius: 9px;
          font-size: 15px;
          font-weight: 700;
          transition: 0.25s ease;
          cursor: pointer;
          border: none;
        }

        .primary-button {
          color: white;
          background: #2563eb;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.25);
        }

        .primary-button:hover {
          background: #1d4ed8;
          transform: translateY(-3px);
        }

        .secondary-button {
          color: #334155;
          background: white;
          border: 1px solid #cbd5e1;
        }

        .secondary-button:hover {
          color: #2563eb;
          border-color: #2563eb;
          transform: translateY(-3px);
        }

        .tech-line {
          margin-top: 27px;
          color: #64748b;
          font-size: 14px;
        }

        .tech-line strong {
          color: #334155;
        }

        /* ================= PROFILE ================= */

        .profile-area {
          display: flex;
          justify-content: center;
        }

        .profile-card {
          width: 315px;
          height: 370px;
          padding: 9px;
          border-radius: 28px;
          background: linear-gradient(145deg, #2563eb, #4f46e5);
          box-shadow: 0 30px 70px rgba(37, 99, 235, 0.25);
          transform: rotate(2deg);
          transition: 0.4s ease;
        }

        .profile-card:hover {
          transform: rotate(0deg) translateY(-8px);
        }

        .profile-inner {
          height: 100%;
          border-radius: 22px;
          background: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 30px;
        }

        .profile-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #dbeafe, #e0e7ff);
          font-size: 58px;
          margin-bottom: 22px;
        }

        .profile-inner h3 {
          font-size: 24px;
          color: #111827;
          margin-bottom: 8px;
        }

        .profile-inner .role {
          color: #2563eb;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .profile-inner .location {
          color: #64748b;
          font-size: 14px;
        }

        /* ================= COMMON SECTION ================= */

        .section {
          width: 100%;
          max-width: 1180px;
          margin: auto;
          padding: 90px 25px;
        }

        .section-anchor {
          scroll-margin-top: 85px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title small {
          display: block;
          color: #2563eb;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .section-title h2 {
          color: #0f172a;
          font-size: 38px;
          margin-bottom: 12px;
        }

        .section-title p {
          max-width: 650px;
          margin: auto;
          color: #64748b;
          line-height: 1.7;
        }

        /* ================= ABOUT ================= */

        .about-section {
          background: white;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .about-content h3 {
          font-size: 30px;
          margin-bottom: 20px;
        }

        .about-content p {
          color: #64748b;
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .about-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 25px;
        }

        .detail-box {
          padding: 18px;
          border-radius: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          transition: 0.25s;
        }

        .detail-box:hover {
          border-color: #bfdbfe;
          transform: translateY(-3px);
        }

        .detail-box strong {
          display: block;
          color: #111827;
          font-size: 14px;
          margin-bottom: 6px;
        }

        .detail-box span {
          color: #64748b;
          font-size: 13px;
        }

        /* ================= SKILLS ================= */

        .skills-grid {
          max-width: 900px;
          margin: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 13px;
        }

        .skill {
          padding: 12px 20px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 30px;
          color: #334155;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 5px 15px rgba(15, 23, 42, 0.04);
          transition: 0.25s ease;
        }

        .skill:hover {
          color: #2563eb;
          border-color: #2563eb;
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.1);
        }

        /* ================= PROJECTS ================= */

        .projects-section {
          background: #f8fafc;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .project-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.05);
          transition: 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.11);
        }

        .project-image {
          width: 100%;
          height: 190px;
          object-fit: cover;
          display: block;
        }

        .project-content {
          padding: 22px;
        }

        .project-content h3 {
          font-size: 20px;
          color: #111827;
          margin-bottom: 11px;
        }

        .project-content p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 13px;
        }

        .project-tech {
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .project-buttons {
          display: flex;
          gap: 9px;
          flex-wrap: wrap;
        }

        .project-buttons a {
          padding: 8px 13px;
          border-radius: 7px;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-size: 13px;
          font-weight: 600;
          transition: 0.2s;
        }

        .project-buttons a:hover {
          background: #2563eb;
          color: white;
          border-color: #2563eb;
        }

        /* ================= EDUCATION ================= */

        .education-section {
          background: #ffffff;
        }

        .education-card {
          max-width: 800px;
          margin: auto;
          padding: 28px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.05);
        }

        .education-card h3 {
          color: #111827;
          font-size: 21px;
          margin-bottom: 8px;
        }

        .education-card .degree {
          color: #2563eb;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .education-card p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        /* ================= CONTACT ================= */

        .contact-section {
          background: white;
        }

        .contact-card {
          max-width: 850px;
          margin: auto;
          padding: 55px 30px;
          text-align: center;
          border-radius: 24px;
          background: linear-gradient(135deg, #eff6ff, #eef2ff);
          border: 1px solid #dbeafe;
        }

        .contact-card h2 {
          color: #111827;
          font-size: 35px;
          margin-bottom: 14px;
        }

        .contact-card p {
          max-width: 650px;
          margin: auto;
          color: #64748b;
          line-height: 1.7;
          font-size: 15px;
          margin-bottom: 26px;
        }

        .contact-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .contact-button {
          display: inline-block;
          padding: 12px 20px;
          background: #2563eb;
          color: white;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          transition: 0.25s;
        }

        .contact-button:hover {
          background: #1d4ed8;
          transform: translateY(-3px);
        }

        .contact-button.secondary {
          background: white;
          color: #2563eb;
          border: 1px solid #bfdbfe;
        }

        .contact-button.secondary:hover {
          background: #eff6ff;
        }

        /* ================= FOOTER ================= */

        .footer {
          padding: 28px 20px;
          background: #0f172a;
          color: #94a3b8;
          text-align: center;
          font-size: 14px;
        }

        .footer strong {
          color: white;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 900px) {
          .nav-menu {
            gap: 15px;
          }

          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 45px;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons {
            justify-content: center;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 650px) {
          .navbar-container {
            height: 65px;
            padding: 0 18px;
          }

          .logo {
            font-size: 21px;
          }

          .nav-menu {
            gap: 8px;
          }

          .nav-menu .nav-link:not(.nav-resume) {
            display: none;
          }

          .hero {
            min-height: auto;
          }

          .hero-container {
            padding: 70px 20px;
          }

          .hero h1 {
            font-size: 43px;
            letter-spacing: -1px;
          }

          .hero h2 {
            font-size: 21px;
          }

          .hero-description {
            font-size: 15px;
          }

          .profile-card {
            width: 280px;
            height: 330px;
          }

          .section {
            padding: 65px 20px;
          }

          .section-title h2 {
            font-size: 31px;
          }

          .about-details {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-image {
            height: 200px;
          }

          .contact-card {
            padding: 40px 20px;
          }

          .contact-card h2 {
            font-size: 29px;
          }
        }
      `}</style>

      <div className="dashboard">

        {/* ================= NAVBAR ================= */}

        <header className="navbar">
          <div className="navbar-container">

            <button
              className="logo"
              onClick={() => scrollToSection("home")}
              type="button"
            >
              Rahul<span>.</span>
            </button>

            <nav className="nav-menu">

              <button
                className="nav-link"
                onClick={() => scrollToSection("about")}
                type="button"
              >
                About
              </button>

              <button
                className="nav-link"
                onClick={() => scrollToSection("skills")}
                type="button"
              >
                Skills
              </button>

              <button
                className="nav-link"
                onClick={() => scrollToSection("projects")}
                type="button"
              >
                Projects
              </button>

              <button
                className="nav-link"
                onClick={() => scrollToSection("education")}
                type="button"
              >
                Education
              </button>

              <button
                className="nav-link"
                onClick={() => scrollToSection("contact")}
                type="button"
              >
                Contact
              </button>

              <button
                className="nav-link nav-resume"
                onClick={() => scrollToSection("contact")}
                type="button"
              >
                Resume
              </button>

            </nav>
          </div>
        </header>

        {/* ================= HERO ================= */}

        <section
          id="home"
          className="hero section-anchor"
        >
          <div className="hero-container">

            <div className="hero-content">

              <span className="available">
                ● Available for Internship & Freelance
              </span>

              <h1>
                Hi, I'm{" "}
                <span>Rahul Tanwar</span>
              </h1>

              <h2>
                Web Developer & Full Stack Developer
              </h2>

              <p className="hero-description">
                I am a BCA graduate and passionate
                web developer who builds modern,
                responsive and user-friendly web
                applications using React,
                JavaScript and full-stack technologies.
              </p>

              <div className="hero-buttons">

                <button
                  className="primary-button"
                  onClick={() => scrollToSection("projects")}
                  type="button"
                >
                  View My Projects →
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollToSection("contact")}
                  type="button"
                >
                  Contact Me
                </button>

              </div>

              <div className="tech-line">
                <strong>Skills:</strong>{" "}
                React • JavaScript • Node.js •
                Express • MongoDB • Git
              </div>

            </div>

            <div className="profile-area">

              <div className="profile-card">

                <div className="profile-inner">

                  <div className="profile-image">
                    👨‍💻
                  </div>

                  <h3>
                    Rahul Tanwar
                  </h3>

                  <p className="role">
                    Web Developer
                  </p>

                  <p className="location">
                    React • Node.js • MongoDB
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="about-section section-anchor"
        >
          <div className="section">

            <div className="section-title">

              <small>
                About Me
              </small>

              <h2>
                Who I Am
              </h2>

              <p>
                A passionate developer focused on
                creating useful and modern web
                applications.
              </p>

            </div>

            <div className="about-grid">

              <div className="about-content">

                <h3>
                  Turning Ideas Into Web Applications
                </h3>

                <p>
                  My name is Rahul Tanwar. I have
                  completed my Bachelor of Computer
                  Applications (BCA) and I am
                  interested in web development and
                  software development.
                </p>

                <p>
                  I work with frontend and backend
                  technologies and enjoy creating
                  responsive websites and full-stack
                  applications.
                </p>

                <p>
                  I am currently looking for
                  internship, freelance and
                  entry-level opportunities where I
                  can use my skills and continue
                  learning new technologies.
                </p>

              </div>

              <div className="about-details">

                <div className="detail-box">
                  <strong>
                    Education
                  </strong>

                  <span>
                    Bachelor of Computer Applications
                  </span>
                </div>

                <div className="detail-box">
                  <strong>
                    Profession
                  </strong>

                  <span>
                    Web Developer
                  </span>
                </div>

                <div className="detail-box">
                  <strong>
                    Focus
                  </strong>

                  <span>
                    React & Full Stack Development
                  </span>
                </div>

                <div className="detail-box">
                  <strong>
                    Work
                  </strong>

                  <span>
                    Internship & Freelance
                  </span>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section-anchor"
        >
          <div className="section">

            <div className="section-title">

              <small>
                My Skills
              </small>

              <h2>
                Technologies I Work With
              </h2>

              <p>
                My technical skills and tools used
                for web development.
              </p>

            </div>

            <div className="skills-grid">

              {skills.map((skill) => (
                <div
                  className="skill"
                  key={skill}
                >
                  {skill}
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="projects-section section-anchor"
        >
          <div className="section">

            <div className="section-title">

              <small>
                Portfolio
              </small>

              <h2>
                My Projects
              </h2>

              <p>
                Some of the projects I have created
                using my web development skills.
              </p>

            </div>

            <div className="projects-grid">

              {projects.map((project) => (

                <div
                  className="project-card"
                  key={project.title}
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-content">

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="project-tech">
                      {project.technologies}
                    </div>

                    <div className="project-buttons">

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo ↗
                      </a>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>
        </section>

        {/* ================= EDUCATION ================= */}

        <section
          id="education"
          className="education-section section-anchor"
        >
          <div className="section">

            <div className="section-title">

              <small>
                Education
              </small>

              <h2>
                My Education
              </h2>

            </div>

            <div className="education-card">

              <h3>
                Bachelor of Computer Applications
              </h3>

              <div className="degree">
                BCA
              </div>

              <p>
                Bachelor of Computer Applications
                with a focus on computer applications,
                programming and web development.
              </p>

            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact-section section-anchor"
        >
          <div className="section">

            <div className="contact-card">

              <h2>
                Let's Work Together
              </h2>

              <p>
                I am open to web development
                internships, freelance projects and
                entry-level opportunities. If you
                have a project or opportunity, feel
                free to contact me.
              </p>

              <div className="contact-buttons">

                <a
                  href="mailto:tanwarrahul39178@gmail.com"
                  className="contact-button"
                >
                  📧 Email Me
                </a>

                <a
                  href="https://tanairahul.github.io/React-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button secondary"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>
        </section>

        {/* ================= FOOTER ================= */}

        <footer className="footer">

          © {new Date().getFullYear()}{" "}

          <strong>
            Rahul Tanwar
          </strong>

          . All rights reserved.

        </footer>

      </div>
    </>
  );
}

export default Dashboard;
