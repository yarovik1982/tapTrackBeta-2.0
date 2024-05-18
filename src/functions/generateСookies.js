
//___  generation of a cookie to confirm age  

const alfaBet = 'abcdefghijklmnopqrstuvwxyz'; 


const getRandom = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


const fillArray = (arr, length) => {
  const newArray = [];
  for (let i = 0; i < length; i++) {
    const randNum = getRandom(0, alfaBet.length - 1); 
    newArray.push(arr[randNum]);
  }
  return newArray.join('');
}

const rawString = fillArray(alfaBet, 12);



const transformString = (str) => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    const randNum = getRandom(0, 1); 
    if (randNum) {
      arr.push(str[i].toLowerCase()); 
    } else {
      arr.push(str[i].toUpperCase()); 
    }
  }
  return arr.join('');
}

export const generateCooki = transformString(rawString);

