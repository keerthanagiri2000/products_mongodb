const fs=require('fs'); //import the file

const quote = "No beauty shines brighter than that of a good heart !!!";
//writefile
fs.writeFile("./awesome.html", quote, (err) => {
    console.log("Completed writing !!!");
});
 
const quote2="If you want to achieve greatness stop asking for permission";

//for(let i=1;i<=10;i++){
//fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//    console.log("completed  writing");
 //})
//};

const quote3 = "happy womens day !!!";
//console.log(process.argv);
//const noOfFiles=process.argv[2];

//for(let i=1;i<=noOfFiles;i++){
//   fs.writeFile(`./backup/text-${i}.html`, quote3, (err) => {
//        console.log("completed  writing", `text-${i}.html`);
//     })
//    };

//readfile
fs.readFile("./cool.txt" ,"utf-8", (err, content) =>{
    if(err){
        console.log(err);
    }
    console.log(content);
});

//addfile
const niceQuote="\nMake everyday a little less ordinarity"

fs.appendFile("./addfile.txt",niceQuote, (err) =>
{
 console.log("updated file !!!");
});
    
//deletefile
fs.unlink("./delete_file.css", (err) =>{
    console.log("deleted suceccfully !!!");
})

//readdir
fs.readdir("./backup", (err, files) => {
    console.log(files);
});

fs.readdir("./backup", (err, files) => {
    //console.log(files);
    files.forEach((fileName) => 
    fs.unlink(`./backup/${fileName}`, (err) =>{
        console.log("deleted file");
    })
);
});