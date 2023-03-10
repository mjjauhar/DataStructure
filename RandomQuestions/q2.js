let a = "javascripturewoiiyroimrecnomrxrpwriwncwomotnewmxou";
let v = "aeiou";
let result;
let result2 = [];
let split = a.split("");
let split2 = v.split("");
let start = Date.now()
for (let i = 0; i < split.length - 1; i++) {
    result2.push(split[i])
    if(split2.find((x)=>x===split[i]) !== undefined){
        result = split2.find((x)=>x===split[i])
        result2.pop(split[i])
        console.log(result);
    }
}
result2.map(x=>(console.log(x)))
let end=Date.now()
console.log(end-start);