import deleteIcon from "@assets/images/delete-icon.png";

const Skill = ({ skill, isOpen, onClick, onDelete }) => {
  const { name, level, img, description, id } = skill;
  let color;
  if (level <= 50) {
    color = "#FAED7D";
  } else if (level <= 70) {
    color = "#9AD88F";
  } else if (level <= 100) {
    color = "#B19CD9";
  } else {
    color = "#d8d0d0";
  }

  const barStyle = {
    width: `${level}%`,
    backgroundColor: color,
  };

  const onSkillsDelete = (e, id) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <li className="skill" onClick={() => onClick(id)}>
      <div className="skill_wrapper">
        <div className="skill__info">
          <button
            className="skill__delete"
            onClick={(e) => onSkillsDelete(e, id)}
          >
            <img src={deleteIcon} width="20" alt="кнопочка удаления" />
          </button>
          <div className="skill__icon">
            <img src={img} alt={"логотип" + name} />
          </div>
          <h3 className="skill__name">{name}</h3>
        </div>
        <div className="skill__level">
          <p>{level}%</p>
          <div className="skill__bar">
            <span style={barStyle}></span>
          </div>
        </div>
      </div>
      <div
        className={`skill__description ${
          isOpen ? "skill__description--open" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </li>
  );
};

export default Skill;
