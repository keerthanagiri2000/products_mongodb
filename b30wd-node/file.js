const fs=require('fs');
//const quote="Love all, trust a few, do wrong to none.";
//fs.writeFile("./awesome.html", quote, (err) => {
   // console.log("Completed writing !!!");
//});

/*const quote2="Live more, worry less ";
for(let i=1; i<=10;i++){
    fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
    console.log("Completed writing !!!");
})
}*/
/*
const quote3="Happy women's day 👩‍💼👩‍💼";
console.log(process.argv);
const noOfFiles=process.argv[2];

for(let i=1; i<=noOfFiles;i++){
    fs.writeFile(`./backup/text-${i}.html`, quote3, (err) => {
    console.log(`Completed writing !!! text-${i}.html`);
})
}

fs.readFile("./cool.txt", "utf-8", (err, content)=>{
    if(err) {
        console.log("👊", err);
    }
    console.log("😉", content);
});
*/

/*const niceQuote = "\nMake everyday a little less ordinarily";

//write file only overwrite not append
fs.appendFile("./nice.txt", niceQuote, (err) => {
    console.log("Completed writing !!!");
});
*/




fs.readdir("./backup", (err, files) =>{
//console.log(files);
files.forEach((fileName)=>{
    fs.unlink(`./backup/${fileName}`, (err)=>{
        console.log("deleted file!!!")
    });
})
});