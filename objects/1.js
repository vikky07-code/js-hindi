
const jsuser={
    name:"vikramjeet",
    rollno:264,
    email:"vikky@google.com"
}

console.log(jsuser)

jsuser.greeting=function(){

    console.log(`hello mr ${this.name}`)
}
console.log(jsuser.greeting())