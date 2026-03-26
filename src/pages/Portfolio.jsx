import { useEffect, useState } from "react";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Rezito1/repos")
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading projects...</h2>;
  }

  return (
    <div>
      <h1>My Projects</h1>

      {repos.map(repo => (
        <div key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
}