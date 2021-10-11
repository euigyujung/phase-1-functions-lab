// Code your solution in this file!
function distanceFromHqInBlocks(bStart){
    if (bStart > 42)
       return bStart - 42
    else  (bStart < 42)
        return 42 - bStart
}

function distanceFromHqInFeet(fStart){
    if (fStart > 42)
        return (fStart-42)*264;
    else (fStart < 42)
        return (42-fStart)*264
}

function distanceTravelledInFeet(fLocation, dLocation){
    if (fLocation > dLocation)
        return (fLocation - dLocation)* 264
    else if (fLocation < dLocation)
        return (dLocation - fLocation) * 264
}
function calculatesFarePrice(start, desitnation){
    let blockDistnace = Math.abs(start - desitnation);
    let distanceTraveled = blockDistnace * 264;
    if (distanceTraveled < 400){
        console.log('give customers a free samnple');
        return 0
    }
    else if (distanceTraveled >= 2500)
        return 'cannot travel that far'
    else if (2000 < distanceTraveled < 2500)
        return 25
    if (400 < distanceTraveled < 2000)
        return (distanceTraveled * .02)
}  


