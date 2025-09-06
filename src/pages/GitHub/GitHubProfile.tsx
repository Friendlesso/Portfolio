import { useFetch } from "../../hooks/useFetch";
import EmailGh from "../../assets/images/icons/EmailGH.svg"

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
  const { data: profile, loading, error } = useFetch<GitHubProfileProps>(
    "https://api.github.com/users/Friendlesso"
  );
  if (loading) return <p>Loading Profile...</p>;
  if (error) return <p>Error fetching Profile: {error}</p>;
  if (!profile) return <p>No profile data.</p>;

  return (
    <section className="flex w-full border-b-2 border-[var(--github-view-button)] lg:mr-4   pb-5">
      <div className="w-full">
        <div className="flex flex-row items-center lg:items-start lg:flex-col my-5">
          <div>
            <img src={profile.avatar_url} alt="Profile Picture"
              className="rounded-[50%] w-40 border-3 border-[var(--github-view-button)] " />
          </div>
          <div className=" flex flex-col ml-3 lg:ml-0">
            <p className="text-3xl">{profile.name}</p>
            <p className="text-xl text-[var(--github-gray-text)]">{profile.login}</p>
          </div>
        </div>
        <div className="flex w-full mt-2 ">
          <a href="https://github.com/Friendlesso"
            target="_blank" rel="noopener noreferrer"
            className="
            bg-[var(--github-view-button)]
            text-white text-xl w-full
            py-1.5 text-center rounded-md">View Profile</a>
        </div>
        <div className="flex items-center">
          <img src={EmailGh} alt="" className="w-4 h-4 mr-2 " />
          <p className="text-xl">mihailoless@gmail.com</p>
        </div>
      </div>
    </section>
  )
}