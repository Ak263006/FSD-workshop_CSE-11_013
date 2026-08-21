import fs from "node:fs/promises";
const filePath="userData.txt";
async function creatFile(content){
    try{
   await fs.writeFile(filePath,content,"Utf8");
    console.log("File created successfully");
}
catch(error){
    console.log("error in your content");  
}
}
async function readFile(){
   await fs.readFile(filePath,"Utf8")
    const content=fs.readFile(filePath,"Utf8")
}
async function updateFile(content){
    try{
    await fs.appendFile(filePath,content,"Utf8");
    console.log("file created successfully");
    }
    catch(erroe){
        console.log("erron in content"); 
    }
    
}
async function deleteFile(){
 try{
    await fs.unlink(filePath);
    console.log("file deleted successfully");
 }
 catch(error){
    console.log("error in deletion");
    
 }
}

// function calling statement
async function run(){
await creatFile("Hello Abhay!");
await readFile();
await appendFile("char chawani");
await readFile();
}
deleteFile();