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
      <h3>Projects</h3>
      {repos.map((repo: any) => (
        <div key={repo.id}>
          <div>
            <p className="text-2xl">{repo.name}</p>
            <a href="">{}</a>
          </div>
          <div>
            <p className="text-lg">{repo.description}</p>
          </div>
        </div>
      ))}
    </section>
  )


}