import {
    FaFacebookF,
    FaTwitter,
    FaRss,
    FaGooglePlusG,
    FaEllipsisV,
  } from "react-icons/fa";
  import Sanrakshak from "./../assets/Sanrakshak_1.png";
  
  function Footer() {
    return (
      <footer className="bg-gray-700 text-white py-6 w-full mt-20">
        <div className="px-4 max-w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">
                <img src={Sanrakshak} alt="Sanrakshak" />
              </h2>
              <p className="text-gray-400">SOLOGAN COMPANY</p>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Weeebly Themes</h3>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Pre-sale FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Submit a Ticket
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Services</h3>
              <ul className="list-none">
                <li>
                  <a href="#" className="hover:underline">
                    Theme Tweak
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Showcase</h3>
              <ul className="list-none">
                <li>
                  <a href="#" className="hover:underline">
                    Widgetkit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">About Us</h3>
              <ul className="list-none">
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Affiliates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                ©Copyright. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaRss size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaGooglePlusG size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaEllipsisV size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  