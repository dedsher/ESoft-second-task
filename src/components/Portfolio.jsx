import currentSkills from "@data/currentSkills";
import futureSkills from "@data/futureSkills";
import OwnSkills from "@components/OwnSkills";
import FutureSkills from "@components/FutureSkills";
import Person from "@components/Person";
import Title from "./Title";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Title />
      <Person />
      <OwnSkills skillsList={currentSkills} title="Мои компетенции" />
      {/* <FutureSkills skillsList={futureSkills} title="Технологии, которые я хочу изучить" className="portfolio__skills-list--second" /> */}
    </section>
  );
};

export default Portfolio;
