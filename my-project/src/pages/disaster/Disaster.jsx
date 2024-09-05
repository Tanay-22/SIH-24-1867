import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./../../styles/Disaster.css";

const Disaster = () => {
  const initialDisasters = [
    {
      id: 1,
      name: "Earthquake",
      location: "California",
      magnitude: 7.2,
      description: "Severe shaking and damage",
      category: "Ongoing",
    },
    {
      id: 2,
      name: "Hurricane",
      location: "Florida",
      magnitude: 5.1,
      description: "Strong winds and flooding",
      category: "Past",
    },
    {
      id: 3,
      name: "Tornado",
      location: "Texas",
      magnitude: 4.5,
      description: "Destruction and high winds",
      category: "Upcoming",
    },
    {
      id: 4,
      name: "Flood",
      location: "New York",
      magnitude: 3.9,
      description: "Severe flooding",
      category: "Past",
    },
    {
      id: 5,
      name: "Wildfire",
      location: "Australia",
      magnitude: 6.5,
      description: "Widespread fire damage",
      category: "Ongoing",
    },
    {
      id: 6,
      name: "Tsunami",
      location: "Japan",
      magnitude: 9.1,
      description: "Massive waves and destruction",
      category: "Past",
    },
    {
      id: 7,
      name: "Volcano Eruption",
      location: "Hawaii",
      magnitude: 6.8,
      description: "Lava flow and ash clouds",
      category: "Ongoing",
    },
    {
      id: 8,
      name: "Blizzard",
      location: "Canada",
      magnitude: 3.5,
      description: "Heavy snow and freezing winds",
      category: "Upcoming",
    },
    {
      id: 9,
      name: "Drought",
      location: "California",
      magnitude: 2.9,
      description: "Severe water shortage",
      category: "Ongoing",
    },
    {
      id: 10,
      name: "Heatwave",
      location: "India",
      magnitude: 4.2,
      description: "Extremely high temperatures",
      category: "Upcoming",
    },
    {
      id: 11,
      name: "Cyclone",
      location: "Bangladesh",
      magnitude: 7.3,
      description: "Devastating winds and flooding",
      category: "Ongoing",
    },
    {
      id: 12,
      name: "Avalanche",
      location: "Nepal",
      magnitude: 4.6,
      description: "Snow collapse in mountainous regions",
      category: "Past",
    },
    {
      id: 13,
      name: "Landslide",
      location: "Indonesia",
      magnitude: 5.4,
      description: "Mountain soil collapse and destruction",
      category: "Ongoing",
    },
    {
      id: 14,
      name: "Tornado",
      location: "Kansas",
      magnitude: 5.0,
      description: "Rapidly swirling winds",
      category: "Upcoming",
    },
    {
      id: 15,
      name: "Hailstorm",
      location: "Colorado",
      magnitude: 3.7,
      description: "Large hailstones causing damage",
      category: "Ongoing",
    },
    {
      id: 16,
      name: "Sandstorm",
      location: "Sahara Desert",
      magnitude: 6.0,
      description: "Massive sandstorm with high winds",
      category: "Ongoing",
    },
    {
      id: 17,
      name: "Ice Storm",
      location: "Minnesota",
      magnitude: 3.3,
      description: "Freezing rain causing ice accumulation",
      category: "Past",
    },
    {
      id: 18,
      name: "Earthquake",
      location: "Chile",
      magnitude: 8.2,
      description: "Severe quake causing structural damage",
      category: "Past",
    },
    {
      id: 19,
      name: "Flood",
      location: "Bangladesh",
      magnitude: 4.0,
      description: "Severe flooding in river basins",
      category: "Ongoing",
    },
    {
      id: 20,
      name: "Hurricane",
      location: "Puerto Rico",
      magnitude: 6.7,
      description: "Hurricane causing major power outages",
      category: "Past",
    },
    {
      id: 21,
      name: "Cyclone",
      location: "Mozambique",
      magnitude: 5.9,
      description: "Cyclone causing major damage to coastal regions",
      category: "Ongoing",
    },
    {
      id: 22,
      name: "Heatwave",
      location: "Saudi Arabia",
      magnitude: 4.3,
      description: "Record high temperatures across the region",
      category: "Upcoming",
    },
    {
      id: 23,
      name: "Volcanic Eruption",
      location: "Iceland",
      magnitude: 7.4,
      description: "Ash cloud disrupting air travel",
      category: "Past",
    },
    {
      id: 24,
      name: "Tsunami",
      location: "Philippines",
      magnitude: 8.9,
      description: "Large tsunami hitting coastal cities",
      category: "Ongoing",
    },
    {
      id: 25,
      name: "Wildfire",
      location: "Greece",
      magnitude: 6.2,
      description: "Wildfire spreading through forests",
      category: "Upcoming",
    },
    {
      id: 26,
      name: "Avalanche",
      location: "Switzerland",
      magnitude: 3.4,
      description: "Avalanche causing road blockages in mountains",
      category: "Past",
    },
    {
      id: 27,
      name: "Hailstorm",
      location: "Texas",
      magnitude: 4.5,
      description: "Hailstorm causing extensive damage to vehicles",
      category: "Ongoing",
    },
    {
      id: 28,
      name: "Flood",
      location: "Pakistan",
      magnitude: 5.0,
      description: "Monsoon flooding affecting large areas",
      category: "Ongoing",
    },
    {
      id: 29,
      name: "Tornado",
      location: "Oklahoma",
      magnitude: 4.7,
      description: "Tornado causing destruction of homes",
      category: "Past",
    },
    {
      id: 30,
      name: "Earthquake",
      location: "Turkey",
      magnitude: 7.6,
      description: "Massive earthquake causing building collapses",
      category: "Ongoing",
    },
    {
      id: 31,
      name: "Blizzard",
      location: "Alaska",
      magnitude: 3.2,
      description: "Blizzard with low visibility and heavy snow",
      category: "Upcoming",
    },
    {
      id: 32,
      name: "Heatwave",
      location: "Australia",
      magnitude: 5.0,
      description: "Heatwave causing fires and power outages",
      category: "Upcoming",
    },
    {
      id: 33,
      name: "Typhoon",
      location: "Philippines",
      magnitude: 6.9,
      description: "Typhoon causing widespread flooding",
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
                      to={`/disasterInfo/${disaster.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {disaster.name}
                    </Link>
                  </td>
                  <td className="py-3 px-6">{disaster.location}</td>
                  <td className="py-3 px-6">{disaster.magnitude}</td>
                  <td className="py-3 px-6">{disaster.description}</td>
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
