import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

export default function HW3MainPage() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGitHubUser = async () => {
    setLoading(true);
    setUserData(null); // 이전 유저 데이터를 초기화
    setRepos([]); // 이전 레포 목록을 초기화
    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`,
      );
      const reposResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`,
      );

      setUserData(userResponse.data);
      setRepos(reposResponse.data);
    } catch (error) {
      console.error("Error fetching GitHub user", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      fetchGitHubUser();
    }
  };

  return (
    <div>
      <div className="text-xl font-semibold p-3 bg-blue-500 text-white">
        GitHub Finder
      </div>
      <div className="m-8">
        <div className="flex flex-col border p-5 gap-2">
          <div className="text-[40px] font-semibold">Search GitHub Users</div>
          <div className="text-zinc-400">
            Enter a username to fetch profile and repos
          </div>
          <input
            type="text"
            className="border p-2"
            placeholder="GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        {/* 동적으로 렌더링 되는 부분 */}
        <div>
          {loading ? (
            <div className="flex justify-center items-center p-5">
              <CircularProgress />
            </div>
          ) : userData ? (
            <div className="flex flex-col items-center p-5">
              <img
                src={userData.avatar_url}
                alt={userData.login}
                className="w-32 h-32 rounded-full"
              />
              <div className="text-[24px] font-semibold mt-4">
                {userData.name}
              </div>

              {/* 유저 정보 정렬 */}
              <div className="flex flex-col items-start text-sm text-zinc-600 mt-4">
                {userData.company && (
                  <div className="flex gap-2">
                    <p className="font-semibold">Company:</p>
                    <p>{userData.company}</p>
                  </div>
                )}
                {userData.location && (
                  <div className="flex gap-2">
                    <p className="font-semibold">Location:</p>
                    <p>{userData.location}</p>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start text-sm text-zinc-600 mt-4">
                <div className="flex gap-2">
                  <p className="font-semibold">Followers:</p>
                  <p>{userData.followers}</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold">Following:</p>
                  <p>{userData.following}</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold">Public Repos:</p>
                  <p>{userData.public_repos}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center p-5">
              No user data. Please enter a username.
            </p>
          )}

          {/* 레포 목록 */}
          {repos.length > 0 && (
            <div className="mt-5">
              <p className="text-xl font-semibold">Latest Repos</p>
              <ul>
                {repos.slice(0, 5).map((repo) => (
                  <li
                    key={repo.id}
                    className="border p-2 mt-2 flex justify-between items-center"
                  >
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {repo.name}
                    </a>
                    <div className="flex gap-2">
                      <div className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                        Stars: {repo.stargazers_count}
                      </div>
                      <div className="bg-zinc-500 text-white px-2 py-1 rounded text-sm">
                        Watchers: {repo.watchers_count}
                      </div>
                      <div className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                        Forks: {repo.forks_count}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
