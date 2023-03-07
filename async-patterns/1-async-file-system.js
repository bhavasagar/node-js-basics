import {readFile} from "fs";
import util from "util";

const readFilePromise = util.promisify(readFile);

function getText(path) {
    return new Promise((resolve, reject) => {
        readFile(path, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}

getText("D:/JAVASCRIPT/NODEJS/basics/content/text1.txt")
    .then(res => console.log(res))
    .catch(err => console.log(err));

const getTextAsync = async path => {
    try {
        const res = await getText(path);
        console.log(res, " async");
        const asyncRes = await readFilePromise(path, "utf-8");
        console.log(asyncRes, " util async");
        return res;
    } catch (error) {
        console.log(error);
    }
}

getTextAsync("D:/JAVASCRIPT/NODEJS/basics/content/text1.txt");

// readFile()