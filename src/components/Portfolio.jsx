import currentSkills from "@data/currentSkills";
import futureSkills from "@data/futureSkills";
import Skills from "@components/Skills";
import Person from "@components/Person";
import Title from "./Title";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Title />
      <Person />
      <Skills skillsList={currentSkills} title="Мои компетенции" />
      <Skills skillsList={futureSkills} title="Технологии, которые я хочу изучить" className="portfolio__skills-list--second" />
    </section>
  );
};

export default Portfolio;
