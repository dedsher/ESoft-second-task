import avatar from "@assets/images/avatar.jpg";

const Person = () => {
  const name = "Ромчик Шамов";
  const age = "19 лет";
  const nicknames = ["ромчик163", "shori", "шамчик"];

  return (
    <div className="portfolio__person">
      <div className="portfolio__avatar">
        <img src={avatar} alt="фото" />
      </div>
      <div className="portfolio__about">
        <h1 className="portfolio__name">
          {name}, {age}
        </h1>
        <i className="portfolio__nickname">{nicknames.join(" | ")}</i>
      </div>
    </div>
  );
};

export default Person;
