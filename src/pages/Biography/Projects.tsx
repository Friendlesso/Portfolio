import { useFetch } from "../../hooks/useFetch";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export function Projects() {
  const { data: repos, loading, error } = useFetch<Repo[]>(
    "https://api.github.com/users/Friendlesso/repos"
  );

  if (loading) return <p>Loading Repos...</p>;
  if (error) return <p>Error fetching repos: {error}</p>
  if (!repos) return <p>No repos found.</p>

  return (
    <section>
      <p className="text-3xl underline">Projects</p>
      {repos.map((repo) => (
        <div key={repo.id}>
          <div className="flex justify-between items-center">
            <p className="text-2xl">{repo.name}</p>
            {repo.name === 'TickIt' ? <a href='https://tickit-5qi1.onrender.com/' target="_blank" rel="noopener noreferrer" className="dual-border" >View app</a> : <a className="dual-border">View in file</a>}
          </div>
          <div>
            <p className="text-lg text-[var(--text-gray)]">{repo.description}</p>
          </div>
        </div>
      ))}
    </section>
  )


}