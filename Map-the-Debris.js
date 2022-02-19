function orbitalPeriod(arr) {
  let pi = Math.PI;  
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newArr = [];

/*created a function that will calculate the period taking the average altitude as argument */
  let period =(avgAlt)=>{
     let a = avgAlt + earthRadius;
     let aCube = a**3;
     let underRoot = Math.sqrt(aCube/GM);
     return  Math.round(2*pi*underRoot);
  }
  for(let i =0;i<arr.length;i++){
    let name = arr[i].name;
    let avgAlt = arr[i].avgAlt;
    let time = period(avgAlt);
    newArr.push({name:name,orbitalPeriod:time});
  }
return newArr;
}

//test cases
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
