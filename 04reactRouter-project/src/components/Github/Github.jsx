import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const { userData, repos } = useLoaderData();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-8 w-full max-w-2xl text-center">
        
        {/* Avatar + Repo Count */}
        <img 
          src={userData.avatar_url} 
          alt="Git picture" 
          width={150} 
          className="mx-auto mb-4 rounded-full border-4 border-gray-600" 
        />
        <h2 className="text-2xl font-bold mb-2">{userData.login}</h2>
        <p className="text-lg mb-6">Public Repositories: <span className="font-semibold">{userData.public_repos}</span></p>
        
        {/* Repo List */}
        <div className="bg-gray-700 rounded-lg p-4 max-h-64 overflow-y-auto text-left">
          <h3 className="text-xl font-semibold mb-3">Repositories</h3>
          <ul className="space-y-2">
            {repos.map(repo => (
              <li key={repo.id}>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block bg-gray-600 hover:bg-gray-500 p-2 rounded-md transition"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Github;

// Loader function
export const githubInfoLoader = async () => {
  const [userResponse, reposResponse] = await Promise.all([
    fetch('https://api.github.com/users/14anjali'),
    fetch('https://api.github.com/users/14anjali/repos')
  ]);

  const userData = await userResponse.json();
  const repos = await reposResponse.json();

  return { userData, repos };
};
