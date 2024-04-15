import { useState } from "react";
import Title from "@components/Title";

const ManageSkills = ({ onSkillAdd }) => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);

  const handleAddSkill = (event) => {
    event.preventDefault();

    const newSkill = {
      name,
      level,
      description,
      img,
    };

    onSkillAdd(newSkill);

    setName("");
    setLevel("");
    setDescription("");
    setImg(null);
  };

  const handleImgChange = (event) => {
    setImg(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="portfolio__skills-manage">
      <Title>Добавить навык</Title>
      <form onSubmit={handleAddSkill}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Название"
          required
        />
        <input
          type="number"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          placeholder="Уровень"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Описание"
          required
        />
        <input type="file" onChange={handleImgChange} required />
        <button type="submit">Добавить навык</button>
      </form>
    </div>
  );
};

export default ManageSkills;
