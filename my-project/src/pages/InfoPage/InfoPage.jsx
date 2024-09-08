import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./InfoPage.css"; // Add your styles here
import { Button, Carousel } from "flowbite-react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const InfoPage = () => {
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [language, setLanguage] = useState("english");
  const [disaster, setDisaster] = useState(null);

  useEffect(() => {
    // Fetch disaster details by ID
    axios.get(`http://localhost:3000/api/disasters/${id}`)
      .then((response) => {
        setDisaster(response.data);
      })
      .catch((error) => console.error("Error fetching disaster data:", error));
  }, [id]);

  // Hardcoded safety tips for each type of disaster
  const hardcodedSafetyTips = {
    earthquake: {
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
    hurricane: {
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
    flood: {
      english: [
        "Move to higher ground immediately.",
        "Avoid walking or driving through floodwaters.",
        "Listen to weather reports and follow evacuation orders.",
        "Stay away from downed power lines and electrical hazards.",
      ],
      hindi: [
        "तत्काल ऊँचाई वाले स्थान पर जाएं।",
        "बाढ़ के पानी में चलने या गाड़ी चलाने से बचें।",
        "मौसम की रिपोर्ट सुनें और निकासी के आदेशों का पालन करें।",
        "गिरे हुए बिजली के तारों और विद्युत खतरों से दूर रहें।",
      ],
    },
    tornado: {
      english: [
        "Seek shelter in a basement or small, windowless interior room.",
        "If outside, lie flat in a low-lying area.",
        "Avoid using elevators during a tornado.",
        "After the tornado, avoid downed power lines and report injuries.",
      ],
      hindi: [
        "बसेमेंट या छोटी, बिना खिड़की वाले आंतरिक कमरे में आश्रय लें।",
        "यदि बाहर हैं, तो एक निम्न-स्थानीय क्षेत्र में लेट जाएं।",
        "टॉरनेडो के दौरान लिफ्ट का उपयोग न करें।",
        "टॉरनेडो के बाद, गिरे हुए बिजली के तारों से दूर रहें और चोटों की रिपोर्ट करें।",
      ],
    },
    wildfire: {
      english: [
        "Evacuate immediately if told to do so by authorities.",
        "Avoid using phones and electronic devices during a fire.",
        "Close all windows and doors to prevent smoke from entering.",
        "After evacuation, do not return until authorities declare it safe.",
      ],
      hindi: [
        "यदि अधिकारियों द्वारा ऐसा करने के लिए कहा जाए तो तुरंत निकासी करें।",
        "आग के दौरान फोन और इलेक्ट्रॉनिक उपकरणों का उपयोग न करें।",
        "धुएं के अंदर आने से रोकने के लिए सभी खिड़कियों और दरवाजों को बंद करें।",
        "निकासी के बाद, अधिकारियों द्वारा सुरक्षित घोषित किए बिना लौटें नहीं।",
      ],
    },
    tsunami: {
      english: [
        "Move to higher ground and stay there.",
        "Do not return to the coast until authorities declare it safe.",
        "Avoid using the phone except for emergencies.",
        "Listen to emergency broadcasts for updates.",
      ],
      hindi: [
        "ऊँचाई वाले स्थान पर जाएं और वहीं रहें।",
        "अधिकारियों द्वारा सुरक्षित घोषित किए बिना तट पर वापस न आएं।",
        "आपातकालीन स्थिति के अलावा फोन का उपयोग न करें।",
        "अपडेट्स के लिए आपातकालीन प्रसारण सुनें।",
      ],
    },
    volcaniceruption: {
      english: [
        "Move away from the volcanic area to avoid ash and lava flows.",
        "Close windows and doors to keep ash out.",
        "Follow evacuation orders from authorities.",
        "Avoid driving unless absolutely necessary due to ashfall.",
      ],
      hindi: [
        "राख और लावा प्रवाह से बचने के लिए ज्वालामुखी क्षेत्र से दूर जाएं।",
        "राख को बाहर रखने के लिए खिड़कियाँ और दरवाजे बंद करें।",
        "अधिकारियों द्वारा निकासी के आदेशों का पालन करें।",
        "राख के गिरने के कारण अत्यावश्यक न हो तो गाड़ी चलाने से बचें।",
      ],
    },
    extremeheat: {
      english: [
        "Stay hydrated by drinking plenty of water.",
        "Avoid outdoor activities during peak heat hours.",
        "Stay in air-conditioned or cool environments.",
        "Check on vulnerable individuals such as the elderly and children.",
      ],
      hindi: [
        "अधिक पानी पीकर हाइड्रेटेड रहें।",
        "चरम गर्मी के घंटों के दौरान बाहरी गतिविधियों से बचें।",
        "एयर-कंडीशन्ड या ठंडे वातावरण में रहें।",
        "बुजुर्गों और बच्चों जैसे संवेदनशील व्यक्तियों की जाँच करें।",
      ],
    },
    severestorm: {
      english: [
        "Seek shelter indoors and away from windows.",
        "Prepare an emergency kit with essentials.",
        "Stay informed through weather updates.",
        "Avoid traveling during severe storms.",
      ],
      hindi: [
        "अंदर आश्रय लें और खिड़कियों से दूर रहें।",
        "आवश्यक वस्तुओं के साथ एक आपातकालीन किट तैयार करें।",
        "मौसम अपडेट के माध्यम से सूचित रहें।",
        "गंभीर तूफानों के दौरान यात्रा से बचें।",
      ],
    },
    landslide: {
      english: [
        "Move to higher ground if landslides are occurring.",
        "Stay away from hillsides and areas prone to landslides.",
        "Monitor weather reports for landslide warnings.",
        "Be cautious of secondary landslides and falling debris.",
      ],
      hindi: [
        "यदि भूस्खलन हो रहे हैं, तो ऊँचाई वाले स्थान पर जाएं।",
        "पहाड़ी ढलानों और भूस्खलन के प्रति संवेदनशील क्षेत्रों से दूर रहें।",
        "भूस्खलन की चेतावनियों के लिए मौसम रिपोर्ट देखें।",
        "माध्यमिक भूस्खलनों और गिरते मलबे से सतर्क रहें।",
      ],
    },
    extremecold: {
      english: [
        "Wear multiple layers of clothing to stay warm.",
        "Avoid prolonged exposure to cold temperatures.",
        "Stay indoors as much as possible.",
        "Check on vulnerable individuals, such as the elderly and those with medical conditions.",
      ],
      hindi: [
        "गर्म रहने के लिए कई परतों में कपड़े पहनें।",
        "ठंडी तापमान के संपर्क में लंबे समय तक न रहें।",
        "जितना संभव हो सके, घर के अंदर रहें।",
        "संवेदनशील व्यक्तियों, जैसे बुजुर्ग और चिकित्सा स्थितियों वाले लोगों की जाँच करें।",
      ],
    },
    avalanche: {
      english: [
        "Avoid traveling in avalanche-prone areas during winter.",
        "Carry avalanche safety equipment, including beacons and probes.",
        "Stay informed about avalanche warnings and conditions.",
        "If caught in an avalanche, try to move to the side and stay on top of the snow.",
      ],
      hindi: [
        "सर्दियों के दौरान भूस्खलन-प्रवण क्षेत्रों में यात्रा से बचें।",
        "एवलांच सुरक्षा उपकरण, जिसमें बीकन्स और प्रॉब्स शामिल हैं, ले जाएं।",
        "एवलांच चेतावनियों और परिस्थितियों के बारे में सूचित रहें।",
        "यदि एवलांच में फंस जाएं, तो साइड में जाने की कोशिश करें और स्नो की सतह पर रहें।",
      ],
    },
  };
  
  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const handleLanguageChange = (lang) => setLanguage(lang);

  return (
    <div className="info-page container mx-auto p-8 min-h-screen">
      <div className="h-[500px] w-full">
        <Carousel pauseOnHover slideInterval={2000}>
          <img src="/disaster.jpg" alt="Disaster 1" />
          <img src="/disaster2.jpg" alt="Disaster 2" />
          <img src="/disaster3.jpg" alt="Disaster 3" />
          <img src="/disaster4.jpg" alt="Disaster 4" />
        </Carousel>
      </div>
      {disaster ? (
        <div className="disaster-details">
          <h1 className="text-4xl font-bold mb-4">{disaster.disaster_type}</h1>
          <p className="text-lg mb-2">
            <strong>Location:</strong> {disaster.location}
          </p>
          <p className="text-lg mb-2">
            <strong>Date:</strong> {disaster.date}
          </p>
          <p className="text-lg mb-4">
            <strong>Description:</strong> {disaster.short_description}
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
              {disaster && hardcodedSafetyTips[disaster.disaster_type] ? (
                (hardcodedSafetyTips[disaster.disaster_type][language] || []).map((tip, index) => (
                  <li key={index} className="mb-2">
                    {tip}
                  </li>
                ))
              ) : (
                <li className="mb-2">No safety tips available for this disaster.</li>
              )}
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
