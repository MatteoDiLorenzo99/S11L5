import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()} MyReactApp. All Rights Reserved.
        </p>
        <p className="mb-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-white"
          >
            Follow us on github
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
