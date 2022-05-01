function isOdd(n) {
	if (n % 2 != 0) {
		return true;
	} else {
		return false;
	}
}


// const module = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
//   };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // expected output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// // expected output: 42


var anon = function () {
	console.log('I am anonymous');
}
anon();


const getRectArea = function (width, height) {
	return width * height;
};
console.log(getRectArea(3, 4));
// expected output: 12

// Named Function Expression
var a = function a() {
	console.log(1);
}
a();

// anonymous function with implicit name b
var b = function () {
	console.log(2);
};
b();

setTimeout(function sayMoo() {
	console.log('MOO');
	setTimeout(sayMoo, 1000);
}, 1000);

// anonymous immediately invoked function expression
(
	function (variable) { return typeof variable; }
).name; // => ''

// NFE
var c = function bar(num) {
	while (num < 1000) {
		num++;
		console.log(num);
		return bar(num);
	}
}
c(0);

let a = function () {
	console.log('hi')
}


let btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
	console.log("button clicked")
})


const absValue = (number) => {
	if (number < 0) {
		return -number;
	}
	return number;
}
absValue(-10); // => 10
absValue(5);   // => 5
}

(a) => {
	return a + 100;
}
a => a + 100;

// IIFE
(function () {
	/* ... */
})();

// arrow function IIFE
(() => {
	/* ... */
})();

// async IIFE
(async () => {
	/* ... */
})();


var counter = (function () {
	var privateCounter = 0;
	function changeBy(val) {
		privateCounter += val;
	}

	return {
		increment: function () {
			changeBy(1);
		},

		decrement: function () {
			changeBy(-1);
		},

		value: function () {
			return privateCounter;
		}
	};
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.

// Constructor Function
// 1. Create the object
function Object(parameter1, parameter2) {
	this.property1 = property1;
	this.property2 = property2;
}
function Car(make, model) {
	this.make = make
	this.model = model
}
// 2. Instantiate the object by "building" it with 
new Object("<object1Name>", "<object2Name>")
new Car("Honda", "Toyota")



// Factory Function
function createPerson(name) {
	return {
		name,
		talk() {
			return `I am ${name}`
		}
	}
}

const tiger = function () {
	const noise = 'roar';
	return {
		sound: function () {
			console.log(noise);
		},
	}
}

const tigger = tiger();
tigger.sound(); //=> "roar"
