//LOOPS

//LOOP 1
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
		console.log([i] + " is even.")
} else {
		console.log([i] + " is odd.")
}
}

//LOOP 2
for (let i = 1; i <= 100; i++) {
 	if (i % 3 === 0 && i % 5 === 0) {
 	  console.log("FizzBuzz")
  } else if (i % 3 === 0) {
 	  console.log("Fizz")
  } else if (i % 5 === 0) {
 		console.log("Buzz")
  } else {
 		console.log(i)
  }
}

//LOOP 3
let xShape = 'x';

for (let i = 0; i <= 4; i++) {
  console.log(xShape);
xShape += 'x';
}
