import { useFetch } from "../../hooks/useFetch";

type Repo = {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
}

export function GitHubRepos() {
  const { data: repos, loading, error } = useFetch<Repo[]>(
    "https://api.github.com/users/Friendlesso/repos"
  );

  if (loading) return <p>Loading Repos...</p>;
  if (error) return <p>Error fetching repos: {error}</p>
  if (!repos) return <p>No repos Found</p>

  return (
    <section className="grid grid-cols-1 min-[1600px]:grid-cols-2 gap-4 m-5">
      {repos.map((repo) => (
        <div key={repo.id} className="border-2 flex flex-col border-[var(--github-border)]  min-h-[250px] mb-4 p-2">
          <div className="flex justify-between items-center">
            <p className="text-2xl">{repo.name}</p>
            <p className="border-2 text-lg px-5 rounded-sm border-[var(--github-border)]">Public</p>
          </div>
          <p className="text-[var(--github-gray-text)] text-lg">{repo.description}</p>
          <div className="flex justify-between items-center mt-auto">
            <p className="text-lg"> {repo.language}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="px-5 rounded-sm text-lg bg-[var(--github-view-button)]">View code</a>
          </div>
        </div>
      ))}
    </section>
  )

}