import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  Mail,
  ArrowUpRight,
  Send,
  MapPin,
  Code2,
  Users
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      await emailjs.send(
        "service_negsipi",
        "template_264qmcu",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        {
          publicKey: "NDVGsKMYfn_niJmZj"
        }
      );

      alert("Message sent successfully! 🎉");

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
  console.error("EMAILJS ERROR:", error);
  alert(`Failed to send: ${error.text || error.message || "Unknown error"}`);
}finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* HEADER */}
        <motion.div
          className="contact-heading"
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
            duration: 0.7
          }}
        >
          <span className="section-number">
            06 / LET'S CONNECT
          </span>

          <h2>
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p>
            I'm always open to discussing new projects,
            creative ideas, internship opportunities,
            or simply having a conversation about
            technology.
          </p>
        </motion.div>


        {/* CONTACT CONTENT */}
        <div className="contact-content">

          {/* LEFT SIDE */}
          <motion.div
            className="contact-info"
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
          >

            {/* EMAIL */}
            <a
              href="mailto:prachichougale2530@gmail.com"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <Mail size={21} />
              </div>

              <div>
                <span>EMAIL</span>

                <h4>
                  Prachichougale2530@gmail.com
                </h4>
              </div>

              <ArrowUpRight
                size={18}
                className="contact-arrow"
              />
            </a>


            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/prachi-chougale-956572316/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <Users size={21} />
              </div>

              <div>
                <span>LINKEDIN</span>

                <h4>
                  Let's connect professionally
                </h4>
              </div>

              <ArrowUpRight
                size={18}
                className="contact-arrow"
              />
            </a>


            {/* GITHUB */}
            <a
              href="https://github.com/Prachichougale30"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <Code2 size={21} />
              </div>

              <div>
                <span>GITHUB</span>

                <h4>
                  Explore my projects
                </h4>
              </div>

              <ArrowUpRight
                size={18}
                className="contact-arrow"
              />
            </a>


            {/* LOCATION */}
            <div className="contact-location">
              <MapPin size={18} />

              <span>
                Kolhapur, Maharashtra, India
              </span>
            </div>

          </motion.div>


          {/* RIGHT SIDE FORM */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
          >

            {/* NAME */}
            <div className="form-group">
              <label>YOUR NAME</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>


            {/* EMAIL */}
            <div className="form-group">
              <label>YOUR EMAIL</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>


            {/* MESSAGE */}
            <div className="form-group">
              <label>YOUR MESSAGE</label>

              <textarea
                name="message"
                placeholder="Tell me about your idea..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>


            {/* SUBMIT */}
            <motion.button
              type="submit"
              className="contact-submit"
              disabled={sending}
              whileHover={{
                scale: 1.02
              }}
              whileTap={{
                scale: 0.98
              }}
            >
              <span>
                {sending ? "Sending..." : "Send Message"}
              </span>

              <Send size={18} />
            </motion.button>

          </motion.form>

        </div>


        {/* FOOTER */}
        <motion.div
          className="contact-footer"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
        >
          <span>
            PRACHI CHOUGALE
          </span>

          <span>
            © {new Date().getFullYear()}
          </span>

          <span>
            BUILT WITH REACT
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;