import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const truncateDescription = (description, wordLimit) => {
  if (typeof description !== "string" || !description.trim()) {
    return "No description available";
  }

  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};

const Disaster = () => {
  const [disasters, setDisasters] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [sortOrder, setSortOrder] = useState("default");
  const [stateFilter, setStateFilter] = useState("");
  const [dateOrder, setDateOrder] = useState("new-to-old");

  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsResponse, tweetResponse] = await Promise.all([
          axios.get("http://localhost:3000/api/final_news"),
          axios.get("http://localhost:3000/api/final_tweet")
        ]);

        const newsData = newsResponse.data.map(item => ({
          ...item,
          _id: item._id,
          disaster_type: item.disaster_type || "Unknown",
          location: item.location || "Unknown",
          date: item.date,
          short_description: item.short_description,
          category: getCategoryByDate(item.date)
        }));

        const tweetData = tweetResponse.data.map(item => ({
          ...item,
          _id: item._id,
          disaster_type: item.disaster_type || "Unknown",
          location: item.location || "Unknown",
          date: item.date,
          short_description: item.short_description,
          category: getCategoryByDate(item.date)
        }));

        setDisasters([...newsData, ...tweetData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (event) => {
    const sort = event.target.value;
    setSortOrder(sort);
    setCurrentPage(1);
    if (sort === "state" || sort === "city") {
      setStateFilter("");
    }
  };

  const handleDateOrderChange = (event) => {
    setDateOrder(event.target.value);
  };

  const handleStateFilterChange = (event) => {
    setStateFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleRowClick = (id) => {
    navigate(`/infoPage/${id}`); // Navigate to InfoPage with disaster ID
  };

  const getCategoryByDate = (date) => {
    const disasterDate = new Date(date);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return disasterDate < oneWeekAgo ? "Past" : "Ongoing";
  };

  const isValidDisaster = (disaster) => {
    return (
      disaster.disaster_type &&
      disaster.location &&
      disaster.date &&
      disaster.short_description &&
      !isNaN(new Date(disaster.date).getTime())
    );
  };

  const filteredDisasters = disasters
    .filter((disaster) => {
      const matchesCategory = filter === "All" || disaster.category === filter;
      const matchesSearch =
        (disaster.disaster_type && disaster.disaster_type.toLowerCase().includes(search.toLowerCase())) ||
        (disaster.location && disaster.location.toLowerCase().includes(search.toLowerCase()));
      const matchesStateFilter =
        stateFilter === "" ||
        (disaster.location && disaster.location.toLowerCase().includes(stateFilter.toLowerCase()));

      return (
        isValidDisaster(disaster) &&
        matchesCategory &&
        matchesSearch &&
        matchesStateFilter
      );
    });

  const sortedDisasters = filteredDisasters.slice().sort((a, b) => {
    if (sortOrder === "date") {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateOrder === "new-to-old" ? dateB - dateA : dateA - dateB;
    }
    if (sortOrder === "state") {
      return a.location.localeCompare(b.location);
    }
    if (sortOrder === "city") {
      return a.location.localeCompare(b.location);
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedDisasters.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-8 min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">Disaster Tracker</h1>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap justify-between items-center">
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
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <label className="text-lg font-semibold">Search:</label>
          <input
            type="text"
            className="form-input rounded-lg border-gray-300 text-gray-600 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search by disaster type or location"
            value={search}
            onChange={handleSearch}
          />
        </div>

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
            <option value="date">Date</option>
          </select>
        </div>

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

        {sortOrder === "date" && (
          <div className="flex items-center space-x-4">
            <label className="text-lg font-semibold">Order by Date:</label>
            <select
              className="form-select rounded-lg border-gray-300 text-gray-600 focus:ring-blue-500 focus:border-blue-500"
              value={dateOrder}
              onChange={handleDateOrderChange}
            >
              <option value="new-to-old">New to Old</option>
              <option value="old-to-new">Old to New</option>
            </select>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Disaster Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((disaster) => (
              <tr
                key={disaster._id}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleRowClick(disaster._id)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{disaster.disaster_type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disaster.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(disaster.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{truncateDescription(disaster.short_description, 10)}</td>
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
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg">{currentPage}</span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= disasters.length}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Disaster;
