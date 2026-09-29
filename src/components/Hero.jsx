import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">

      {/* Background Glow */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-container">

        {/* ================= LEFT SIDE ================= */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Availability */}
          <motion.div
            className="availability"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="status-dot"></span>
            Available for opportunities
          </motion.div>

          {/* Introduction */}
          <motion.p
            className="hero-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Prachi
            <br />
            <span>Chougale.</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            I build modern, scalable web applications using
            React.js, Node.js, Express.js and MongoDB.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >

            <Link
              to="projects"
              smooth={true}
              duration={700}
              className="primary-btn"
            >
              View My Work
              <ArrowUpRight size={18} />
            </Link>

            <a
              href="/PrachiChougale.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Resume
            </a>

          </motion.div>

        </motion.div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >

          {/* Code Window */}

          <div className="code-window">

            {/* Window Header */}
            <div className="window-header">

              <span></span>
              <span></span>
              <span></span>

              <p>prachi.js</p>

            </div>

            {/* Code */}
            <div className="code-content">

              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span>{" "}
                = {"{"}
              </p>

              <p className="indent">
                name: <span className="green">"Prachi"</span>,
              </p>

              <p className="indent">
                role:{" "}
                <span className="green">
                  "Full Stack Developer"
                </span>
                ,
              </p>

              <p className="indent">
                stack: [
              </p>

              <p className="double-indent">
                <span className="green">"React"</span>,
              </p>

              <p className="double-indent">
                <span className="green">"Node.js"</span>,
              </p>

              <p className="double-indent">
                <span className="green">"MongoDB"</span>
              </p>

              <p className="indent">
                ],
              </p>

              <p className="indent">
                passion:{" "}
                <span className="green">
                  "Building"
                </span>
              </p>

              <p>
                {"}"}
              </p>

              <p className="cursor-line">

                <span className="purple">
                  developer
                </span>
                .
                <span className="blue">
                  build
                </span>
                ();

                <span className="typing-cursor">
                  |
                </span>

              </p>

            </div>

          </div>

          {/* ================= FLOATING CARDS ================= */}

          <motion.div
            className="floating-card card-react"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            React.js
          </motion.div>

          <motion.div
            className="floating-card card-node"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Node.js
          </motion.div>

          <motion.div
            className="floating-card card-mongo"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            MongoDB
          </motion.div>

        </motion.div>

      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity
        }}
      >
        <ArrowDown size={18} />
        <span>Scroll to explore</span>
      </motion.div>

    </section>
  );
};

export default Hero;