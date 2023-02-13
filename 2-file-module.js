const fs = require('fs');

// Reading file
fs.readFile("./content/text1.txt", "utf-8", (err, fileData) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(fileData);
    firstFileContent = fileData;

    fs.readFile("./content/text2.txt", "utf-8", (err, fileData) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(fileData);
        secondFileContent = fileData;

        // Writing file
        fs.writeFile("./content/fs-module-write-result.txt", firstFileContent + " " + secondFileContent + " ", {
            flag: "a"
        }, (err, fileData) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(fileData);
        });
    });
});