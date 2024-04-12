const Skill = ({name, img}) => {
  return (
    <li className="skill">
        <div className="skill__icon">
            <img src={img} alt={"логотип" + name} />
        </div>
        <h3>{name}</h3>
    </li>
  )
}

export default Skill