let a ="javascripturewoiiyroimrecnomrxrpwriwncwomotnewmxou";

let b = "aeiou";

let start = Date.now()
for(char of a)
{
    if(b.includes(char)){
        console.log(char)    
    }
}
for(char of a)
{
    if(!b.includes(char)){
        console.log(char)    
    }  
}
let end=Date.now()
console.log(end-start);



console.log(b.split("").reverse().join(''))