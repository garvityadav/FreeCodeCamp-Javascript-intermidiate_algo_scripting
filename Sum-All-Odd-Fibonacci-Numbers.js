function sumFibs(num) {
  let arr = [];
  let sum = 1;
  let finalsum =0;
 for(let i = 0;i<num;i++){
   arr.push(sum);
   
   if(arr.length<=1){
     sum = arr[i];
   }
   else{sum = arr[i]+arr[i-1];};
   
 }
 arr = arr.filter(user=>{if(user%2!==0){
   return true;
  }});
  arr.map(user=>{
    if(user<=num){
      finalsum = user+finalsum;}
    });

 return finalsum;
}
console.log(sumFibs(10));
