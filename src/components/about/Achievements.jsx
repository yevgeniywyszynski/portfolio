import React from "react";

const achievementsContent = [
  { title: "1", subTitle1: "years of", subTitle2: "experience" },
  { title: "8", subTitle1: "completed", subTitle2: "projects" },
  { title: "13 000", subTitle1: "Hours", subTitle2: "codding" },
  { title: "14", subTitle1: "Used", subTitle2: "technology" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
