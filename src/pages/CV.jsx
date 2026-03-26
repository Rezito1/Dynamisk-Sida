import cvData from "../data/cvData.json";

export default function CV() {
  return (
    <div>
      <h1>{cvData.personal.name}</h1>
      <h2>{cvData.personal.title}</h2>

      <h3>Skills:</h3>
      <ul>
        {cvData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Experience:</h3>
      <ul>
        {cvData.experience.map((job, index) => (
          <li key={index}>
            {job.job} - {job.year}
          </li>
        ))}
      </ul>

      <h3>Education:</h3>
      <ul>
        {cvData.education.map((ed, index) => (
          <li key={index}>
            {ed.school} ({ed.year}) - {ed.program}
          </li>
        ))}
      </ul>
    </div>
  );
}