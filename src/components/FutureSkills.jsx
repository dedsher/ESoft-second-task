import Skill from "@components/Skill";

const Skills = ({ skillsList, title, className = "" }) => {
  return (
    <div className={`portfolio__skills ${className}`}>
      <h2 className="portfolio__subtitle">{title}</h2>
      <ul className="portfolio__skills-list">
        {skillsList.map(({ img, name, level, id }) => (
          <Skill img={img} name={name} key={id} level={level} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
