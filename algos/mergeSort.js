function mergeSort(arr) {

   var res = []; 
   if (arr.length > 1) {
        var left = mergeSort(arr.slice(0, Math.floor(arr.length / 2))); 
          var right = mergeSort(arr.slice(Math.floor(arr.length / 2))); 
   }
   else {
     return arr;
   }
   while(left.length && right.length){
     if (left[0] < right[0]) res.push(left.shift()); 
   else (res.push(right.shift()));
   }
   return res.concat(left, right);
}

module.exports = mergeSort;