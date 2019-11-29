const fetch = require("node-fetch");

const BASE_URL = "https://jobs.github.com/positions.json";

module.exports =  async function fetchGithub() {

    let resultCount = 1;
    let onPage = 0;
    const allJobs = [];

    while(resultCount > 0) {
        const res = await fetch(`${BASE_URL}?page=${onPage}`);
        const jobs = await res.json();

        resultCount = jobs.length;

        onPage++;
        allJobs.push(...jobs);

        console.log(`Found ${resultCount} jobs.`);
    }
    console.log(`Total jobs ${allJobs.length} found`);
}