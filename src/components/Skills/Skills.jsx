import "./skills.css";
import { skills } from "../data/skillsData";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-heading">Skills & Tech Stack</h1>
      <p className="skills-subtitle">
        Technologies I use to build full-stack web applications and solve problems.
      </p>

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skills-card" key={group.category}>
            <h3 className="skills-category">{group.category}</h3>
            <ul className="skills-list">
              {group.items.map((item) => (
                <li className="skills-item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
