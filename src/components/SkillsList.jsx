import Skill from "@components/Skill";

const SkillsList = ({
  skillsToRender,
  openedSkillIndex,
  onSkillClick,
  onSkillDelete,
}) => {
  return (
    <ul>
      {skillsToRender.map((skill) => (
        <Skill
          skill={skill}
          isOpen={skill.id === openedSkillIndex}
          onClick={onSkillClick}
          onDelete={onSkillDelete}
          key={skill.id}
        />
      ))}
    </ul>
  );
};

export default SkillsList;
