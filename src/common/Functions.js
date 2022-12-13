import { letterToNumber } from "../common/utils"

function groupBy(collection, property) {
  try {
    let i = 0,
      val,
      index,
      values = [],
      result = [];
    for (; i < collection.length; i++) {
      val = collection[i][property];
      index = values.indexOf(val);
      if (index > -1) result[index].push(collection[i]);
      else {
        values.push(val);
        result.push([collection[i]]);
      }
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}

function assignANumberToChart(valueParam) {
  if (!letterToNumber['CODES'].includes(valueParam)) return valueParam;
  const number = Object.entries(letterToNumber).filter(([key, value]) => value.includes(valueParam)).flat()
  return number[0]
}

function noDuplicates(collection = []) {
  collection = new Set(collection);
  return Array.from(collection);
}

function validateScaled(data = []) {
  let countScaled = 1;
  for (const prop in data) {
    const nextNumber = data[parseInt(prop) + 1];
    if(countScaled >= 3){
      return countScaled >= 3
    }
    if (parseInt(nextNumber) === parseInt(parseInt(data[prop]) + 1)) {
      countScaled++;
    } else if (!nextNumber) {
      return countScaled >= 3;
    }
    else {
      countScaled = 1;
    }
  }
  return countScaled >= 3
}

function validateStepsTaken(array, cards) {
  try {
    let points = 0;
    const ternasPlayerOne = array.filter((groupBy) => groupBy.length === 3);
    const cuartaPlayerOne = array.filter((groupBy) => groupBy.length === 4);
    const numberInOrder = cards.map((x) => x?.number).sort((x, y) => parseInt(x) - parseInt(y));
    const numberNoDuplicates = noDuplicates(numberInOrder);
    const scaled = validateScaled(numberNoDuplicates) ? 1 : 0;
    points = ternasPlayerOne.length + cuartaPlayerOne.length + scaled;
    return points
  } catch (error) {
    console.error(error);
  }
}

function orderArray(array, prop){
  return array.sort((x, y) => (parseInt(x[prop]) - parseInt(y[prop])));
}


function validateWhoWon(player1, player2){
  if(player1.win > player2.win){
    return `${player1.name} you are the acclaimed winner! Congratulations`
  }else if(player1.win < player2.win){
    return `${player2.name} you are the acclaimed winner! Congratulations`
  }else{
    return 'There is a tie!!'
  }
}
export {
  groupBy,
  assignANumberToChart,
  noDuplicates,
  validateScaled,
  validateStepsTaken,
  orderArray,
  validateWhoWon
}

