import Skill from "@components/Skill"

const Skills = ({skillsList, title}) => {
  return (
    <div className="portfolio__skills">
        <h2 className="portfolio__subtitle">{title}</h2>
        <ul className="portfolio__skills-list">
            {skillsList.map(({img, name, level, description, id}) => (
                <Skill img={img} name={name} key={id} level={level} description={description} />
            ))}
        </ul>
    </div>
  )
}

export default Skills