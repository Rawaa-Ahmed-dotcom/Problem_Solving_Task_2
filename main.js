// Solving Problem 1
// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
	return (base * height) / 2;
}

console.log(triArea(2,4));
// Solving Problem 2
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.


function addition(num) {
	return ++num;
}
console.log(addition(3));

// Solving Problem 3
// Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes) {
	return minutes * 60;
}
console.log(convert(1));

// solving problem 4
//Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(length, width) {
	return (length + width) * 2;
}
console.log(findPerimeter(3,4));
// solcing problem 5
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function points(twoPointers, threePointers) {
	return twoPointers * 2 + threePointers * 3;
}

console.log(points(3,4));