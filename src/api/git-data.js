// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: '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'
  })
  
  await octokit.request('GET /search/code', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })