
var count =0;
const Hash = setInterval(() => {
    var a = 0;
    var b = 100;
    var x = a + Math.floor((b - a) * (Math.random()));
    console.log(x)
    count++;
    if(x==13){
        clearInterval(Hash)
        console.log(count);
    }
}, 100)