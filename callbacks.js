// Callbacks...
// nothing more than passing function to something else, and they will run the code later.
// In JS, functions are just objects.
// Therefore...you can pass functions around your code.

// this
// $('btn').click(function(){console.log('click')})
// // same as this
// var clickFunction = function(){console.log('click')}
// $('btn').click(clickFunction);


// var $ = {}
// $.click = function(callBackToRunLater){
// 	callBackToRunLater();
// }


// consider the following...


// function x(y){
// 	return function(z){
// 		console.log(y+z);
// 	}
// }
// x(2)(3)

// // How can you make this work...
// // The only way is if x returns a function.  that function will take a parameter..
// // Higher Order Function = a function that gets passed around

// function print(thingToPrint){
// 	console.log(thingToPrint);
// }

// // print function does not need to be passed around bc we have access to it locally.  Think Blackjack, deal was a utility function we called when we needed it.
// function b(number){
// 	let localNum = number * number;
// 	// call the print function above
// 	print(localNum);
// }

// function c(theString){
// 	let localString = theString + " is what was passed";
// 	print(localString);
// }

// b(2);
// c('test');

// // could also make print a prototype of a constructor.
// // BUT...what if we didnt have access to the code that needed to run our code?
// // I.e. what if we didnt have access to the 

// var a = function(theVar){
// 	console.log(theVar);
// }

// var b = function(number, callback){
// 	let localNum = number * number;
// 	callback(localNum);
// }

// // b(3, function(number){console.log(number)});
// b(3, a);



//////////FINDERS KEEPERS////////////
/////////////////////////////////////


// Write a function that accepts two parameters (you may add a third to differentiate type). The first is an array, and the second is a function. The function should look through the array for the first thing that matches the condition of the function passed. If a match is not found, return false.

// Test at least these:


function findElement(array, callback){
	for (var i = 0; i < array.length; i++){
		if (callback(array[i])){
			return array[i];
		}

	}
	return false;
}

var a = findElement([1,3,5,8,9,10], function(num){return num % 2 === 0})

var b  = findElement([1,3,5,9], function(num){reutrn num % 2 === 0})

var c = findElement(['Jim','Indian','Marsh','Glitch'], function(str){reutrn str.indexOf('itch') !== -1})

console.log(a)
console.log(b)
console.log(c)




// findElement([1,3,5,8,9,10], function(num){return num % 2 === 0})
// Return 8
function findElement(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return array[i];
        }
    }
}
var find = findElement([1,3,5,8,9,10], function(num) {
    return num % 2 === 0; 
});
console.log(find);
// findElement([1,3,5,9], function(num){reutrn num % 2 === 0})
// Return false
function findElementBool(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return array[i];
        }else{
            return false
        }
    }
}
var findBool = findElementBool([1,3,5,9], function(num) {
    return num % 2 === 0; 
});
console.log(findBool);
// findElement(['Jim','Indian','Marsh','Glitch'], function(str){return str.indexOf('itch') !== -1});
function findElementItch(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf('itch') !== -1){
            return array[i];
        }
    }
}
var findItch2 = findElementItch(['Jim','Indian','Marsh','Glitch']);
console.log(findItch2);
function findElementItch2(array,str) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf(str) !== -1){
            return array[i];
        }
    }
}
var findItch2 = findElementItch2(['Jim','Indian','Marsh','Glitch'],'itch');
console.log(findItch2);


// ES6 type 'For-loop'
var students = ['Rissa', 'Merilee', 'Chris', 'Stephen'];
students.map((student,index)=>{
	console.log(student);
});

//Array.prototype.mamp






