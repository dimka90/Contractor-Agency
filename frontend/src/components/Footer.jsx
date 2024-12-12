import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-4 ">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
       
          <div>
            <img src="/path/to/logo.png" alt="Logo" className="h-10" />
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-3 ">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 t"
            >
              <i className="fab fa-twitter"></i>
              twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-facebook"></i>
              facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin"></i>
              linkedin
            </a>
          </div>
        </div>

      
        <div className="text-sm text-gray-400">
          <a
            href="/privacy-policy"
            className="hover:underline hover:text-white mr-4"
          >
            Privacy Policy
          </a>
          <span>© 2024 All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
