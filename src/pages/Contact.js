import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper"; // Ensures smooth transitions
import "../styles/styles.css"; // Ensure your styles are properly linked

const Contact = () => {
  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="contact-container"
      >
        <h1>📞 Contact Us</h1>
        <p>
          Got questions or feedback? We'd love to hear from you! Reach out to us through any of the channels below.
        </p>

        <h2>📬 Email</h2>
        <p>✉️ support@varnihack.com</p>

        <h2>📍 Address</h2>
        <p>🏢 VarniHack HQ, Tech Park, Bangalore, India</p>

        <h2>📲 Social Media</h2>
        <ul>
          <li>🐦 Twitter: <a href="https://twitter.com/varnihack" target="_blank" rel="noopener noreferrer">@VarniHack</a></li>
          <li>📘 Facebook: <a href="https://facebook.com/varnihack" target="_blank" rel="noopener noreferrer">VarniHack</a></li>
          <li>💼 LinkedIn: <a href="https://linkedin.com/company/varnihack" target="_blank" rel="noopener noreferrer">VarniHack</a></li>
        </ul>
      </motion.div>
    </PageWrapper>
  );
};

export default Contact;
