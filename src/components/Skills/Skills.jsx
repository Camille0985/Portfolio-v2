import "./Skills.scss";
import SkillsData from "../../data/skills";
import React from "react";

const Skills = () => {
  return (
    <section id="Skills">
      <h2>Technologies utilisées</h2>
      <div className="skills">
        {Object.entries(SkillsData).map(([categoryName, skillList]) => (
          <div key={categoryName} className="skills__container">
            <h3>
              {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            </h3>
            <ul className="skills__menu">
              {skillList.map(({ name, icon, color }, index) => (
                <li className="skills__list" key={index}>
                  <div className="skills__img-container">
                    {typeof icon === "function" ? (
                      React.createElement(icon, { size: 35, color })
                    ) : (
                      <img
                        src={icon}
                        alt={name}
                      />
                    )}
                  </div>
                  <h4 style={{ fontWeight: "normal", fontSize: "16px" }}>{name}</h4>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
