function range(start, end, step) {
    let array = []
    var step = step || 1 
    if(start < end) {
      for(let i = start; i <= end; i += step){
        array.push(i);
      }
    }else {
      for(let i = start; i >= end; i += step){
        array.push(i);
      }
    }
    return array;
  }

function sumOfArray(arr){
    let sum = 0
    for(var i = 0 ; i< arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(range(1, 10))
console.log(range(5, 2, -1))
console.log(sumOfArray(range(1, 10)))
