import "../index.css";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <a
        href="https://github.com/leonardtlauenstein"
        target="_blank"
        rel="noopener noreferrer"
        alt="Leonardt Lauenstein - Github"
        title="Leonardt Lauenstein - Github"
      >
        {`© Leonardt Lauenstein  - "HELLO, WORLD!" - Art Project ${year}. All right reserved `}
      </a>
    </footer>
  );
};

export default Footer;
