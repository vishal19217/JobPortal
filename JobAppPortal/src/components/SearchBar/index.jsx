import React, { useState, useEffect } from 'react';
import { axiosContext } from '../../controller/AxiosProvider';
import axios from 'axios';

function SearchBar(props) {
  const { token, baseURL } = axiosContext();
  const { setListedJobs } = props;
  // States for filter options
  const [filter, setFilter] = useState({ role: '', type: '', location: '', experience: '' });
  const [jobRoles, setJobRoles] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  // Function to handle dropdown changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  // Function to fetch distinct filter values
  const fetchFilterValues = async (filter) => {
    try {
      console.log('Inside fetch filter value');
      const response = await axios.get(`${baseURL}/v1/api/jobPost/distinct/field?filter=${filter}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update state based on filter
      if (filter === 'jobRole') {
        setJobRoles(response.data);
      } else if (filter === 'jobType') {
        setJobTypes(response.data);
      } else if (filter === 'location') {
        setLocations(response.data);
      } else if (filter === 'experience') {
        setExperiences(response.data);
      }
    } catch (error) {
      console.log('Error in fetching job posts' + error);
    }
  };

  const renderFilteredBasedJobs = async(event)=>{
    console.log(filter);
    const baseUrl = `${baseURL}/v1/api/jobPost/search`;
    let url = baseUrl;
    const queryParams = [];
    for(let key in filter){
      if(filter[key]){
        queryParams.push(`${key}=${encodeURIComponent(filter[key])}`);
      }
    }
    url = url + '?' + queryParams.join('&');
    console.log(url);
    const response = await axios.get(url,{
      headers: {
        Authorization: `Bearer ${token}`,
      }});
    setListedJobs(response.data);
  };
  // Fetching distinct values when the component mounts or the filter name changes
  useEffect(() => {
    fetchFilterValues('jobRole');
    fetchFilterValues('jobType');
    fetchFilterValues('location');
    fetchFilterValues('experience');
  }, [token, baseURL]);



  return (
    <div className="flex gap-4 mt-9 justify-center px-10">
      <select
        name="jobRole"
        defaultValue="Job Role"
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        onChange={handleChange}
      >
        <option value="Job Role" hidden>
          Job Role
        </option>
        {jobRoles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <select
        name="jobType"
        defaultValue="JobType"
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        onChange={handleChange}
      >
        <option value="JobType" hidden>
          Job Type
        </option>
        {jobTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        name="location"
        defaultValue="Location"
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        onChange={handleChange}
      >
        <option value="Location" disabled hidden>
          Location
        </option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <select
        name="experience"
        defaultValue="Experience"
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        onChange={handleChange}
      >
        <option value="Experience" disabled hidden>
          Experience
        </option>
        {experiences.map((exp) => (
          <option key={exp} value={exp}>
            {exp}
          </option>
        ))}
      </select>

      <button className="w-64 bg-blue-500 text-white py-3 font-semibold rounded-md" onClick={renderFilteredBasedJobs}>Submit</button>
    </div>
  );
}

export default SearchBar;
