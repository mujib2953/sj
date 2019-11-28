const fetch = require("node-fetch");

const BASE_URL = "https://jobs.github.com/positions.json";

module.exports =  async function fetchGithub() {
    const res = await fetch(BASE_URL);
    const jobs = await res.json();
    console.log(jobs.length);
}

module.exports();