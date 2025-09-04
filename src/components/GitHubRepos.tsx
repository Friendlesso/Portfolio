import { useEffect, useState } from "react";
import axios from "axios";

export function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Friendlesso/repos"
        );
        setRepos(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || err.message);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Loading Repos...</p>;
  if (error) return <p>Error fetching repos: {error}</p>

  return (
    <section>
      <p className="text-3xl underline">Projects</p>
      {repos.map((repo: any) => (
        <div key={repo.id}>
          <div className="flex justify-between items-center">
            <p className="text-2xl">{repo.name}</p>
            {repo.name === 'TickIt' ? <a href='https://tickit-5qi1.onrender.com/' target="_blank" rel="noopener noreferrer" className="dual-border" >View app</a>  : <a className="dual-border">View in file</a>  }
          </div>
          <div>
            <p className="text-lg text-[var(--text-gray)]">{repo.description}</p>
          </div>
        </div>
      ))}
    </section>
  )


}