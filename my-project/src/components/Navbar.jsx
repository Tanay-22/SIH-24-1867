import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { Tooltip } from "flowbite-react";
import { HiChat } from "react-icons/hi";
import { GiAbstract021 } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

// Safety tips, helplines, and emails for each disaster type
const disasterInfo = {
  Earthquake: {
    tips: [
      "Drop to your hands and knees to prevent being knocked over.",
      "Cover your head and neck with your arms.",
      "Hold on to your shelter until the shaking stops.",
      "Stay away from windows and heavy objects.",
    ],
    helplines: [
      "National Emergency Management Agency: 1800-123-456",
      "Local Earthquake Relief Office: 1800-654-321",
    ],
    email: "earthquake_relief@example.com",
  },
  Flood: {
    tips: [
      "Move to higher ground immediately.",
      "Avoid walking or driving through floodwaters.",
      "Keep away from electrical appliances.",
      "Follow evacuation orders promptly.",
    ],
    helplines: [
      "Flood Relief Service: 1800-987-654",
      "Local Flood Response Team: 1800-321-987",
    ],
    email: "flood_relief@example.com",
  },
  Hurricane: {
    tips: [
      "Prepare an emergency kit with essentials.",
      "Secure windows and doors.",
      "Avoid using elevators.",
      "Follow official evacuation orders.",
    ],
    helplines: [
      "Hurricane Support Line: 1800-543-210",
      "Local Hurricane Emergency Center: 1800-765-432",
    ],
    email: "hurricane_relief@example.com",
  },
  Tornado: {
    tips: [
      "Seek shelter in a basement or an interior room.",
      "Avoid windows and doors.",
      "Cover yourself with a mattress or heavy blankets.",
      "Stay tuned to weather updates.",
    ],
    helplines: [
      "Tornado Assistance Line: 1800-678-901",
      "Local Tornado Relief Agency: 1800-234-567",
    ],
    email: "tornado_relief@example.com",
  },
  Natural: {
    tips: ["Follow general safety tips for your area and stay informed."],
    helplines: ["General Disaster Assistance: 1800-000-000"],
    email: "natural_disaster_support@example.com",
  },
  "Man-made": {
    tips: ["Follow local emergency instructions and stay away from the affected area."],
    helplines: ["General Emergency Response: 1800-111-111"],
    email: "man_made_disaster_support@example.com",
  },
};

// Define questions and possible answers for the chatbot
const questionsAndAnswers = [
  {
    question: "Which specific disaster are you referring to?",
    answers: ["Earthquake", "Flood", "Hurricane", "Tornado"],
  },
  {
    question: "Would you like to know safety tips or helplines and email addresses for this disaster?",
    answers: ["Safety Tips", "Helplines and Email"],
  },
  {
    question: "Want to make the most of our website?",
    answers: ["Yes", "No"],
  },
];

