
import cvData from "../data/cvData.json";

export default function CV() {
  return (
    <div>
      <h1>{cvData.personal.name}</h1>
      <h2>{cvData.personal.title}</h2>

      <h3>Skills:</h3>
      <ul>
        {cvData.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>

      <h3>Experience:</h3>
      <ul>
        {cvData.experience.map((job, i) => (
          <li key={i}>
            {job.job} - {job.year}
          </li>
        ))}
      </ul>

      <h3>Education:</h3>
      <ul>
        {cvData.education.map((ed, i) => (
          <li key={i}>
            {ed.school} ({ed.year}) - {ed.program}
          </li>
        ))}
      </ul>
    </div>
  );
}