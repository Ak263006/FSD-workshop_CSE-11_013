import EventEmitter from "node:events";
const myEmiter = new EventEmitter();
myEmiter.on("greet",(teacher) => {
 console.log(`class started by ${teacher}`);
});
myEmiter.on("exit",(teacher) => {
 console.log(`class finished by ${teacher}`);
});
myEmiter.emit("greet","Abhay");
myEmiter.emit("exit","Abhay");