// Chatbot Component
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedDisaster, setSelectedDisaster] = useState("");
  const [finalMessageShown, setFinalMessageShown] = useState(false);

  const messagesEndRef = useRef(null);

  const handleAnswer = (answer) => {
    const question = questionsAndAnswers[currentQuestionIndex];
    let response;

    if (currentQuestionIndex === 0) {
      setSelectedDisaster(answer);
      response = `You selected: ${answer}. Would you like to know safety tips or helplines and email addresses?`;
      setCurrentQuestionIndex(1);
    } else if (currentQuestionIndex === 1) {
      if (answer === "Safety Tips") {
        response = (
          <div>
            <p>Here are the safety tips for {selectedDisaster}:</p>
            <ul className="list-disc ml-6">
              {disasterInfo[selectedDisaster]?.tips.map((tip, index) => (
                <li key={index} className="text-gray-800">{tip}</li>
              )) || <li>No specific tips available.</li>}
            </ul>
          </div>
        );
      } else if (answer === "Helplines and Email") {
        response = (
          <div>
            <p>Here are the helplines and email addresses for {selectedDisaster}:</p>
            <ul className="list-disc ml-6">
              {disasterInfo[selectedDisaster]?.helplines.map((helpline, index) => (
                <li key={index} className="text-gray-800">{helpline}</li>
              )) || <li>No helplines available.</li>}
            </ul>
            <p>Email: {disasterInfo[selectedDisaster]?.email || "No email available."}</p>
          </div>
        );
      }
      setCurrentQuestionIndex(2);
    } else if (currentQuestionIndex === 2) {
      if (answer === "Yes") {
        response = (
          <div>
            <p>Our disaster management website offers various features to help you stay informed and prepared:</p>
            <ul className="list-disc ml-6">
              <li className="text-gray-800">Real-time disaster updates and alerts.</li>
              <li className="text-gray-800">Safety tips and emergency contact information for different types of disasters.</li>
              <li className="text-gray-800">Interactive maps showing affected areas and safe zones.</li>
              <li className="text-gray-800">Forms for reporting disasters and requesting assistance.</li>
              <li className="text-gray-800">Dashboard for tracking disaster response activities and support requests.</li>
              <li className="text-gray-800">Emergency contact forms and chat support for immediate assistance.</li>
            </ul>
          </div>
        );
      } else {
        response = "Thank you for your time. Stay safe and take care!";
      }
      setCurrentQuestionIndex(questionsAndAnswers.length);
    }

    setMessages([
      ...messages,
      { user: "You", text: answer },
      { user: "Bot", text: response },
    ]);
  };

  useEffect(() => {
    if (currentQuestionIndex === questionsAndAnswers.length && !finalMessageShown) {
      const finalMessage = "Thank you for providing the information. Stay safe and take care.";
      setMessages([...messages, { user: "Bot", text: finalMessage }]);
      setFinalMessageShown(true);
    }
  }, [currentQuestionIndex, messages, finalMessageShown]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const currentQuestion = questionsAndAnswers[currentQuestionIndex]?.question || "No more questions.";
  const currentAnswersOptions = questionsAndAnswers[currentQuestionIndex]?.answers || [];

  return (
    <div className="flex flex-col h-[400px] w-[400px] bg-gray-50 p-4 rounded-lg shadow-lg">
      <div className="text-center text-xl font-semibold mb-4">CHATBOT</div> {/* Heading Added Here */}
      <div className="flex-1 overflow-y-auto mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-md relative">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 p-2 rounded-lg ${msg.user === "Bot" ? "bg-blue-100 text-blue-700" : "bg-gray-200 text-gray-800"}`}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* This div is used to scroll to the bottom */}
        {currentQuestionIndex < questionsAndAnswers.length && (
          <div className="mb-2 text-gray-700 p-2 rounded-lg bg-gray-200">
            <strong>Bot:</strong> {currentQuestion}
          </div>
        )}
      </div>
      {currentQuestionIndex < questionsAndAnswers.length && (
        <div className="space-y-2">
          {currentAnswersOptions.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer)}
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              {answer}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


// Navbar Component
export default function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="border-b-2 shadow-lg w-full top-0 left-0 h-16 flex items-center justify-between px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50">
      <img
        src="/Sanrakshak_1.png"
        alt="Logo"
        className="h-full object-contain cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:rotate-6"
        onClick={() => navigate('/')}
      />

      <div className="flex mx-auto space-x-10">
        <span
          className="relative cursor-pointer text-lg font-semibold text-white before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"
          onClick={() => navigate('/')}
        >
          Home
        </span>
        <span
          className="relative cursor-pointer text-lg font-semibold text-white before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"
          onClick={() => navigate('/show-disaster')}
        >
          Disaster
        </span>
        <span
          className="relative cursor-pointer text-lg font-semibold text-white before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"
          onClick={() => navigate('/show-dashboard')}
        >
          Dashboard
        </span>
        <span
          className="relative cursor-pointer text-lg font-semibold text-white before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"
          onClick={() => navigate('/about-us')}
        >
          About Us
        </span>
      </div>

      <Tooltip content="Chat with us" placement="bottom">
        <HiChat
          className="text-blue-500 cursor-pointer text-4xl p-2 rounded-full border-2 border-white bg-white shadow-lg hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-110"
          onClick={openModal}
        />
      </Tooltip>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Chatbot Modal"
        ariaHideApp={false}
        className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur-sm"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
      >
        <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <Chatbot />
        </div>
      </Modal>
    </div>
  );
}
