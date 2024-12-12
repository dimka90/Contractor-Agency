import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-8 bg-[#263238] ">
      <div className="container mx-auto flex justify-between items-center flex-row-reverse px-4">
        <div className="">
        <button className="bg-[#00644C] text-white text-[15px] py-2 px-5 rounded-sm">
            Connect Wallet
          </button>
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
