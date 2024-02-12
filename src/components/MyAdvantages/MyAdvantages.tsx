"use client";
import { useState } from "react";
import "./MyAdvantages.css";
import { ADVANTAGES } from "@/utils/data";
import MyAdvantagesCard from "./MyAdvantagesCard/MyAdvantagesCard";
import MyAdvantagesInfoCard from "./MyAdvantagesInfoCard/MyAdvantagesInfoCard";

interface MyAdvantagesProps {
  title: string;
  icon: string;
  info: string;
  // skills: { skill: string; percentage: string }[];
}

const MyAdvantages = () => {
  const [selectedSkill, setSelectedSkill] = useState<MyAdvantagesProps>(
    ADVANTAGES[0]
  );

  const handleSelectSkill = (data: MyAdvantagesProps) => {
    setSelectedSkill(data);
  };

  return (
    <section id="my-advantages" className="my-advantages-container">
      <h5>Чому варто працювати зі мною?</h5>
      <div className="my-advantages-content">
        <div className="my-advantages">
          {ADVANTAGES.map((item) => (
            <MyAdvantagesCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title == item.title}
              onClick={() => handleSelectSkill(item)}
            />
          ))}
        </div>
        <div className="my-advantages-info">
          <MyAdvantagesInfoCard
            heading={selectedSkill.title}
            // skills={selectedSkill.skills}
            info={selectedSkill.info}
          />
        </div>
      </div>
    </section>
  );
};

export default MyAdvantages;
