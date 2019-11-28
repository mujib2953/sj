const CronJob = require("cron").CronJob;

new CronJob("* * * * * *", function() {
    console.log("You will see this message after every seconds.");
}, null, true, "Asia/Kolkata");