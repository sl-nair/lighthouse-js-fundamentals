const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


const isCitizen = true;
const age = 30;

if (isCitizen && age>18) {
  console.log("You are eligible to vote");
}

let raining = true;
if (!raining) {
  console.log("Leave your umbrella at home");
}


const whichSchool  = function (age) {
  // Your code in here ...
}

let x = 60
while (x >= 0) {
    if (x === 50){
        console.log("Orbiter transfers from ground to internal power");
        x = x-1;
    } else if (x === 31){
        console.log("Ground launch sequencer is go for auto sequence start");
        x = x-1;
    } else if (x === 16){
        console.log("Ground launch sequencer is go for auto sequence start");
        x = x-1;
    } else if (x === 10){
        console.log("Activate main engine hydrogen burnoff system");
        x = x-1;
    } else if (x === 6){
        console.log("Main engine start");
        x = x-1;
    } else if (x === 0){
        console.log("Solid rocket booster ignition and liftoff!");
        x = x-1;
    } else {
        console.log("T-"+x+"seconds")
    }
}