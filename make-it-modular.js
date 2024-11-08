const printDirFiles = require("./mymodule");

const dirName = process.argv[2];
const extension = process.argv[3];

printDirFiles(dirName, extension, (err, filteredFiles) => {
  if (err) {
    return console.log(err);
  }

  // print each file name on a new line
  filteredFiles.forEach((file) => console.log(file));
});
