const fs = require("fs");
const path = require('path');

const emptyFolder = ( folderName ) => {
    fs.readdir(folderName, (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
          fs.unlink(path.join(folderName, file), err => {
            if (err) throw err;
          });
        }
      });
}


module.exports = {
    emptyFolder
}