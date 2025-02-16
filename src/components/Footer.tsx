import React from "react";

const Footer: React.FC = () => {
  const date: number = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {date} Isaac Kalumba. All rights reserved.</p>
      <a href="#contact">Contact Me</a>
    </footer>
  );
};

export default Footer;
