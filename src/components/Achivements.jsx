import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Users,
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  // =========================================
  // ACHIEVEMENTS
  // =========================================

  const achievements = [
    {
      image: "/images/achievements/achievement1.webp",
      title: "Web Wizard",
      subtitle: "1st Rank",
      description:
        "🏅 Thrilled to announce that we secured 1st place at the Web Wizards event hosted by Government College of Engineering Kolhapur! 💻✨It’s an honor to have our website become a part of their journey—a significant milestone in our web development experience. This achievement reflects the power of creativity, teamwork, and innovation, and we couldn't be more excited for what’s ahead!A huge thank you to everyone who supported us along the way!",
      type: "Achievement"
    },

    {
      image: "/images/achievements/achievement2.webp",
      title: "Capstone Project",
      subtitle: "3rd Rank",
      description:
        "✨A Capstone Success Story🎉😌l'm thrilled to share that our team and We secured third place in our Capstone Project! This project involved creating a website for secondary book selling, a unique and innovative solution.💫As first-year students with no prior coding experience, diving into HTML, CSS, and JavaScript was quite a challenge. However, with dedication and teamwork, we managed to develop a functional and user-friendly platform.This experience has not only strengthened my technical skills but has also taught me the importance of problem-solving, collaboration, and perseverance. I'm grateful for the opportunity to have been part of such a rewarding project.",
      type: "Achievement"
    },

    {
      image: "/images/achievements/achievement3.webp",
      title: "Technical Achievement",
      subtitle: "Competition",
      description:
        "Participation and achievement in a technical event.",
      type: "Achievement"
    }
  ];

  // =========================================
  // ROTARACT PHOTOS
  // =========================================

  const rotaractPhotos = [
    "/images/activities/rotaract/activity1.webp",
    "/images/activities/rotaract/activity2.webp",
    "/images/activities/rotaract/activity3.webp",
    "/images/activities/rotaract/activity4.webp"
  ];

  // =========================================
  // AUTOMATIC SLIDESHOW
  // =========================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => {
        return (prev + 1) % rotaractPhotos.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [rotaractPhotos.length]);

  // =========================================
  // NEXT PHOTO
  // =========================================

  const nextPhoto = () => {
    setCurrentPhoto((prev) => {
      return (prev + 1) % rotaractPhotos.length;
    });
  };

  // =========================================
  // PREVIOUS PHOTO
  // =========================================

  const previousPhoto = () => {
    setCurrentPhoto((prev) => {
      return (
        (prev - 1 + rotaractPhotos.length) %
        rotaractPhotos.length
      );
    });
  };

  // =========================================
  // OPEN IMAGE MODAL
  // =========================================

  const openImage = (item) => {
    setSelectedImage(item);
  };

  return (
    <>
      {/* =====================================================
          ACHIEVEMENTS MAIN SECTION
      ===================================================== */}

      <section
        id="achievements"
        className="achievements-section"
      >
        <div className="achievements-container">

          {/* =================================================
              SECTION HEADER
          ================================================= */}

          <motion.div
            className="section-heading"
            initial={{
              opacity: 0,
              y: 30
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
              05 / BEYOND CODE
            </span>

            <h2>
              More than
              <span> just code.</span>
            </h2>

            <p className="achievement-intro">
              A collection of achievements, activities,
              leadership experiences and moments that
              shaped my journey.
            </p>

          </motion.div>


          {/* =================================================
              ACHIEVEMENTS HEADING
          ================================================= */}

          <div className="gallery-heading">

            <div className="gallery-title">

              <Trophy size={20} />

              <h3>
                Achievements
              </h3>

            </div>

            <span>
              01 — ACHIEVEMENTS
            </span>

          </div>


          {/* =================================================
              ACHIEVEMENTS GALLERY
          ================================================= */}

          <div className="achievement-gallery">

            {achievements.map((item, index) => (

              <motion.div
                className={`achievement-photo photo-${index + 1}`}
                key={item.title}

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

                whileHover={{
                  y: -8
                }}

                onClick={() => openImage(item)}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="photo-overlay">

                  <div>

                    <span>
                      {item.type}
                    </span>

                    <h4>
                      {item.title}
                    </h4>

                    <p>
                      {item.subtitle}
                    </p>

                  </div>

                  <div className="photo-arrow">

                    <ArrowUpRight size={18} />

                  </div>

                </div>

              </motion.div>

            ))}

          </div>


          {/* =================================================
              ACTIVITIES & LEADERSHIP HEADING
          ================================================= */}

          <div className="gallery-heading activities-heading">

            <div className="gallery-title">

              <Users size={20} />

              <h3>
                Activities & Leadership
              </h3>

            </div>

            <span>
              02 — ACTIVITIES
            </span>

          </div>


          {/* =================================================
              ROTARACT SECTION
          ================================================= */}

          <motion.div
            className="rotaract-section"

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

            {/* =============================================
                ROTARACT HEADER
            ============================================= */}

            <div className="rotaract-header">

              <div>

                <span>
                  LEADERSHIP & COMMUNITY
                </span>

                <h3>
                  Rotaract Club
                </h3>

              </div>

              <Users size={24} />

            </div>


            {/* =============================================
                ROTARACT SLIDESHOW
            ============================================= */}

            <div className="rotaract-slider">

              <AnimatePresence mode="wait">

                <motion.img
                  key={currentPhoto}
                  src={rotaractPhotos[currentPhoto]}
                  alt={`Rotaract activity ${
                    currentPhoto + 1
                  }`}

                  initial={{
                    opacity: 0,
                    scale: 1.08
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1
                  }}

                  exit={{
                    opacity: 0,
                    scale: 0.98
                  }}

                  transition={{
                    duration: 0.8
                  }}
                />

              </AnimatePresence>


              {/* =========================================
                  IMAGE DARK GRADIENT
              ========================================= */}

              <div className="rotaract-gradient"></div>


              {/* =========================================
                  SLIDE INFORMATION
              ========================================= */}

              <div className="rotaract-overlay">

                <div className="rotaract-info">

                  <span>
                    ROTARACT CLUB
                  </span>

                  <h4>
                    Leadership • Community • Events
                  </h4>

                </div>


                <span className="photo-counter">

                  {String(
                    currentPhoto + 1
                  ).padStart(2, "0")}

                  {" / "}

                  {String(
                    rotaractPhotos.length
                  ).padStart(2, "0")}

                </span>

              </div>


              {/* =========================================
                  PREVIOUS BUTTON
              ========================================= */}

              <button
                className="slider-btn slider-prev"
                onClick={previousPhoto}
                aria-label="Previous Rotaract photo"
              >

                <ChevronLeft size={22} />

              </button>


              {/* =========================================
                  NEXT BUTTON
              ========================================= */}

              <button
                className="slider-btn slider-next"
                onClick={nextPhoto}
                aria-label="Next Rotaract photo"
              >

                <ChevronRight size={22} />

              </button>


              {/* =========================================
                  SLIDER DOTS
              ========================================= */}

              <div className="slider-dots">

                {rotaractPhotos.map(
                  (_, index) => (

                    <button
                      key={index}

                      className={
                        index === currentPhoto
                          ? "active"
                          : ""
                      }

                      onClick={() =>
                        setCurrentPhoto(index)
                      }

                      aria-label={`Show Rotaract photo ${
                        index + 1
                      }`}
                    />

                  )
                )}

              </div>

            </div>


            {/* =============================================
                ROTARACT DESCRIPTION
            ============================================= */}

            <div className="rotaract-description">

              <div>

                <span>
                  MY JOURNEY
                </span>

                <h4>
                  Creating impact beyond technology.
                </h4>

              </div>

              <p>
               Grateful to have served as Secretary of the Rotaract Club of DYP Sunshine for the Rotaract Year 2025–2026. 🌟

This journey has been much more than a leadership role—it has been a year of learning, growth, teamwork, and service. From organizing events and managing responsibilities to working alongside an amazing team, every experience helped me become more confident, disciplined, and adaptable.

sincerely thank all the board members, club members, mentors, and everyone who supported and trusted me throughout this journey. Your encouragement made this experience truly memorable.
              </p>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          IMAGE MODAL
      ===================================================== */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            className="image-modal"

            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            exit={{
              opacity: 0
            }}

            onClick={() =>
              setSelectedImage(null)
            }
          >

            <motion.div
              className="modal-content"

              initial={{
                scale: 0.8,
                opacity: 0
              }}

              animate={{
                scale: 1,
                opacity: 1
              }}

              exit={{
                scale: 0.8,
                opacity: 0
              }}

              transition={{
                duration: 0.3
              }}

              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* CLOSE BUTTON */}

              <button
                className="modal-close"

                onClick={() =>
                  setSelectedImage(null)
                }

                aria-label="Close image"
              >

                <X size={22} />

              </button>


              {/* IMAGE */}

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
              />


              {/* IMAGE INFORMATION */}

              <div className="modal-info">

                <span>
                  {selectedImage.type}
                </span>

                <h3>
                  {selectedImage.title}
                </h3>

                <p>
                  {selectedImage.description}
                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Achievements;