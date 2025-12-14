
import "./education.css";
import { learningJourney } from "../data/learningJourney";

function Education() {
  return (
    <section className="education-section" id="education">
      <h1 className="education-heading">Education & Learning Journey</h1>
       <p className="education-subtitle">
            A snapshot of how I moved from foundations to full-stack development.
      </p>
      <div className="timeline">
        {learningJourney.map(item => (
            <div className="timeline-item" key={item.year + item.title}>
            <div className="timeline-dot" />
            <div className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                {item.level && (
                <p className="timeline-level">{item.level}</p>
              )}
              {item.focus && (
                <ul className="timeline-focus">
                  {item.focus.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {item.score && (
                <p className="timeline-score">
                  <strong>{item.scoreLabel}:</strong> {item.score}
                </p>
              )}
            </div>
            </div>
        ))}
</div>

    </section>
  );
}

export default Education;
