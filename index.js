// Code your solution in this file!

<<<<<<< HEAD

function distanceFromHqInBlocks(fromValue) {
  return Math.abs(fromValue - 42)
}

function distanceFromHqInFeet(fromValue){
  return distanceFromHqInBlocks(fromValue)*264;
}

function distanceTravelledInFeet(startingBlock,endingBlock){
  return Math.abs(endingBlock - startingBlock)*264;
}

function calculatesFarePrice(start, destination){
  let diff = distanceTravelledInFeet(start, destination)
  let farePrice = 0
console.log(diff)
  if (diff  <= 400) {
    farePrice = 0
  } else if (diff > 400 && diff < 2000) {
    farePrice = (diff - 400) * 0.02;
  } else if (diff > 2000 && diff < 2500) {
    farePrice = 25;
  } else if (diff > 2500) {
    farePrice = "cannot travel that far";
  }
  return farePrice
=======
let startBlock = 42;

function distanceFromHqInBlocks(startBlock, endBlock) {
console.log(${endBlock}-${StartBlock});
}

function distanceFromHqInFeet(startBlock,endBlock){
console.log((${endBlock}-${StartBlock})*244);

>>>>>>> 14a460100eb16b61b4cb06b22e32dbd6bc930ec4
}
