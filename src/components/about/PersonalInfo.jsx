import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Yevgeniy" },
  { meta: "last name", metaInfo: "Wyszyński" },
  { meta: "Age", metaInfo: "26 Years" },
  { meta: "Nationality", metaInfo: "Polish" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Warsaw" },
  { meta: "phone", metaInfo: "+48 883 377 733" },
  { meta: "Email", metaInfo: "ywyszynski@gmail.com" },
  { meta: "LinkedIn", metaInfo: " yevgeniy.wyszyński"},
  { meta: "langages", metaInfo: "English, Polish, Ukranian, Russian" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
