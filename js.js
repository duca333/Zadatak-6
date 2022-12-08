'use strict';

function prvi(){
    document.getElementById(btn1);
    console.log("Dusan Stojanovic");
}
function drugi(){
    document.getElementById(btn2);
    var imeiprez = "Dusan Stojanovic";
    console.log(imeiprez);
}
function treci(br1,br2){
    document.getElementById(btn3);
    var zbir = br1 + br2;
 console.log("Zbir je : " + zbir);
 var razlika = br1 - br2;
 console.log("Razlika je : " + razlika);
 var proizvod = br1 * br2;
 console.log("Proizvod je : " + proizvod);
 var kolicnik = br1 / br2;
  console.log("Kolicnik je : " + kolicnik);
 var ostatak = br1 % br2;
  console.log("Ostatak je : " + ostatak);
}
function cetvrti(br1,br2,br3,br4,br5){
    document.getElementById(btn4);
    var zbir = br1+br2+br3+ br4+br5 ;
 console.log("Zbir je : " + zbir);
 var razlika = br1  -br2-br3 -br4 -br5 ;
 console.log("Razlika je : " + razlika);
 var proizvod = br1 * br2 *br3 *br4 *br5 
 console.log("Proizvod je : " + proizvod);
}
function peti(){
    document.getElementById(btn5);
    var ime = "Dusan";
var prezime = "Stojanovic";
console.log(ime + " " + prezime);
}
function sesti(br1){
    document.getElementById(btn6);
    if (br1 == 1 ){
        console.log("Ponedeljak");
        }
        else if (br1 == 2 ){
        console.log("Utorak");
        }
        else if (br1 == 3 ){
        console.log("Srijeda");
        }
        else if (br1 == 4 ){
        console.log("Cetvrtak");
        }
        else if (br1 == 5 ){
        console.log("Petak");
        }
        else if (br1 == 6 ){
        console.log("Subota");
        }
        else if (br1 == 7 ){
        console.log("Nedelja");
        }
        else {
        console.log("Greska");
    }
}

function sedmi(x){
    document.getElementById(btn7);
    if(x % 2 ==0){
        console.log(x + " paran");
        }
        else {
        console.log(x + " neparan");
}
}
function osmi(br1){
    document.getElementById(btn8);
    if(br1 % 15 == 0){
        console.log("Fizzbuzz");
        }
        else if (br1 % 5 == 0){
        console.log("buzz");
        }
        else if (br1 % 3 == 0){
        console.log("Fizz");
        }
        else {
        console.log("Greska");
        }
}

function deveti(){
    document.getElementById(btn9);
    console.log(".");
}

