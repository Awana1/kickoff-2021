const xhr = new XMLHttpRequest()
const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/1/members'

const userData = {
  "teamId": "1",
  "id": "5",
  "name": "Azam",
  "avatar": "https://avatars.githubusercontent.com/u/60480091?s=460&u=b7fec0ee264245056576084de8bab2c68bf0e00e&v=4",
  "prefix": "",
  "surname": "Awan",
  "mugshot": "https://avatars.githubusercontent.com/u/60480091?s=460&u=b7fec0ee264245056576084de8bab2c68bf0e00e&v=4",
  "githubHandle": "https://github.com/Awana1",
  "skills": {
    "html": 80,
    "css": 80,
    "js": 60
  },
  "other": {
    "age": "23",
    "sport": "Fitness, Voetballen, Kickboxen",
    "pet": "geen",
    "muziek": "Hip-hop/rap",
    "werkplek": "Thuis"
  }

}

const postUserData = () => {
  xhr.open("POST", url, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(userData))
}