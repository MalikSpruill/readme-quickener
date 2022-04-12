const fs = require("fs");

const writeFile = readmeContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./tmp/README.md", readmeContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "readme created!"
            })
        })
    })
}

module.exports = writeFile;