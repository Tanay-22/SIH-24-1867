import React, { useState } from "react";
import "./InfoPage.css";
import { Carousel } from "flowbite-react";

const InfoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="info-page-container">
      <div className="h-[500px] w-full">
        <Carousel pauseOnHover>
          <img src="/disaster.jpg" alt="Disaster 1" />
          <img src="/disaster2.jpg" alt="Disaster 2" />
          <img src="/disaster3.jpg" alt="Disaster 3" />
          <img src="/disaster4.jpg" alt="Disaster 4" />
        </Carousel>
      </div>

      {/* 50/50 Split Container */}
      <div className="content-container flex flex-col md:flex-row  items-center mt-10">
        {/* Left side: Paragraph with button (50%) */}
        <div className="info-paragraph-container w-full md:w-1/2 p-6">
          <p className="info-paragraph shadow-lg bg-white p-6 rounded-lg">
            Welcome to Sanrakshak, where we provide real-time data from social
            media to keep you informed and safe. Our platform offers
            comprehensive insights and updates to help you stay ahead of
            potential risks and emergencies. Explore our tools and resources to
            learn more about how we can support your safety and security.
          </p>
          <button className="btn-get-tips mt-4" onClick={openModal}>
            Get Some Safety Tips
          </button>
        </div>

        {/* Right side: Image (50%) */}
        <div className=" w-full h-full md:w-1/2 p-6">
          <img
            src="/disaster.jpg"
            alt="Safety Image"
            className="rounded-lg shadow-lg w-full h-full"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Safety Tips</h2>
            <p className="modal-body">
              Here are some important safety tips to keep in mind:
              <ul className="list-disc pl-5 mt-2">
                <li>Stay informed about current events.</li>
                <li>Have an emergency plan in place.</li>
                <li>Keep a stock of essential supplies.</li>
                <li>Stay connected with family and friends.</li>
              </ul>
            </p>
            <button className="btn-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
