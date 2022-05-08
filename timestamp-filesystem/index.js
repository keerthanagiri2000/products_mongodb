const express= require('express');

const app= express();
const PORT= 5000;
const fs=require('fs');

//const time = new Date();

app.get('/current_timestamp', function (request, response) {
 response.send(`${new Date()}`);
 
 var write =fs.writeFile('./date-time.txt', `${new Date()}`, (err) => {
    console.log("created file !!!");
   })
});

app.listen (PORT, () => console.log(`server started in ${PORT}`));