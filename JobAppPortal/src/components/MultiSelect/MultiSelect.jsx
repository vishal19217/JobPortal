import React, { useEffect, useState } from 'react';
import "./index.css"
const MultiSelect = ({sendSkillsToParent}) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const skills = ['Java', 'C++', 'C', 'iOS', 'HTML', 'CSS', 'React', 'Spring Boot'];

  // Function to handle click on an option
  const handleSelect = (skill) => {
    setSelectedSkills((prevSelected) =>
      prevSelected.includes(skill)
        ? prevSelected.filter((item) => item !== skill)
        : [...prevSelected, skill]
    );

    console.log(selectedSkills);
  };
  useEffect(()=>{
    
    sendSkillsToParent(selectedSkills);
    
  },[selectedSkills]);
  return (
    <div>
      <div className="multi-select">
        {skills.map((skill) => (
          <div
            key={skill}
            className={`option ${selectedSkills.includes(skill) ? 'selected' : ''}`}
            onClick={() => handleSelect(skill)}
          >
            {skill}
          </div>
        ))}
      </div>
      <div>
        <h3>Selected Skills:</h3>
        <ul>
          {selectedSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelect;
