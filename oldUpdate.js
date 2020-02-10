const request = require("request");
const fs = require("fs");
const readline = require("readline-sync");
const input = readline.question;
const download = require("download-git-repo");
var version = "1.0";

function checkUpdate() {
request('https://raw.githubusercontent.com/M469/Testing-Something/master/version', function(error, response, body) {
    if(body > version) {
        var YesNo = readline.keyInYN("there is new update release do you want to download it ?");
        if(YesNo === false) return;
        if(YesNo === true) {
            download('M469/Testing-Something', __dirname, function (err) {
                console.log(err ? 'Error While Updating The Tool' : "Successfully Updated !, Please Start The Tool Again.")
                process.exit(1);
            })
        }
    } else {
        throw error;
    }
})
}

checkUpdate()


console.log("There is no new updates !");
