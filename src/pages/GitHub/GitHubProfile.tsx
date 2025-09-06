import { useFetch } from "../../hooks/useFetch";

type GitHubProfileProps = {
  login: string
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
};

export function GithubProfile() {
  const {data: profile,loading,error} = useFetch<GitHubProfileProps>(
    "https://api.github.com/users/Friendlesso"
  );
  if (loading) return <p>Loading Profile...</p>;
  if (error) return <p>Error fetching Profile: {error}</p>;
  if (!profile) return <p>No profile data.</p>;

  return(
    <section>
        <div>
          <div>
            <img src={profile.avatar_url} alt="Profile Picture" className="rounded-[50%] w-40" />
          </div>
          <div className=" flex flex-col">
            <p className="text-3xl">{profile.name}</p>
            <p className="text-xl text-[var(--github-username)]">{profile.login}</p>
          </div>
          <div className="flex">
            <a href="" className="bg-[var(--github-view-button)] text-white w-full py-2.5 text-center rounded-b-md">View Profile</a>
          </div>
          <div>
            <img src="" alt="" />
            <p>mihailoless@gmail.com</p>
          </div>
        </div>
    </section>
  )
}