// PROMISES;
// A way to manage async without passings thousands of callback functions or nesting to no end...

// I.e. this...

// connection.query(query1, (result1)=>{
// 	connection.query(query2, (result2)=>{
// 		connection.query(query3, (result3)=>{
// 			connection.query(query4, (result4)=>{

// 			});

// 		});

// 	});
// });

// connection.query(query1){
	// do some stuff.
	// call function I got from earlier and pass it what I got from result1
	// call function I got earlier and pass it this result.
	// call function I got earlier and pass it this result...

// }

function successCallBack(result){
	console.log("success: " + result);
}

function failuerCallBack(result){
	console.log("failed: " + result);
}

function checkName(name, winning, losing){
	if (name == 'Rob'){
		winning("Name is Rob");
	}else{
		losing("Name not Rob");
	}
}

checkName("Rob", successCallBack, failuerCallBack);

// Promise is a JS constructor that gives you a few methods:
// .all 
// .race 
// .reject 
// .resolve 
// .then

let myFirstPromise  = new Promise ((resolve, reject)=>{
	// resolve and reject are callbacks
	// run resolve when done with async stuff..
	// run reject if it failed..
	// setTimeout will stand in as ajax or sql request
	setTimeout(function(){
		resolve("success!") 
	}, 250);

});
console.log(myFirstPromise);
myFirstPromise.then((successMessage)=>{
	console.log(successMessage);
	console.log(myFirstPromise);
});






















