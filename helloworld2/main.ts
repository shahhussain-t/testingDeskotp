import { title } from "process";

let message:string="hello world";
console.log(message)


interface User{
    title:string
}
function hello():User{
    let title:string="hello world"
    return {title}
}

hello()