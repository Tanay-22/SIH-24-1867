import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./InfoPage.css"; // Add your styles here
import { Button, Carousel } from "flowbite-react";
import { AiOutlineClose } from "react-icons/ai";

const InfoPage = () => {
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [language, setLanguage] = useState("english");

  // Example disaster data
  const disasters = [
    {
      id: 1,
      name: "Earthquake",
      location: "California",
      magnitude: 7.2,
      description:
        "Severe shaking and damage caused by tectonic plate movements... ",
      category: "Ongoing",
      safetyTips: {
        english: [
          "Drop, Cover, and Hold On during the shaking.",
          "Stay indoors and away from windows.",
          "If outside, move to an open area away from buildings.",
          "After the earthquake, check for injuries and hazards.",
        ],
        hindi: [
          "भूकंप के दौरान बैठें, कवर करें, और पकड़ें।",
          "खिड़कियों से दूर रहकर अंदर ही रहें।",
          "यदि बाहर हैं, तो इमारतों से दूर खुले क्षेत्र में जाएं।",
          "भूकंप के बाद चोटों और खतरों की जाँच करें।",
        ],
      },
    },
    {
      id: 2,
      name: "Hurricane",
      location: "Florida",
      magnitude: 5.1,
      description: "Strong winds and flooding associated with hurricanes...",
      category: "Past",
      safetyTips: {
        english: [
          "Evacuate if advised by authorities.",
          "Secure outdoor items to prevent them from becoming projectiles.",
          "Stay indoors and away from windows during the storm.",
          "After the hurricane, avoid floodwaters and downed power lines.",
        ],
        hindi: [
          "अधिकारियों द्वारा सलाह देने पर तुरंत निकासी करें।",
          "बाहर की वस्तुओं को सुरक्षित रखें ताकि वे प्रोजेक्टाइल न बनें।",
          "तूफान के दौरान खिड़कियों से दूर रहते हुए अंदर रहें।",
          "तूफान के बाद बाढ़ के पानी और गिरे हुए बिजली के तारों से दूर रहें।",
        ],
      },
    },
    {
      id: 3,
      name: "Tornado",
      location: "Texas",
      magnitude: 4.5,
      description: "Destruction and high winds caused by tornadoes...",
      category: "Upcoming",
      safetyTips: {
        english: [
          "Move to a basement or an interior room on the lowest floor.",
          "Stay away from windows and cover your head.",
          "If outside, find a low-lying area or ditch to lie in.",
          "After the tornado, be cautious of debris and damaged buildings.",
        ],
        hindi: [
          "तुरंत बेसमेंट या निचले मंजिल के आंतरिक कमरे में जाएं।",
          "खिड़कियों से दूर रहें और सिर को ढक लें।",
          "यदि बाहर हैं, तो किसी निचले क्षेत्र या खाई में लेट जाएं।",
          "टॉरनेडो के बाद मलबे और क्षतिग्रस्त इमारतों से सावधान रहें।",
        ],
      },
    },
    {
      id: 4,
      name: "Flood",
      location: "New York",
      magnitude: 3.9,
      description: "Severe flooding often results from heavy rainfall...",
      category: "Past",
      safetyTips: {
        english: [
          "Move to higher ground if flooding occurs.",
          "Avoid walking or driving through floodwaters.",
          "Stay informed with weather updates and emergency instructions.",
          "After the flood, avoid contact with floodwater, as it may be contaminated.",
        ],
        hindi: [
          "बाढ़ आने पर ऊंचे स्थान पर चले जाएं।",
          "बाढ़ के पानी में चलने या ड्राइविंग से बचें।",
          "मौसम के अपडेट और आपातकालीन निर्देशों की जानकारी रखें।",
          "बाढ़ के बाद, बाढ़ के पानी से बचें क्योंकि यह दूषित हो सकता है।",
        ],
      },
    },
    {
      id: 5,
      name: "Wildfire",
      location: "Australia",
      magnitude: 6.5,
      description: "Widespread fire damage due to wildfires...",
      category: "Ongoing",
      safetyTips: {
        english: [
          "Create a fire-resistant zone around your home.",
          "Have an evacuation plan and be ready to leave immediately.",
          "Stay indoors if smoke is heavy, and wear a mask if going outside.",
          "After the fire, check for hotspots around your property.",
        ],
        hindi: [
          "अपने घर के चारों ओर आग प्रतिरोधी क्षेत्र बनाएं।",
          "निकासी योजना बनाएं और आवश्यकता होने पर तुरंत निकलने के लिए तैयार रहें।",
          "धुआं भारी होने पर अंदर रहें और बाहर जाने पर मास्क पहनें।",
          "आग के बाद, अपनी संपत्ति के आस-पास गर्म स्थानों की जांच करें।",
        ],
      },
    },
    {
      id: 6,
      name: "Tsunami",
      location: "Japan",
      magnitude: 9.1,
      description: "Massive waves and destruction caused by tsunamis...",
      category: "Past",
      safetyTips: {
        english: [
          "If near the coast, move to higher ground immediately when an earthquake occurs.",
          "Stay away from the shoreline and low-lying areas.",
          "Follow evacuation instructions from local authorities.",
          "After the tsunami, avoid flooded areas and stay informed about further waves.",
        ],
        hindi: [
          "यदि तट के पास हों, तो भूकंप के दौरान तुरंत ऊंचे स्थान पर जाएं।",
          "तटरेखा और निम्न क्षेत्रों से दूर रहें।",
          "स्थानीय अधिकारियों के निकासी निर्देशों का पालन करें।",
          "सुनामी के बाद बाढ़ वाले क्षेत्रों से बचें और अधिक लहरों की जानकारी रखें।",
        ],
      },
    },
    {
      id: 7,
      name: "Volcano Eruption",
      location: "Hawaii",
      magnitude: 6.8,
      description: "Lava flow and ash clouds from volcanic eruptions...",
      category: "Ongoing",
      safetyTips: {
        english: [
          "Evacuate if local authorities issue an order.",
          "Stay indoors to avoid ash inhalation.",
          "Wear protective gear like masks and goggles when outside.",
          "Avoid low-lying areas prone to lava flows.",
        ],
        hindi: [
          "स्थानीय अधिकारियों द्वारा आदेश जारी करने पर निकासी करें।",
          "राख के साँस से बचने के लिए अंदर रहें।",
          "बाहर जाते समय मास्क और चश्मा पहनें।",
          "लावा प्रवाह वाले निचले क्षेत्रों से बचें।",
        ],
      },
    },
    {
      id: 8,
      name: "Blizzard",
      location: "Canada",
      magnitude: 3.5,
      description: "Heavy snow and freezing winds during blizzards...",
      category: "Upcoming",
      safetyTips: {
        english: [
          "Stay indoors and avoid unnecessary travel.",
          "Dress in layers and cover exposed skin if you must go outside.",
          "Keep a supply of food, water, and warm clothing in case of power outages.",
          "After the blizzard, clear snow from paths and roofs to prevent collapse.",
        ],
        hindi: [
          "अंदर रहें और अनावश्यक यात्रा से बचें।",
          "अगर बाहर जाना पड़े तो परतों में कपड़े पहनें और खुली त्वचा को ढकें।",
          "बिजली जाने की स्थिति में खाने, पानी और गर्म कपड़ों का संग्रह रखें।",
          "बर्फ़ीले तूफ़ान के बाद, रास्तों और छतों से बर्फ हटाएं।",
        ],
      },
    },
    {
      id: 9,
      name: "Drought",
      location: "California",
      magnitude: 2.9,
      description: "Severe water shortage during droughts...",
      category: "Ongoing",
      safetyTips: {
        english: [
          "Conserve water by limiting usage for non-essential tasks.",
          "Plant drought-resistant vegetation around your property.",
          "Follow local water restrictions and conservation measures.",
          "Report any water leaks immediately to prevent wastage.",
        ],
        hindi: [
          "अनावश्यक कार्यों के लिए पानी के उपयोग को सीमित करके पानी बचाएं।",
          "अपने घर के आस-पास सूखा प्रतिरोधी पौधों का रोपण करें।",
          "स्थानीय जल प्रतिबंधों और संरक्षण उपायों का पालन करें।",
          "पानी की किसी भी रिसाव की तुरंत रिपोर्ट करें।",
        ],
      },
    },
    {
      id: 10,
      name: "Heatwave",
      location: "India",
      magnitude: 4.2,
      description: "Extremely high temperatures during heatwaves...",
      category: "Upcoming",
      safetyTips: {
        english: [
          "Stay indoors during peak heat hours.",
          "Drink plenty of water to stay hydrated.",
          "Avoid strenuous outdoor activities during the day.",
          "Wear light, loose-fitting clothing to stay cool.",
        ],
        hindi: [
          "सबसे गर्म घंटों के दौरान अंदर रहें।",
          "पानी का अधिक सेवन करें ताकि शरीर में पानी की कमी न हो।",
          "दिन के समय भारी बाहरी गतिविधियों से बचें।",
          "ठंडक बनाए रखने के लिए हल्के, ढीले कपड़े पहनें।",
        ],
      },
    },
    {
      id: 11,
      name: "Cyclone",
      location: "Bangladesh",
      magnitude: 7.3,
      description: "Powerful winds and rain during cyclones...",
      category: "Upcoming",
      safetyTips: {
        english: [
          "Evacuate coastal areas if instructed by authorities.",
          "Secure doors and windows to prevent damage from high winds.",
          "Store essential supplies like food, water, and first aid.",
          "Stay away from low-lying areas prone to flooding.",
        ],
        hindi: [
          "अधिकारियों द्वारा निर्देश दिए जाने पर तटीय क्षेत्रों को खाली करें।",
          "तेज़ हवाओं से सुरक्षा के लिए दरवाजों और खिड़कियों को सुरक्षित करें।",
          "खाने, पानी और प्राथमिक चिकित्सा जैसे आवश्यक सामान संग्रहीत करें।",
          "बाढ़ प्रवण निम्न क्षेत्रों से दूर रहें।",
        ],
      },
    },
  ];

  // Find the disaster by ID
  const disaster = disasters.find((disaster) => disaster.id === parseInt(id));

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const handleLanguageChange = (lang) => setLanguage(lang);

  return (
    <div className="info-page container mx-auto p-8 min-h-screen">
      <div className="h-[500px] w-full">
        <Carousel pauseOnHover>
          <img src="/disaster.jpg" alt="Disaster 1" />
          <img src="/disaster2.jpg" alt="Disaster 2" />
          <img src="/disaster3.jpg" alt="Disaster 3" />
          <img src="/disaster4.jpg" alt="Disaster 4" />
        </Carousel>
      </div>
      {disaster ? (
        <div className="disaster-details">
          <h1 className="text-4xl font-bold mb-4">{disaster.name}</h1>
          <p className="text-lg mb-2">
            <strong>Location:</strong> {disaster.location}
          </p>
          <p className="text-lg mb-2">
            <strong>Magnitude:</strong> {disaster.magnitude}
          </p>
          <p className="text-lg mb-4">
            <strong>Description:</strong> {disaster.description}
          </p>
          <Button gradientDuoTone="purpleToPink" onClick={handleShowPopup}>
            Get Some Safety Info
          </Button>
        </div>
      ) : (
        <p>Disaster not found.</p>
      )}

      {/* Popup */}
      {showPopup && (
        <div
          className="popup-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleClosePopup}
        >
          <div
            className="popup-content bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <AiOutlineClose
              className="absolute top-2 right-2 text-white text-2xl cursor-pointer"
              onClick={handleClosePopup}
            />
            <h2 className="text-2xl font-bold text-white mb-4">
              Safety Information
            </h2>
            <ul className="list-disc pl-5 mb-4 text-white">
              {disaster.safetyTips[language].map((tip, index) => (
                <li key={index} className="mb-2">
                  {tip}
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <button
                className="bg-white text-purple-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
                onClick={() => handleLanguageChange("english")}
              >
                English
              </button>
              <button
                className="bg-white text-purple-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
                onClick={() => handleLanguageChange("hindi")}
              >
                Hindi
              </button>
              {/* Adjust the buttons to fit in one row */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
