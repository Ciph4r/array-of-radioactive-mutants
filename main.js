/******************
 * YOUR CODE HERE *
 ******************/
addMeToEnd = (x) => {
  return x.push('Colin')
}

addMeToStart = (x) => {
  return x.unshift('Colin')
}


changeLast = (x,y) => {
  return x[x.length-1] = y
}

changeAllValuesTo = (x,y) => {
  for (let i = 0 ; x.length > i ; i++){
    x[i] = y
  }
  return x
}
changeAllValuesTo([1,2,4,8], 9)


oddOrEven = (x) => {
  for (let i = 0 ; x.length > i ; i++)
  x[i] %2 === 0 ? x[i] = 'even' : x[i] = 'odd'

}

changeNextThreeToValue=(s,a,v) => {
  for (let i = 0  ; a.length > i ; i++)
      if (i >= s && i < s+3)  { 
        a[i] = v
      }
  
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
