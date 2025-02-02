import React from 'react';
import './RepoCard.css';
import { CiStar } from "react-icons/ci";

const RepoCard = ({ repo }) => {
  return (
    
    <div className="repo-card">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <h3>{repo.name}</h3>
      </a>
      <p><strong>Owner:</strong> {repo.owner.login}</p>
      {/* <p className='card-title'>{ name.common.length > 10 ? name.common.slice(0,10) + "...":name.common}</p> */}
      {/* <p >{repo.description > 10 ? repo.description.slice(0, 10) + "..." : repo.description}</p> */}
      <p>{repo.description.length > 10 ? repo.description.slice(0, 10) + "..." : repo.description}</p>

      <p className='star'><strong> Stars:</strong> {repo.stargazers_count}<span className='star_container'><CiStar /></span></p>
      <p><strong>Forks:</strong> {repo.forks_count}</p>
      <p><strong>Language:</strong> {repo.language || 'Not specified'}</p>
     
    </div>
  );
};

export default RepoCard;