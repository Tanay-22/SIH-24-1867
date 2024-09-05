import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./InfoPage.css"; // Create this CSS file for styling
import { Carousel } from "flowbite-react";

const InfoPage = () => {
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);

  // Example disaster data
  const disasters = [
    {
      id: 1,
      name: "Earthquake",
      location: "California",
      magnitude: 7.2,
      description:
        "Severe shaking and damage caused by tectonic plate movements, resulting in significant destruction to buildings, infrastructure, and landscapes across California. Emergency services are often overwhelmed by the immediate need for aid and repair.",
      category: "Ongoing",
    },
    {
      id: 2,
      name: "Hurricane",
      location: "Florida",
      magnitude: 5.1,
      description:
        "Strong winds and flooding associated with hurricanes often lead to extensive damage across Florida. These powerful storms can uproot trees, damage homes, and disrupt power supplies, leading to long-term recovery efforts.",
      category: "Past",
    },
    {
      id: 3,
      name: "Tornado",
      location: "Texas",
      magnitude: 4.5,
      description:
        "Destruction and high winds caused by tornadoes can obliterate everything in their path. Texas, known for frequent tornadoes, often experiences significant property damage, displacement of residents, and substantial recovery operations.",
      category: "Upcoming",
    },
    {
      id: 4,
      name: "Flood",
      location: "New York",
      magnitude: 3.9,
      description:
        "Severe flooding in New York often results from heavy rainfall or storm surges, causing widespread damage to homes, businesses, and infrastructure. Floodwaters can contaminate drinking water supplies and lead to significant financial losses.",
      category: "Past",
    },
    {
      id: 5,
      name: "Wildfire",
      location: "Australia",
      magnitude: 6.5,
      description:
        "Widespread fire damage due to wildfires in Australia can destroy large areas of forest and farmland. These fires pose significant risks to wildlife, air quality, and human health, leading to extensive firefighting efforts and recovery plans.",
      category: "Ongoing",
    },
    {
      id: 6,
      name: "Tsunami",
      location: "Japan",
      magnitude: 9.1,
      description:
        "Massive waves and destruction caused by tsunamis in Japan can inundate coastal areas, leading to widespread damage and loss of life. The impact on infrastructure, communities, and the environment can be devastating and long-lasting.",
      category: "Past",
    },
    {
      id: 7,
      name: "Volcano Eruption",
      location: "Hawaii",
      magnitude: 6.8,
      description:
        "Lava flow and ash clouds from volcanic eruptions in Hawaii can cover large areas, damaging homes and infrastructure. Volcanic activity can also affect air travel and local ecosystems, creating challenges for emergency management and recovery.",
      category: "Ongoing",
    },
    {
      id: 8,
      name: "Blizzard",
      location: "Canada",
      magnitude: 3.5,
      description:
        "Heavy snow and freezing winds during blizzards in Canada can lead to dangerous travel conditions, power outages, and property damage. Prolonged periods of severe weather can disrupt daily life and require extensive snow removal efforts.",
      category: "Upcoming",
    },
    {
      id: 9,
      name: "Drought",
      location: "California",
      magnitude: 2.9,
      description:
        "Severe water shortage during droughts in California can impact agriculture, water supply, and overall quality of life. Prolonged dry conditions can lead to crop failures, water rationing, and increased wildfire risks.",
      category: "Ongoing",
    },
    {
      id: 10,
      name: "Heatwave",
      location: "India",
      magnitude: 4.2,
      description:
        "Extremely high temperatures during heatwaves in India can cause health emergencies, water shortages, and power grid failures. The extreme heat can impact daily life, agriculture, and increase the risk of wildfires.",
      category: "Upcoming",
    },
    {
      id: 11,
      name: "Cyclone",
      location: "Bangladesh",
      magnitude: 7.3,
      description:
        "Devastating winds and flooding caused by cyclones in Bangladesh can result in widespread damage to homes, infrastructure, and agricultural land. Emergency response efforts are critical in providing aid and rebuilding affected areas.",
      category: "Ongoing",
    },
    {
      id: 12,
      name: "Avalanche",
      location: "Nepal",
      magnitude: 4.6,
      description:
        "Snow collapse in mountainous regions of Nepal due to avalanches can cause significant destruction, block roads, and pose risks to trekkers and local communities. Rescue and recovery operations are often challenging and complex.",
      category: "Past",
    },
    {
      id: 13,
      name: "Landslide",
      location: "Indonesia",
      magnitude: 5.4,
      description:
        "Mountain soil collapse and destruction from landslides in Indonesia can bury villages and disrupt transportation networks. The aftermath often involves extensive search and rescue operations and efforts to stabilize the affected areas.",
      category: "Ongoing",
    },
    {
      id: 14,
      name: "Tornado",
      location: "Kansas",
      magnitude: 5.0,
      description:
        "Rapidly swirling winds from tornadoes in Kansas can cause severe damage to homes and infrastructure. The intense winds can uproot trees, destroy buildings, and create hazardous conditions for residents.",
      category: "Upcoming",
    },
    {
      id: 15,
      name: "Hailstorm",
      location: "Colorado",
      magnitude: 3.7,
      description:
        "Large hailstones causing damage during hailstorms in Colorado can impact vehicles, roofs, and crops. The impact of hail can lead to significant repair costs and disruptions in agricultural production.",
      category: "Ongoing",
    },
    {
      id: 16,
      name: "Sandstorm",
      location: "Sahara Desert",
      magnitude: 6.0,
      description:
        "Massive sandstorm with high winds in the Sahara Desert can reduce visibility, damage infrastructure, and affect air quality. These storms can create challenging conditions for travel and daily activities.",
      category: "Ongoing",
    },
    {
      id: 17,
      name: "Ice Storm",
      location: "Minnesota",
      magnitude: 3.3,
      description:
        "Freezing rain causing ice accumulation during ice storms in Minnesota can result in hazardous road conditions, power outages, and significant property damage. The ice buildup can create dangerous situations for residents.",
      category: "Past",
    },
    {
      id: 18,
      name: "Earthquake",
      location: "Chile",
      magnitude: 8.2,
      description:
        "Severe quake causing structural damage in Chile can lead to widespread destruction and loss of life. The aftermath involves extensive rebuilding efforts, humanitarian aid, and long-term recovery operations.",
      category: "Past",
    },
    {
      id: 19,
      name: "Flood",
      location: "Bangladesh",
      magnitude: 4.0,
      description:
        "Severe flooding in river basins of Bangladesh can inundate large areas, displace communities, and cause extensive damage to homes and infrastructure. Floodwaters can also lead to health risks and long-term recovery challenges.",
      category: "Ongoing",
    },
    {
      id: 20,
      name: "Hurricane",
      location: "Puerto Rico",
      magnitude: 6.7,
      description:
        "Hurricane causing major power outages in Puerto Rico can disrupt daily life, cause property damage, and create challenges for emergency services. Recovery efforts often involve rebuilding infrastructure and restoring utilities.",
      category: "Past",
    },
    {
      id: 21,
      name: "Cyclone",
      location: "Mozambique",
      magnitude: 5.9,
      description:
        "Cyclone causing major damage to coastal regions of Mozambique can lead to flooding, destruction of homes, and significant disruption to communities. Emergency response and recovery efforts are crucial in affected areas.",
      category: "Ongoing",
    },
    {
      id: 22,
      name: "Heatwave",
      location: "Saudi Arabia",
      magnitude: 4.3,
      description:
        "Record high temperatures across Saudi Arabia during heatwaves can lead to health emergencies, water shortages, and strain on power grids. The extreme heat impacts daily life and increases the risk of heat-related illnesses.",
      category: "Upcoming",
    },
    {
      id: 23,
      name: "Volcanic Eruption",
      location: "Iceland",
      magnitude: 7.4,
      description:
        "Ash cloud disrupting air travel in Iceland due to volcanic eruptions can cause major disruptions to aviation and pose health risks. The volcanic activity can also affect local communities and infrastructure.",
      category: "Past",
    },
    {
      id: 24,
      name: "Tsunami",
      location: "Philippines",
      magnitude: 8.9,
      description:
        "Large tsunami hitting coastal cities in the Philippines can lead to widespread devastation, loss of life, and extensive damage to infrastructure. The aftermath involves significant humanitarian aid and rebuilding efforts.",
      category: "Ongoing",
    },
    {
      id: 25,
      name: "Wildfire",
      location: "Greece",
      magnitude: 6.2,
      description:
        "Wildfire spreading through forests in Greece can cause extensive damage to natural landscapes, homes, and communities. Firefighting efforts are often intense, and recovery involves restoring affected areas and managing environmental impacts.",
      category: "Upcoming",
    },
    {
      id: 26,
      name: "Avalanche",
      location: "Switzerland",
      magnitude: 3.4,
      description:
        "Avalanche causing road blockages in mountainous regions of Switzerland can disrupt travel, damage property, and pose risks to residents and tourists. Recovery efforts focus on clearing roads and ensuring safety in affected areas.",
      category: "Past",
    },
    {
      id: 27,
      name: "Hailstorm",
      location: "Texas",
      magnitude: 4.5,
      description:
        "Hailstorm causing extensive damage to vehicles and property in Texas can lead to significant repair costs and disruptions. The impact of large hailstones can be severe, affecting both homes and businesses.",
      category: "Ongoing",
    },
    {
      id: 28,
      name: "Flood",
      location: "Pakistan",
      magnitude: 5.0,
      description:
        "Monsoon flooding affecting large areas of Pakistan can cause widespread damage to infrastructure, homes, and agricultural land. The flooding often results in displacement of communities and requires extensive relief and recovery efforts.",
      category: "Ongoing",
    },
    {
      id: 29,
      name: "Tornado",
      location: "Oklahoma",
      magnitude: 4.7,
      description:
        "Tornado causing destruction of homes and infrastructure in Oklahoma can result in significant property damage and displacement. The intense winds and swirling patterns create hazardous conditions for residents and responders.",
      category: "Past",
    },
    {
      id: 30,
      name: "Earthquake",
      location: "Turkey",
      magnitude: 7.6,
      description:
        "Massive earthquake causing building collapses in Turkey can lead to widespread destruction, loss of life, and extensive rebuilding needs. Emergency response efforts are crucial in addressing immediate needs and long-term recovery.",
      category: "Ongoing",
    },
    {
      id: 31,
      name: "Blizzard",
      location: "Alaska",
      magnitude: 3.2,
      description:
        "Blizzard with low visibility and heavy snow in Alaska can create dangerous travel conditions, disrupt daily life, and require extensive snow removal efforts. The severe weather conditions impact transportation and infrastructure.",
      category: "Upcoming",
    },
    {
      id: 32,
      name: "Heatwave",
      location: "Australia",
      magnitude: 5.0,
      description:
        "Heatwave causing fires and power outages in Australia can lead to severe impacts on health, environment, and infrastructure. The extreme temperatures pose risks to communities and require significant emergency response and recovery efforts.",
      category: "Upcoming",
    },
    {
      id: 33,
      name: "Typhoon",
      location: "Philippines",
      magnitude: 6.9,
      description:
        "Typhoon causing widespread flooding in the Philippines can result in extensive damage to homes, infrastructure, and agricultural land. The heavy rains and strong winds create challenging conditions for emergency response and recovery.",
      category: "Ongoing",
    },
  ];

  // Find the disaster by ID
  const disaster = disasters.find((disaster) => disaster.id === parseInt(id));

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

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
          <button className="btn-primary" onClick={handleShowPopup}>
            Get Some Safety Info
          </button>
        </div>
      ) : (
        <p>Disaster not found.</p>
      )}

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Safety Information</h2>
            <p>
              Here you can include safety information relevant to the selected
              disaster.
            </p>
            <button className="btn-close" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
