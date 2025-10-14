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
        <p className="text-3xl underline mb-2.5">Projects</p>
        {repos.map((repo) => {
          const link = repo.name === "TickIt"
            ? "https://tickit-5qi1.onrender.com/"
            : repo.html_url;
          const text = repo.name === "TickIt"
            ? "View app"
            : "View In file";
          return (
            <div key={repo.id} className="mb-5">
              <div className="flex justify-between items-center">
                <p className="text-2xl">{repo.name}</p>
                <a href={link}
                  className="dual-border px-5"
                >{text}</a>
              </div>
              <div>
                <p className="text-lg text-[var(--text-gray)]">{repo.description}</p>
              </div>
            </div>
          )
        })}
      </section>
  )
}