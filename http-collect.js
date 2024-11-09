const bl = require("bl");
const http = require("http");

const url = process.argv[2];

http.get(url, (response) => {
  response.pipe(
    bl((err, data) => {
      if (err) {
        return console.log(err);
      }

      const responseData = data.toString();
      console.log(responseData.length); // total character count
      console.log(responseData); //complete response string
    })
  );
});
