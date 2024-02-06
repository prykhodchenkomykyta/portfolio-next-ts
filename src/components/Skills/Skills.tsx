"use client";
import SkillCard from "./SkillCard/SkillCard";
import "./Skills.css";
import { SKILLS } from "@/utils/data";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
import { useState } from "react";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section id="skills" className="skills-container">
      <h5>Techical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title == item.title}
              onClick={() => handleSelectSkill(item)}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
