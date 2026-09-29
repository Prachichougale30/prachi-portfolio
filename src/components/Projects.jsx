import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  FolderKanban
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Industrial Vehicle Loading & Unloading Management System",
      category: "Real-World Application",
      description:
        "A web-based management system designed to streamline vehicle loading and unloading operations, improve coordination and maintain operational records.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],
      featured: true
    },

    {
      number: "02",
      title: "Smart Study Vault",
      category: "Education Platform",
      description:
        "A smart study material management platform where students can organize, store and access their academic resources through a clean and easy-to-use interface.",
      tech: [
        "React.js",
        "Firebase",
        "JavaScript",
        "CSS"
      ],
      featured: false
    },

    {
      number: "03",
      title: "Expiry Date Alert System",
      category: "AI / OCR Application",
      description:
        "An application that uses OCR technology to detect expiry information from product images and helps users identify products approaching their expiry date.",
      tech: [
        "Python",
        "Flask",
        "OpenCV",
        "Tesseract OCR"
      ],
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects-section">

      <div className="projects-container">

        {/* ================= HEADING ================= */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="section-number">
            03 / PROJECTS
          </span>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

        </motion.div>


        {/* ================= PROJECTS ================= */}

        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.title}

              initial={{
                opacity: 0,
                y: 50
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.15
              }}
            >

              {/* Project Number */}

              <div className="project-number">
                {project.number}
              </div>


              {/* Project Content */}

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                {/* Technologies */}

                <div className="project-tech">

                  {project.tech.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

              </div>


              {/* Project Action */}

              <div className="project-action">

                <motion.div
                  className="project-arrow"
                  whileHover={{
                    scale: 1.1,
                    rotate: 45
                  }}
                >
                  <ArrowUpRight size={22} />
                </motion.div>

              </div>


              {/* Hover background */}

              <div className="project-hover"></div>

            </motion.article>

          ))}

        </div>


        {/* ================= PROJECT FOOTER ================= */}

        <motion.div
          className="projects-footer"

          initial={{
            opacity: 0
          }}

          whileInView={{
            opacity: 1
          }}

          viewport={{
            once: true
          }}
        >

          <FolderKanban size={18} />

          <span>
            More projects coming soon...
          </span>

        </motion.div>

      </div>

    </section>
  );
};

export default Projects;