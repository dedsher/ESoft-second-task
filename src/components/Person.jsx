import avatar from "@assets/images/avatar.jpg";

const person = {
  name: "Ромчик Шамов",
  age: "19 лет",
  nicknames: ["ромчик163", "shori", "шамчик"],
}

const Person = () => {
  return (
    <div className="portfolio__person">
      <div className="portfolio__avatar">
        <img src={avatar} alt="фото" />
      </div>
      <div className="portfolio__about">
        <h1 className="portfolio__name">
          {person.name}, {person.age}
        </h1>
        <i className="portfolio__nickname">{person.nicknames.join(" | ")}</i>
      </div>
    </div>
  );
};

export default Person;
