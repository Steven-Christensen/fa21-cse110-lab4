function thingy(){
    let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}


var timeoutID = setInterval(thingy, 1000);