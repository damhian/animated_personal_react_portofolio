import { motion, stagger } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      delayChildren: stagger(0.6),
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate">
          <motion.div className="hero-badge">
            <span>👋 Salam, I'm</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}>
            David Mayshiogie
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Digital Solutions Cultivator & Civic-Tech Innovator
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Tech cultivator and civic-tech innovator, designing systems that
            merge modern web, blockchain, and AI. Rooted in indigenous values,
            driven by curiosity, building tech that matters.
          </motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/damhian" target="_blank">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/david-mayshiogie/"
              target="_blank">
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a href="https://x.com/mayshiogie" target="_blank">
              <i className="fab fa-twitter"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}>
              {`const aboutMe: DeveloperProfile = {
  codename: "David Mayshiogie",
  origin: "🌏 Dayaknese roots, building tech from Central Borneo to the world",
  role: "Full‑Stack & Decentralized Systems Architect",
  stack: {
    languages: ["TypeScript", "JavaScript", "Python", "PHP", "Rust (exploring)", "Cairo (exploring)"],
    frameworks: [
      "React",
      "Next.js 15",
      "Redux Toolkit",
      "MobX",
      "Svelte",
      "Flask API"
    ],
    tools: ["OpenCV", "YOLO", "Supervision", "Material UI", "Radix UI", "ShadCN"]
  },
  traits: [
    "system‑design thinker",
    "cutting‑edge tech researcher",
    "community‑driven builder",
    "blockchain/Web3 cultivator",
    "AI integration strategist"
  ],
  missionStatement:
    "Empowering communities through scalable, ethical, and future‑ready technology — from architecture to deployment.",
  availability: "Open to meaningful collaborations"
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                Currently working on something incredible!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
