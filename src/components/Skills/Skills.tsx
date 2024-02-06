"use client";
import SkillCard from "./SkillCard/SkillCard";
import "./Skills.css";
import { SKILLS } from "@/utils/data";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
import { useState } from "react";

type SkillsProps = {
  title: string;
  icon: string;
  skills: { skill: string; percentage: string }[];
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillsProps>(SKILLS[0]);

  const handleSelectSkill = (data: SkillsProps) => {
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
