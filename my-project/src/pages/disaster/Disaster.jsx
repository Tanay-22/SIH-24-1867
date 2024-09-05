import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./../../styles/Disaster.css";
const truncateDescription = (description, wordLimit) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};

const Disaster = () => {
  const initialDisasters = [
    {
      id: 1,
      name: "Earthquake",
      location: "California",
      magnitude: 7.2,
      description: "Severe shaking and damage caused by tectonic plate movements, resulting in significant destruction to buildings, infrastructure, and landscapes across California. Emergency services are often overwhelmed by the immediate need for aid and repair.",
      category: "Ongoing",
    },
    {
      id: 2,
      name: "Hurricane",
      location: "Florida",
      magnitude: 5.1,
      description: "Strong winds and flooding associated with hurricanes often lead to extensive damage across Florida. These powerful storms can uproot trees, damage homes, and disrupt power supplies, leading to long-term recovery efforts.",
      category: "Past",
    },
    {
      id: 3,
      name: "Tornado",
      location: "Texas",
      magnitude: 4.5,
      description: "Destruction and high winds caused by tornadoes can obliterate everything in their path. Texas, known for frequent tornadoes, often experiences significant property damage, displacement of residents, and substantial recovery operations.",
      category: "Upcoming",
    },
    {
      id: 4,
      name: "Flood",
      location: "New York",
      magnitude: 3.9,
      description: "Severe flooding in New York often results from heavy rainfall or storm surges, causing widespread damage to homes, businesses, and infrastructure. Floodwaters can contaminate drinking water supplies and lead to significant financial losses.",
      category: "Past",
    },
    {
      id: 5,
      name: "Wildfire",
      location: "Australia",
      magnitude: 6.5,
      description: "Widespread fire damage due to wildfires in Australia can destroy large areas of forest and farmland. These fires pose significant risks to wildlife, air quality, and human health, leading to extensive firefighting efforts and recovery plans.",
      category: "Ongoing",
    },
    {
      id: 6,
      name: "Tsunami",
      location: "Japan",
      magnitude: 9.1,
      description: "Massive waves and destruction caused by tsunamis in Japan can inundate coastal areas, leading to widespread damage and loss of life. The impact on infrastructure, communities, and the environment can be devastating and long-lasting.",
      category: "Past",
    },
    {
      id: 7,
      name: "Volcano Eruption",
      location: "Hawaii",
      magnitude: 6.8,
      description: "Lava flow and ash clouds from volcanic eruptions in Hawaii can cover large areas, damaging homes and infrastructure. Volcanic activity can also affect air travel and local ecosystems, creating challenges for emergency management and recovery.",
      category: "Ongoing",
    },
    {
      id: 8,
      name: "Blizzard",
      location: "Canada",
      magnitude: 3.5,
      description: "Heavy snow and freezing winds during blizzards in Canada can lead to dangerous travel conditions, power outages, and property damage. Prolonged periods of severe weather can disrupt daily life and require extensive snow removal efforts.",
      category: "Upcoming",
    },
    {
      id: 9,
      name: "Drought",
      location: "California",
      magnitude: 2.9,
      description: "Severe water shortage during droughts in California can impact agriculture, water supply, and overall quality of life. Prolonged dry conditions can lead to crop failures, water rationing, and increased wildfire risks.",
      category: "Ongoing",
    },
    {
      id: 10,
      name: "Heatwave",
      location: "India",
      magnitude: 4.2,
      description: "Extremely high temperatures during heatwaves in India can cause health emergencies, water shortages, and power grid failures. The extreme heat can impact daily life, agriculture, and increase the risk of wildfires.",
      category: "Upcoming",
    },
    {
      id: 11,
      name: "Cyclone",
      location: "Bangladesh",
      magnitude: 7.3,
      description: "Devastating winds and flooding caused by cyclones in Bangladesh can result in widespread damage to homes, infrastructure, and agricultural land. Emergency response efforts are critical in providing aid and rebuilding affected areas.",
      category: "Ongoing",
    },
    {
      id: 12,
      name: "Avalanche",
      location: "Nepal",
      magnitude: 4.6,
      description: "Snow collapse in mountainous regions of Nepal due to avalanches can cause significant destruction, block roads, and pose risks to trekkers and local communities. Rescue and recovery operations are often challenging and complex.",
      category: "Past",
    },
    {
      id: 13,
      name: "Landslide",
      location: "Indonesia",
      magnitude: 5.4,
      description: "Mountain soil collapse and destruction from landslides in Indonesia can bury villages and disrupt transportation networks. The aftermath often involves extensive search and rescue operations and efforts to stabilize the affected areas.",
      category: "Ongoing",
    },
    {
      id: 14,
      name: "Tornado",
      location: "Kansas",
      magnitude: 5.0,
      description: "Rapidly swirling winds from tornadoes in Kansas can cause severe damage to homes and infrastructure. The intense winds can uproot trees, destroy buildings, and create hazardous conditions for residents.",
      category: "Upcoming",
    },
    {
      id: 15,
      name: "Hailstorm",
      location: "Colorado",
      magnitude: 3.7,
      description: "Large hailstones causing damage during hailstorms in Colorado can impact vehicles, roofs, and crops. The impact of hail can lead to significant repair costs and disruptions in agricultural production.",
      category: "Ongoing",
    },
    {
      id: 16,
      name: "Sandstorm",
      location: "Sahara Desert",
      magnitude: 6.0,
      description: "Massive sandstorm with high winds in the Sahara Desert can reduce visibility, damage infrastructure, and affect air quality. These storms can create challenging conditions for travel and daily activities.",
      category: "Ongoing",
    },
    {
      id: 17,
      name: "Ice Storm",
      location: "Minnesota",
      magnitude: 3.3,
      description: "Freezing rain causing ice accumulation during ice storms in Minnesota can result in hazardous road conditions, power outages, and significant property damage. The ice buildup can create dangerous situations for residents.",
      category: "Past",
    },
    {
      id: 18,
      name: "Earthquake",
      location: "Chile",
      magnitude: 8.2,
      description: "Severe quake causing structural damage in Chile can lead to widespread destruction and loss of life. The aftermath involves extensive rebuilding efforts, humanitarian aid, and long-term recovery operations.",
      category: "Past",
    },
    {
      id: 19,
      name: "Flood",
      location: "Bangladesh",
      magnitude: 4.0,
      description: "Severe flooding in river basins of Bangladesh can inundate large areas, displace communities, and cause extensive damage to homes and infrastructure. Floodwaters can also lead to health risks and long-term recovery challenges.",
      category: "Ongoing",
    },
    {
      id: 20,
      name: "Hurricane",
      location: "Puerto Rico",
      magnitude: 6.7,
      description: "Hurricane causing major power outages in Puerto Rico can disrupt daily life, cause property damage, and create challenges for emergency services. Recovery efforts often involve rebuilding infrastructure and restoring utilities.",
      category: "Past",
    },
    {
      id: 21,
      name: "Cyclone",
      location: "Mozambique",
      magnitude: 5.9,
      description: "Cyclone causing major damage to coastal regions of Mozambique can lead to flooding, destruction of homes, and significant disruption to communities. Emergency response and recovery efforts are crucial in affected areas.",
      category: "Ongoing",
    },
    {
      id: 22,
      name: "Heatwave",
      location: "Saudi Arabia",
      magnitude: 4.3,
      description: "Record high temperatures across Saudi Arabia during heatwaves can lead to health emergencies, water shortages, and strain on power grids. The extreme heat impacts daily life and increases the risk of heat-related illnesses.",
      category: "Upcoming",
    },
    {
      id: 23,
      name: "Volcanic Eruption",
      location: "Iceland",
      magnitude: 7.4,
      description: "Ash cloud disrupting air travel in Iceland due to volcanic eruptions can cause major disruptions to aviation and pose health risks. The volcanic activity can also affect local communities and infrastructure.",
      category: "Past",
    },
    {
      id: 24,
      name: "Tsunami",
      location: "Philippines",
      magnitude: 8.9,
      description: "Large tsunami hitting coastal cities in the Philippines can lead to widespread devastation, loss of life, and extensive damage to infrastructure. The aftermath involves significant humanitarian aid and rebuilding efforts.",
      category: "Ongoing",
    },
    {
      id: 25,
      name: "Wildfire",
      location: "Greece",
      magnitude: 6.2,
      description: "Wildfire spreading through forests in Greece can cause extensive damage to natural landscapes, homes, and communities. Firefighting efforts are often intense, and recovery involves restoring affected areas and managing environmental impacts.",
      category: "Upcoming",
    },
    {
      id: 26,
      name: "Avalanche",
      location: "Switzerland",
      magnitude: 3.4,
      description: "Avalanche causing road blockages in mountainous regions of Switzerland can disrupt travel, damage property, and pose risks to residents and tourists. Recovery efforts focus on clearing roads and ensuring safety in affected areas.",
      category: "Past",
    },
    {
      id: 27,
      name: "Hailstorm",
      location: "Texas",
      magnitude: 4.5,
      description: "Hailstorm causing extensive damage to vehicles and property in Texas can lead to significant repair costs and disruptions. The impact of large hailstones can be severe, affecting both homes and businesses.",
      category: "Ongoing",
    },
    {
      id: 28,
      name: "Flood",
      location: "Pakistan",
      magnitude: 5.0,
      description: "Monsoon flooding affecting large areas of Pakistan can cause widespread damage to infrastructure, homes, and agricultural land. The flooding often results in displacement of communities and requires extensive relief and recovery efforts.",
      category: "Ongoing",
    },
    {
      id: 29,
      name: "Tornado",
      location: "Oklahoma",
      magnitude: 4.7,
      description: "Tornado causing destruction of homes and infrastructure in Oklahoma can result in significant property damage and displacement. The intense winds and swirling patterns create hazardous conditions for residents and responders.",
      category: "Past",
    },
    {
      id: 30,
      name: "Earthquake",
      location: "Turkey",
      magnitude: 7.6,
      description: "Massive earthquake causing building collapses in Turkey can lead to widespread destruction, loss of life, and extensive rebuilding needs. Emergency response efforts are crucial in addressing immediate needs and long-term recovery.",
      category: "Ongoing",
    },
    {
      id: 31,
      name: "Blizzard",
      location: "Alaska",
      magnitude: 3.2,
      description: "Blizzard with low visibility and heavy snow in Alaska can create dangerous travel conditions, disrupt daily life, and require extensive snow removal efforts. The severe weather conditions impact transportation and infrastructure.",
      category: "Upcoming",
    },
    {
      id: 32,
      name: "Heatwave",
      location: "Australia",
      magnitude: 5.0,
      description: "Heatwave causing fires and power outages in Australia can lead to severe impacts on health, environment, and infrastructure. The extreme temperatures pose risks to communities and require significant emergency response and recovery efforts.",
      category: "Upcoming",
    },
    {
      id: 33,
      name: "Typhoon",
      location: "Philippines",
      magnitude: 6.9,
      description: "Typhoon causing widespread flooding in the Philippines can result in extensive damage to homes, infrastructure, and agricultural land. The heavy rains and strong winds create challenging conditions for emergency response and recovery.",
      category: "Ongoing",
    },
  ];
  
  const [disasters, setDisasters] = useState(initialDisasters);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [sortOrder, setSortOrder] = useState("default");
  const [stateFilter, setStateFilter] = useState("");
  const [magnitudeOrder, setMagnitudeOrder] = useState("high-to-low");

  // Handle search input
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Filter by category
  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
  };

  // Sorting by state, city, and magnitude
  const handleSortChange = (event) => {
    const sort = event.target.value;
    setSortOrder(sort);

    if (sort === "state" || sort === "city") {
      setStateFilter("");
    }
  };

  // Handle magnitude sorting
  const handleMagnitudeOrderChange = (event) => {
    setMagnitudeOrder(event.target.value);
  };

  // Filter by state/city input
  const handleStateFilterChange = (event) => {
    setStateFilter(event.target.value);
  };

  // Get filtered and sorted disasters
  const filteredDisasters = disasters.filter((disaster) => {
    const matchesCategory = filter === "All" || disaster.category === filter;
    const matchesSearch =
      disaster.name.toLowerCase().includes(search.toLowerCase()) ||
      disaster.location.toLowerCase().includes(search.toLowerCase());
    const matchesStateFilter =
      stateFilter === "" ||
      disaster.location.toLowerCase().includes(stateFilter.toLowerCase());
    return matchesCategory && matchesSearch && matchesStateFilter;
  });

  const sortedDisasters = filteredDisasters.sort((a, b) => {
    if (sortOrder === "state" || sortOrder === "city") {
      return a.location.localeCompare(b.location);
    } else if (sortOrder === "magnitude") {
      return magnitudeOrder === "high-to-low"
        ? b.magnitude - a.magnitude
        : a.magnitude - b.magnitude;
    }
    return 0; // Default sorting
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedDisasters.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 heading">Disaster Tracker</h1>

      {/* Filter and Search Section */}
      <div className="filter-section mb-6 flex flex-wrap justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <label className="text-lg font-semibold">Filter by Category:</label>
          <select
            className="form-select rounded-lg border-gray-300 text-gray-600 focus:ring-blue-500 focus:border-blue-500"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Past">Past</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Upcoming">Upcoming</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <label className="text-lg font-semibold">Search:</label>
          <input
            type="text"
            className="form-input rounded-lg border-gray-300 text-gray-600 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search by name or location"
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* Sort by State/City/Magnitude */}
        <div className="flex items-center space-x-4">
          <label className="text-lg font-semibold">Sort by:</label>
          <select
            className="form-select rounded-lg border-gray-300 text-gray-600 focus:ring-blue-500 focus:border-blue-500"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="default">Default</option>
            <option value="state">State</option>
            <option value="city">City</option>
            <option value="magnitude">Magnitude</option>
          </select>
        </div>

        {/* Input for State/City Filter */}
        {(sortOrder === "state" || sortOrder === "city") && (
          <div className="flex items-center space-x-4">
            <label className="text-lg font-semibold">
              Enter {sortOrder === "state" ? "State" : "City"}:
            </label>
            <input
              type="text"
              className="form-input rounded-lg border-gray-300 text-gray-600 focus:ring-blue-500 focus:border-blue-500"
              placeholder={`Enter ${sortOrder === "state" ? "State" : "City"}`}
              value={stateFilter}
              onChange={handleStateFilterChange}
            />
          </div>
        )}

        {/* Magnitude Order */}
        {sortOrder === "magnitude" && (
          <div className="flex items-center space-x-4">
            <label className="text-lg font-semibold">Order by Magnitude:</label>
            <select
              className="form-select rounded-lg border-gray-300 text-gray-600 focus:ring-blue-500 focus:border-blue-500"
              value={magnitudeOrder}
              onChange={handleMagnitudeOrderChange}
            >
              <option value="high-to-low">High to Low</option>
              <option value="low-to-high">Low to High</option>
            </select>
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="table-container overflow-x-auto mb-8">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-500 text-white">
            <tr className="text-left text-sm uppercase font-semibold tracking-wide">
              <th className="py-3 px-6">S.No</th>
              <th className="py-3 px-6">Disaster Name</th>
              <th className="py-3 px-6">Location</th>
              <th className="py-3 px-6">Magnitude</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6">Category</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {currentItems.length > 0 ? (
              currentItems.map((disaster, index) => (
                <tr
                  key={disaster.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{indexOfFirstItem + index + 1}</td>
                  {/* Link to DisasterInfo */}
                  <td className="py-3 px-6">
                    <Link
                      to={`/infoPage/${disaster.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {disaster.name}
                    </Link>
                  </td>
                  <td className="py-3 px-6">{disaster.location}</td>
                  <td className="py-3 px-6">{disaster.magnitude}</td>
                  <td className="py-3 px-6">
                    {truncateDescription(disaster.description, 6)}
                  </td>
                  <td className="py-3 px-6">
                    <span
                      className={`text-sm font-semibold py-1 px-3 rounded-full ${
                        disaster.category === "Ongoing"
                          ? "bg-yellow-100 text-yellow-800"
                          : disaster.category === "Past"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {disaster.category}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-4 px-6 text-center text-gray-600" colSpan="6">
                  No disasters found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-container flex justify-center items-center">
        {Array.from({
          length: Math.ceil(sortedDisasters.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Disaster;
