"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* 
2+3*2-4*6
*/ 
let answer1 = 2+(3*(2-4)*6);
printOut("answer = " + answer1);
printOut(newLine); 

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*  Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres (maximum 2 decimal places in
 the answer
*/
const meter = 25;
const   cm = 34 
const meterToCm = meter *100;
const totalCm = cm + meterToCm
const inches= 2.54 
const metertoinches = totalCm/inches

printOut(" Answer = " + metertoinches.toFixed(2).toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The
 task must be solved with primitives*/

 const days = 3
 const hours = 12
 const daystominutes = 24* 60 * days
 const hourstominuter = 60* hours
 const minuter = 14
 const secondstominutes = 45/60
 const totalminter = daystominutes + hourstominuter + minuter + secondstominutes
printOut("answer = " +totalminter.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives*/

const numberofminutes = 6322.52;
let part4_calc = numberofminutes / (60*24);
const part4_days = Math.floor(part4_calc);
printOut("days ="+ part4_days);

part4_calc = part4_calc - part4_days;
const HoursInDay = 24
part4_calc = part4_calc * HoursInDay;                               
const part4_Hours = Math.floor(part4_calc);
printOut('Hours =' + part4_Hours);

part4_calc = part4_calc - part4_Hours;
const minutesInHour = 60
part4_calc = part4_calc * minutesInHour;
const part4_Minutes = Math.floor(part4_calc);
printOut('Minutes ='+ part4_Minutes);

part4_calc = part4_calc - part4_Minutes;
const secondsInMinute = 60
part4_calc = part4_calc * secondsInMinute;
const part4_Seconds = Math.floor(part4_calc);
printOut('Seconds='+ part4_Seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* 
Convert 54 dollars to Norwegian kroner, and print the price for both:
 NOK→USDandUSD→NOK.
 Use 76 NOK=8.6 USDasthe exchange rate.
 The answer must be in whole "Kroner" and whole "dollars" 
*/


// Vekslingskursen
const nokToUsdRate = 8.6 / 76; // 1 NOK til USD
const usdToNokRate = 76 / 8.6; // 1 USD til NOK

// Beløpene
const usdAmount = 54;
const nokAmount = 54;

// Konvertering fra USD til NOK
const convertedToNok = Math.round(usdAmount * usdToNokRate);

// Konvertering fra NOK til USD
const convertedToUsd = Math.round(convertedToNok * nokToUsdRate);

console.log(`${usdAmount} USD is approximately ${convertedToNok} NOK.`);
console.log(`${convertedToNok} NOK is approximately ${convertedToUsd} USD.`);

printOut("USD: " + usdAmount.toString() +" --> NOK: " + convertedToNok.toString ());
printOut("NOK: " + convertedToNok.toString() +" --> USD: " + convertedToUsd.toString ());
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*  Create a variable that contains the following text:
 "There is much between heaven and earth that we do not understand."
 ● Print the number of characters in the text.
 ● Print the character at position number 19.
 ● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text.
*/

const text = "There is much between heaven and earth that we do not understand.";

// Number of characters
printOut("Number of characters: "+ text.length.toString());

// Character at position 19
printOut("Character at position 19: "+ text.charAt(19).toString());

// Characters starting at position 35 and 8 characters forward
printOut("Characters starting at position 35: "+ text.substring(35, 35 + 8).toString());

// Index of "earth"
printOut("Index of \"earth\": "+ text.indexOf("earth").toString());
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*  Comparison, print the values for the following expressions (evaluate whether the statements are true):
 ● Is5greater than 3?
 ● Is7greater than or equal to 7?
 ● Is"a" greater than "b"?
 ● Is"1" less than "a"?
 ● Is"2500" less than "abcd"?
 ● "arne" is not equal to "thomas".
 ● (2equals 5) is this statement true?
 ● ("abcd" is greater than "bcd") is this statement false?*/

// Comparison expressions
printOut((5 > 3).toString());   
printOut((7 >= 7).toString()); 
printOut(("a" > "b").toString()); 
printOut(("1" < "a").toString()); 
printOut(("2500" < "abcd").toString()); 
printOut(("arne" !== "thomas").toString()); 
printOut((2 === 5).toString()); 
printOut((("abcd" > "bcd") === false).toString()); 


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*  Convert and print the following expressions:
 ● fromtext "254" to a number
 ● fromtext "57.23" to a number
 ● fromtext "25 kroner" to a number*/


 // Konverterer tekst til tall
let text1 = "254";
let text2 = "57.23";
let text3 = "25 kroner";

// Bruker parseInt for heltall
let number1 = parseInt(text1);
printOut("254 = 254", number1);

// Bruker parseFloat for desimaltall
let number2 = parseFloat(text2);
printOut("57.23 = 57.23", number2);

// Forsøk på å konvertere "25 kroner"
let number3 = parseFloat(text3);
printOut("25 kroner = 25", number3); // Dette vil gi NaN (Not a Number)


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*  Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).*/

// Generer et tilfeldig tall mellom 0 (inkludert) og 1 (ekskludert)

// Skalerer tallet til å være mellom 1 og 360
let r = Math.floor(Math.random() * 360) + 1;

printOut("Tilfeldig tall mellom 1 og 360: "+ r.toString());


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Use modulus (%) to calculate how many weeks and days are in 131 days.*/

// Totalt antall dager
const totalDays = 131;

// Antall dager i en uke
const daysInWeek = 7;

// Beregner antall hele uker
const weeks = Math.floor(totalDays / daysInWeek);

// Beregner antall ekstra dager (resten etter divisjon)
const extraDays = totalDays % daysInWeek;

printOut("I 131 dager er det: " + weeks.toString() + " hele uker og " + extraDays.toString() + " ekstra dager.");


printOut(newLine);