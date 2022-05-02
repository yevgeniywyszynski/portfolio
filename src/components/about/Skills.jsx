import React from "react";

const skillsContent = [
  { skillClass: "p80", skillPercent: "80", skillName: "HTML" },
  { skillClass: "p60", skillPercent: "60", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "CSS" },
  { skillClass: "p68", skillPercent: "68", skillName: "React" },
  { skillClass: "p53", skillPercent: "53", skillName: "REST" },
  { skillClass: "p71", skillPercent: "71", skillName: "Redux" },
  { skillClass: "p57", skillPercent: "57", skillName: "Thunk" },
  { skillClass: "p48", skillPercent: "48", skillName: "Socket.IO" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
