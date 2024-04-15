import { useState } from "react";
import currentSkills from "@data/currentSkills";
import Skills from "@components/Skills";
import Person from "@components/Person";
import PromoTitle from "@components/PromoTitle";
import ManageSkills from "@components/ManageSkills";

const Portfolio = () => {
  const [isListOpened, setIsListOpened] = useState(false);
  const [skills, setSkills] = useState(currentSkills);

  const onSkillAdd = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  const onSkillDelete = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <section className="portfolio">
      <PromoTitle />
      <Person />
      <Skills
        skillsList={skills}
        isOpen={isListOpened}
        onClick={() => setIsListOpened(!isListOpened)}
        onSkillDelete={onSkillDelete}
      />
      <ManageSkills onSkillAdd={onSkillAdd} />
    </section>
  );
};

export default Portfolio;
