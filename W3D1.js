//esercizio1

function crazySum(a, b) {
    if (a === b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
}

console. log (crazySum(6, 6));

//esercizio2

function boundary(n) {
    return (n >= 20 && n<=100)  || n ===400;
}

   console. log (boundary (10)) 
    
  //esercizio3
  
  function reverseString(str) {
    return str.split('').reverse(2,3,4).join('');
  }
  console.log(reverseString("EPICODE")); 

  //esercizio4

  function upperFirst(string) {
    return string.replace( /\b\w/g, char => char.toUpperCase())
  }

  console.log(upperFirst("questo è un esempio")); 

  //esercizio5 

  function giveMeRandom(n) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * 11));
}
console.log(giveMeRandom(7)); 
console.log(giveMeRandom(37)); 


//esercizio extra1
 function area (l1, l2) {
    return l1 * l2
 }
    
 console. log (area(5, 40));

 //esercizio extra2

 function crazyDiff(n) {
    const diff = Math.abs(n - 19);
    return diff > 19 ? diff * 3 : diff;
}

console. log(crazyDiff(10))

//esercizio extra3 

function codify(str) {
    if (str.startsWith("code")) {
        return str;
    } else {
        return "code" + str;
    }
}
 
console. log(codify('epicoder'))

//esercizio extra4

function check3and7(n) {
    return n % 3 === 0 || n % 7 === 0;
}
 console. log(check3and7(7))

 //esercizio extra5

 function cutString(stri) {
 return stri.slice(1, -1)
 }

 console. log (cutString('esercizio riuscito'));

