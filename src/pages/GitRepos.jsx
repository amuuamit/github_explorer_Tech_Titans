import React, { useEffect, useState } from 'react';
import RepoCard from '../components/RepoCard';
import SearchFilter from '../components/UI/SearchFilter';
import '../components/UI/Filters.css'

const   GitRepos = () => {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('JavaScript');
  const [sortCriteria, setSortCriteria] = useState('stars');

  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=stars:>1&sort=stars')
      .then(response => response.json())
      .then(data => setRepos(data.items))
      .catch(error => console.error('Error fetching repositories:', error));
  }, []);

  const filteredRepos = repos
    .filter(repo =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (language === 'All' || repo.language === language)
    )
    .sort((a, b) => {
      if (sortCriteria === 'stars') {
        return b.stargazers_count - a.stargazers_count;
      } else if (sortCriteria === 'forks') {
        return b.forks_count - a.forks_count;
      }
      return 0;
    });

  return (
    <div>
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="filters">
        {/* This is option value for searching */}
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="All">All Languages</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="Ruby">Ruby</option>
          <option value="PHP">PHP</option>
          <option value="C++">C++</option>
          <option value="C#">C#</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Go">Go</option>
    
        </select>
        <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
          <option value="stars">Sort by Stars</option>
          <option value="forks">Sort by Forks</option>
        </select>
      </div>
      
      <ul className='card-container'>
        {filteredRepos && filteredRepos.length > 0 ? (
          filteredRepos.map(repo => (
            <li key={repo.id}>
              <RepoCard repo={repo} />
            </li>
          ))
        ) : (
          <>No repositories available</>
        )}
      </ul>
    </div>
  );
};

export default GitRepos;

