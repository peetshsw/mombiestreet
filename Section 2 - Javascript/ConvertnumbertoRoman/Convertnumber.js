function conVert(num){
    const Roman = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD":400,
        "C":100,
        "XC":90,
        "L":50,
        "XL":40,
        "X":10,
        "IX":9,
        "V":5,
        "IV":4,
        "I":1
      }
    let result = '';
    for (const [key, value] of Object.entries(Roman)) {
        while (num >= value) {
          result += key;
          num -= value;
        }
      }
      return result;
}
console.log(conVert(16))
console.log(conVert(29))
console.log(conVert(99))
console.log(conVert(501))