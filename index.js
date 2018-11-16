// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
  let blocksDist = Math.abs(pickup - 42);
  return blocksDist;
}

function distanceFromHqInFeet(pickup){
  let blocksDist = distanceFromHqInBlocks(pickup);
  let feetDist = blocksDist * 264;
  return feetDist;
}

function distanceTravelledInFeet(pickup, dropoff){
  let dist = Math.abs(dropoff - pickup) * 264;
  return dist;
}

function calculatesFarePrice(pickup, dropoff){
  let dist = distanceTravelledInFeet(pickup, dropoff);
  let fare;
  if (dist <= 400){
    fare = 0;
  }else if (dist <= 2000){
    fare = (dist - 400) * .02;
  }else if(dist <= 2500){
    fare = 25;
  }else{
    fare = 'cannot travel that far';
  }
  return fare;
}
