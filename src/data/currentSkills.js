import reactLogo from "@assets/images/logo-react.png";
import jsLogo from "@assets/images/logo-js.png";
import htmlLogo from "@assets/images/logo-html.png";
import cssLogo from "@assets/images/logo-css.png";

const currentSkills = [
  {
    id: 1,
    name: "React",
    img: reactLogo,
    level: 40,
    description:
      "Моё знакомство с <b>React</b> началось не так давно, около двух месяцев назад. За это время я успел ознакомиться с документацией на <a href='https://react.dev/learn' target='_blank'>React.dev</a> и выполнить пару проектов по туторам на YouTube.",
  },
  {
    id: 2,
    name: "JavaScript",
    img: jsLogo,
    level: 60,
    description:
      "<b>JavaScript</b> я изучаю уже около года. Мое знакомство с ним проходило в рамках курса от HTML Academy, за время прохождения которого мной было написано несколько проектов на чистом <b>JS</b>.",
  },
  {
    id: 3,
    name: "HTML",
    img: htmlLogo,
    level: 90,
    description:
      "<b>HTML</b> одна из самых несложных технологий в изучении. В рамках того же курса я познакомился с версткой для <b>CMS</b>, <b>SEO-оптимизацией</b> и с многими другими менее сложными элементами верстки.",
  },
  {
    id: 4,
    name: "CSS",
    img: cssLogo,
    level: 90,
    description:
      "За время изучения <b>CSS</b> я успел отточить на нескольких проектах навык стилизовать адаптивно и кроссбраузерно. Также я свободно использую возможности препроцессора <b>SASS</b>.",
  },
];

export default currentSkills;
