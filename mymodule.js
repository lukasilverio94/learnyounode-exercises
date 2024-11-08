const fs = require("fs");
const path = require("path");

const printDirFiles = async (dirName, fileExtension, callback) => {
  fs.readdir(dirName, (err, files) => {
    if (err) {
      return callback(err);
    }

    // loop though files
    const filteredFiles = files.filter(
      (file) => path.extname(file) === `.${fileExtension}`
    );

    callback(null, filteredFiles);
  });
};

module.exports = printDirFiles;
