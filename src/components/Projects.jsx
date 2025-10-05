import { motion, stagger } from "framer-motion";
import { tr } from "framer-motion/client";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}>
        My Projects
        <p className="projects-subtitle">
          Project Playgrounds <br /> You Can Test Some of My Project Here
        </p>
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}>
          <a
            href="https://chronus-social-media-supabase-websi.vercel.app/"
            target="_blank"
            className="project-link"
            aria-label="Visit Chronus Social Platform"
          />
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/chronus.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Chronus Social Platform</h3>
          <p>
            A modern community‑driven social media application where users can
            create and join communities, share posts, and engage in real‑time
            discussions. Built with a focus on speed, simplicity, and seamless
            user experience.
          </p>
          <div className="project-tech">
            <span>React + Vite</span>
            <span>TailwindCSS</span>
            <span>Supabase</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}>
          <a
            href="https://collabrite.vercel.app/"
            target="_blank"
            className="project-link"
            aria-label="Visit Collabrite Task Manager"
          />
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/collabrite.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Collabrite Task Manager</h3>
          <p>
            A Trello‑style collaborative task management app with intuitive
            drag‑and‑drop boards, real‑time updates, and subscription‑based
            access for extra features. Designed for seamless team workflows and
            built with modern web technologies.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>TailwindCSS</span>
            <span>Supabase</span>
            <span>Clerk</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}>
          <a
            href="https://e-licensing.dephub.go.id/landing/"
            target="_blank"
            className="project-link"
            aria-label="Visit Collabrite Task Manager"
          />
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/e-licensing.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>E‑Licensing Platform</h3>
          <p>
            A secure licensing management system developed for the Ministry of
            Transportation of Indonesia, Maritime Division. Modernized from a
            legacy CodeIgniter 3 application to a Next.js and PostgreSQL stack,
            delivering faster performance, improved scalability, and a more
            intuitive user experience. Features include role‑based access,
            document verification, and real‑time application tracking to
            streamline maritime licensing processes.
            <span className="project-access-note">
              🔒 <strong>Access note:</strong> Public landing page available —
              full system restricted per government security requirements.
            </span>
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>PostgreSQL</span>
            <span>CodeIgniter 3 (legacy)</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
