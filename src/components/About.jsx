import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Trophy,
  Brain
} from "lucide-react";

const About = () => {
  const stats = [
    {
      number: "8.94",
      label: "CGPA",
      icon: <GraduationCap size={22} />
    },
    {
      number: "150+",
      label: "LeetCode Problems",
      icon: <Code2 size={22} />
    },
    {
      number: "2",
      label: "Major Projects",
      icon: <Brain size={22} />
    },
    {
      number: "2",
      label: "Competition Ranks",
      icon: <Trophy size={22} />
    }
  ];

  return (
    <section id="about" className="about-section">

      <div className="about-container">

        {/* ================= HEADING ================= */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="section-number">
            01 / ABOUT
          </span>

          <h2>
            More than just
            <span> code.</span>
          </h2>

        </motion.div>


        {/* ================= ABOUT CONTENT ================= */}

        <div className="about-grid">

          {/* LEFT */}

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="about-large-text">
              I'm a Computer Science Engineering student
              passionate about building meaningful digital
              experiences.
            </p>

            <p>
              I enjoy turning ideas into functional,
              responsive and scalable web applications.
              My primary focus is full-stack development
              using React.js, Node.js, Express.js and
              MongoDB.
            </p>

            <p>
              Alongside development, I'm exploring
              AI-assisted development, cloud technologies
              and modern software engineering practices.
            </p>

          </motion.div>


          {/* RIGHT */}

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="about-card-top">

              <span>
                Currently
              </span>

              <div className="about-status">
                <span></span>
                Learning & Building
              </div>

            </div>

            <div className="about-card-content">

              <h3>
                Computer Science
                <br />
                & Engineering
              </h3>

              <p>
                D.Y. Patil College of Engineering
                and Technology, Kolhapur
              </p>

              <div className="education-line">
                <span>2023</span>

                <div className="line"></div>

                <span>2027</span>
              </div>

            </div>

          </motion.div>

        </div>


        {/* ================= STATS ================= */}

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {stats.map((stat, index) => (

            <motion.div
              className="stat-card"
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02
              }}
              transition={{
                duration: 0.2
              }}
            >

              <div className="stat-icon">
                {stat.icon}
              </div>

              <div className="stat-number">
                {stat.number}
              </div>

              <div className="stat-label">
                {stat.label}
              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default About;