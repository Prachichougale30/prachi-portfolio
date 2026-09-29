import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Brain,
  Terminal
} from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Code2 size={24} />,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MongoDB", "MySQL", "Firebase Firestore"]
    },
    {
      title: "Programming",
      icon: <Terminal size={24} />,
      skills: ["C++", "Python", "JavaScript", "SQL"]
    },
    {
      title: "Tools",
      icon: <GitBranch size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Figma"]
    },
    {
      title: "AI & Cloud",
      icon: <Brain size={24} />,
      skills: ["AI-assisted Development", "Cloud Computing"]
    }
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        {/* Heading */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-number">
            02 / SKILLS
          </span>

          <h2>
            Tools I use to
            <span> build.</span>
          </h2>
        </motion.div>


        {/* Intro */}

        <motion.p
          className="skills-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A collection of technologies and tools I use to
          design, develop and ship web applications.
        </motion.p>


        {/* Skill Cards */}

        <div className="skills-grid">

          {categories.map((category, index) => (

            <motion.div
              className="skill-card"
              key={category.title}

              initial={{
                opacity: 0,
                y: 40
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                delay: index * 0.1,
                duration: 0.6
              }}

              whileHover={{
                y: -8
              }}
            >

              {/* Icon */}

              <div className="skill-icon">
                {category.icon}
              </div>


              {/* Title */}

              <h3>
                {category.title}
              </h3>


              {/* Skills */}

              <div className="skill-tags">

                {category.skills.map((skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>


        {/* Bottom statement */}

        <motion.div
          className="skills-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="skills-line"></div>

          <p>
            Always learning. Always building.
          </p>

          <div className="skills-line"></div>

        </motion.div>

      </div>

    </section>
  );
};

export default Skills;