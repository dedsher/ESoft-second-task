import { useState } from "react";
import ArrowIcon from "@components/ArrowIcon";
import FilterSelect from "@components/FilterSelect";
import SkillsList from "@components/SkillsList";
import Title from "@components/Title";
import { filters } from "@data/filters";

const Skills = ({ skillsList, isOpen, onClick, onSkillDelete }) => {
  const [openedSkillIndex, setOpenedSkillIndex] = useState(null);
  const [currentFilterIndex, setCurrentFilterIndex] = useState(0);

  // Смущает, что фильтрую скиллы прям из импорта
  const skillsToRender = skillsList.filter((skill) => {
    if (currentFilterIndex === 0) {
      return true;
    } else if (currentFilterIndex === 1) {
      return skill.level <= 50;
    } else if (currentFilterIndex === 2) {
      return skill.level > 50;
    }
  });

  let listClassName =
    "portfolio__competencies-list" +
    (isOpen ? " portfolio__competencies-list--opened" : "");
  let toggleSignClassName =
    "portfolio__toggle-sign" +
    (isOpen ? " portfolio__toggle-sign--opened" : "");

  // Такой способ решает то, что новый навык открывается быстрее, чем закрывается старый
  const onSkillClick = (index) => {
    if (openedSkillIndex === index) {
      setOpenedSkillIndex(null);
    } else {
      setOpenedSkillIndex(null);
      setTimeout(() => setOpenedSkillIndex(index), 400);
    }
  };

  const onSelectChange = (value) => {
    let newFilterIndex = filters.indexOf(value);
    setCurrentFilterIndex(newFilterIndex);
  };

  return (
    <div className="portfolio__competencies">
      <div className="portfolio__toggle" onClick={onClick}>
        <Title>Мои компетенции</Title>
        <span className={toggleSignClassName}>
          {isOpen ? "убрать компетенции" : "показать компетенции"}
          <ArrowIcon />
        </span>
      </div>
      <div className={listClassName}>
        <FilterSelect
          currentFilter={filters[currentFilterIndex]}
          onSelectChange={onSelectChange}
        />
        <SkillsList
          skillsToRender={skillsToRender}
          openedSkillIndex={openedSkillIndex}
          onSkillClick={onSkillClick}
          onSkillDelete={onSkillDelete}
        />
      </div>
    </div>
  );
};

export default Skills;
