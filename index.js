// Making server

require('dotenv').config()
const express = require('express')
const app = express()

//const port = 4000  beacuse it is used in .env file

const gitData = {
  "login": "Faizurcse",
  "id": 114854264,
  "node_id": "U_kgDOBtiJeA",
  "avatar_url": "https://avatars.githubusercontent.com/u/114854264?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Faizurcse",
  "html_url": "https://github.com/Faizurcse",
  "followers_url": "https://api.github.com/users/Faizurcse/followers",
  "following_url": "https://api.github.com/users/Faizurcse/following{/other_user}",
  "gists_url": "https://api.github.com/users/Faizurcse/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Faizurcse/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Faizurcse/subscriptions",
  "organizations_url": "https://api.github.com/users/Faizurcse/orgs",
  "repos_url": "https://api.github.com/users/Faizurcse/repos",
  "events_url": "https://api.github.com/users/Faizurcse/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Faizurcse/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Md FaizurRahman",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "A passionate computer science engineer and quick learner",
  "twitter_username": null,
  "public_repos": 35,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2022-10-02T08:48:06Z",
  "updated_at": "2024-04-18T04:10:32Z"
}

// by default open
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//  about open when hit on api
app.get('/about',(req,res)=>{
    res.send('hey i am faiz from bihar bgs doing betch in final year now i able do work in front end and back end')
})

app.get('/github',(req,res)=>{
  res.json(gitData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})