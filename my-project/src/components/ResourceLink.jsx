import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./../styles/resourcelink.css";
const ResourcesLinks = () => {
  const resources = [
    {
      title: "National Disaster Management Authority",
      description:
        "Official government site providing guidelines, reports, and resources for disaster management.",
      link: "https://ndma.gov.in",
    },
    {
      title: "UNDRR (United Nations Office for Disaster Risk Reduction)",
      description:
        "A UN platform providing global strategies, campaigns, and knowledge on disaster risk reduction.",
      link: "https://www.undrr.org",
    },
    {
      title: "International Federation of Red Cross",
      description:
        "Disaster response and humanitarian aid information provided by the Red Cross.",
      link: "https://www.ifrc.org",
    },
    {
      title: "World Health Organization (WHO) Emergencies",
      description:
        "Health guidelines and response frameworks for dealing with natural disasters.",
      link: "https://www.who.int/emergencies",
    },
    {
      title: "FEMA (Federal Emergency Management Agency)",
      description:
        "US-based agency providing disaster response information and resources.",
      link: "https://www.fema.gov",
    },
  ];

  return (
    <div className="mt-2 p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Resources and Links
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          >
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold text-xl hover:text-blue-800 flex items-center justify-between"
            >
              {resource.title}
              <FaExternalLinkAlt size={16} className="ml-2 text-blue-600" />
            </a>
            <p className="text-gray-600 mt-2">{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesLinks;
