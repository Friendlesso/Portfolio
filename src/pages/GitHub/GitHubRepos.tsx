import { useFetch } from "../../hooks/useFetch";

type Repo = {
  id: number;
  name: string;
  description: string;
  language: string;
}

export function GitHubRepos() {
  const { data: repos, loading, error } = useFetch<Repo[]>(
    "https://api.github.com/users/Friendlesso/repos"
  );

  if (loading) return <p>Loading Repos...</p>;
  if (error) return <p>Error fetching repos: {error}</p>
  if (!repos) return <p>No repos Found</p>

  return (
    <section>
      {repos.map((repo) => (
        <div key={repo.id}>
          <div>
            <p>{repo.name}</p>
            <p>Public</p>
          </div>
          <p>{repo.description}</p>
          <div>
            <p>{repo.language}</p>
            <a href="">View code</a>
          </div>
        </div>
      ))}
    </section>
  )

}