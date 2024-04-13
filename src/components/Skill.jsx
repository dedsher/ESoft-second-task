import { useState } from 'react'
import ReactHtmlParser from 'react-html-parser';

const Skill = ({name, img, level, description}) => {
  const [isOpen, setIsOpen] = useState(false)

  let color;
  if (level <= 50) {
    color = 'yellow';
  } else if (level <= 70) {
    color = 'green';
  } else if (level <= 100) {
    color = 'purple';
  } else {
    color = '#d8d0d0';
  }

  const barStyle = {
    width: `${level}%`,
    backgroundColor: color,
  }

  return (
    <li className="skill" onClick={() => setIsOpen(!isOpen)}>
      <div className="skill_wrapper">
        <div className="skill__info">
          <div className="skill__icon">
              <img src={img} alt={"логотип" + name} />
          </div>
          <h3 className='skill__name'>{name}</h3>
        </div>
        <div className="skill__level">
          <p>{level}%</p>
          <div className="skill__bar">
            <span style={barStyle}></span>
          </div>
        </div>
      </div>
      {isOpen && 
        <div className="skill__description">
          {ReactHtmlParser(`<p>${description}</p>`)}
        </div>
      }
    </li>
  )
}

export default Skill