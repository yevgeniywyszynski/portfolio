import React from "react";

const experienceContent = [
  {
    year: "  2021 - 2022",
    position: "Bootcamp",
    compnayName: "Kodilla",
    details: `Building websites and web application interfaces (CSS3 HTML5, React, Node.js/Electron).
    Using basic tools of a modern front-end developer, Bootstrap, Sass, Git, Flex, Grid.
    Building web applications using JavaScript, using React to extend the functionality of the application
    Developing window applications in a modern way with the help of Node.js/Electron and React with Redux.
    Developing REST API server using Express and Node.js`,
  },
  {
    year: "2019 - 2020",
    position: " Project Manager",
    compnayName: "CASIO",
    details: ` Responsible for introducing new company educational programs in Poland.
    Planning and implementing marketing strategy.
    Preparation of budget plans.
    Qualitative and quantitative market analysis.
    Leading and representing the project at international conferences abroad.
    Preparing final project reports. Conducting negotiations with foreign companies (China, Germany, Russia, Israel).`,
  },
  {
    year: "2018 - 2019",
    position: "Marketing Specialist",
    compnayName: "Polonia Warszawa s.a",
    details: `Conduct market research to identify customer trends, competitor offerings and demographic data.
    Liaise with creative teams to come up with branding ideas, graphic designs, promotional materials and advertising copies.
    Create innovative marketing campaigns depending on robust data and present the recommendations to management.
    Discover effective marketing and promotional channels, including media platforms to be used to relay product messages to customers.
    `
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
