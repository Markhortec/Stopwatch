var hour=0;
var mint=0;
var sec=0;
var tens=0;

let displayten=0;
let displaysec=0;
let displaymint=0;
let displayhour=0;


var interval=null;
let status="stooop";


function stopwatch() {
tens++;
if (tens===100){
    sec++;
    tens=0;

}
if (sec==60) {
    mint++;
    sec=0;
}
if (mint==60) {
    hour++;
    mint=0;
}


document.getElementById('hour').innerHTML=hour;
document.getElementById('mints').innerHTML=mint;
document.getElementById('seconds').innerHTML=sec;
document.getElementById('tens').innerHTML=tens;

// if (displaysec<10){
// displaysec="0"+sec.toString();
// }
// else{
//     displaysec=sec;
// }
// if (displayten<10){
//     displaysec="0"+tens.toString();
//     }
//     else{
//         displayten=tens;
//     }
//     if (displaymint<10){
//         displaymint="0"+mint.toString();
//         }
//         else{
//             displaymint=mint;
//         }

//         if (displayhour<10){
//             displayhour="0"+hour.toString();
//             }
//             else{
//                 displayhour=hour;
//             }
// document.getElementById('hour').innerHTML=displayhour;
// document.getElementById('mints').innerHTML=displaymint;
// document.getElementById('seconds').innerHTML=displaysec;
// document.getElementById('tens').innerHTML=displayten;



}

function starter(){
    interval=window.setInterval(stopwatch,10);
 

}

function stop(){

    window.clearInterval(interval);

}

function reset(){
    hour=0;
    mint=0;
    sec=0;
    tens=0;
    document.getElementById("hour").innerHTML="00";
    document.getElementById("seconds").innerHTML="00";
    document.getElementById("mints").innerHTML="00";
    document.getElementById("tens").innerHTML="00";
}