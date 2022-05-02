import React from "react";

const educationContent = [
  {
    year: "2018",
    degree: "MASTERS DEGREE",
    institute: "COLLEGIUM CIVITAS",
    details: `  International business and negotiations`,
  },
  {
    year: "2016",
    degree: "BACHELOR DEGREE",
    institute: "COLEGIUM CIVITAS",
    details: `International relationsin & negotiator in diplomacy`,
  },
  {
    year: "2013",
    degree: "Boxing instructor",
    institute: "Ukranian Olimpic Academy",
    details: `Ukranian National Boxing Team`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
