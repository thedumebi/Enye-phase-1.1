import React, { useState, useEffect } from "react";
import Profiles from "./components/Profiles";
import Pagination from "./components/Pagination";
import Nav from "./components/Nav";
import axios from "axios";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [profilesPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      const profiles = await axios.get(
        "https://api.enye.tech/v1/challenge/records"
      );
      setProfiles(profiles.data.records.profiles);
      setFilter(profiles.data.records.profiles);
      setLoading(false);
    };
    fetchProfiles();
  }, []);


  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = filter.slice(indexOfFirstProfile, indexOfLastProfile);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filtered = (result) => {
    setFilter(result);
  }

  // const resetProfiles = () => {
  //   setProfiles(allProfiles);
  //   console.log("all", allProfiles.length);

  //   console.log("stale", profiles.length);
  // }

  return (
    <div className="container">
      <Nav 
        profiles={profiles}
        filter={filtered}
      />
      <h1 className="big-heading">Profiles</h1>
      <Profiles loading={loading} profiles={currentProfiles} />
      <Pagination profilesPerPage={profilesPerPage} totalProfiles={filter.length} paginate={paginate} />
    </div>
  );
};

export default App;
