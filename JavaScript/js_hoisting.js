// Objective 1:
console.log('\nObjective #1');
var hello = "world";
console.log(hello);

// Objective 2:
console.log('\nObjective #2');
var needle = 'haystack';
function test(){
	var needle = 'magnet';
	console.log(needle);
}	test();

// Objective 3:
console.log('\nObjective #3');
function print(){
	var brendan = 'only okay';
	console.log(brendan);
	brendan = 'super cool';
	console.log(brendan);
}	print();

// Objective 4:
console.log('\nObjective #4');
function eat(){
	var food = 'Chicken';
	console.log(food);
	food = 'Half-Chicken';
	console.log(food);
	food = 'Gone';
	console.log(food);
}	eat();

// Objective 5:
console.log('\nObjective #5');
var mean = function() {
	var food = "chicken";
	console.log(food);
	food = "fish";
	console.log(food);
};	mean();

// Objective 6:
console.log('\nObjective #6');
function rewind() {
	var genre = "disco";
	console.log(genre);
	genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}	rewind();

// Objective 7:
console.log('\nObjective #7');
function learn() {
	var dojo = "seattle";
	console.log(dojo);
	dojo = "san jose";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}	learn();

// Objective 8:
console.log('\nObjective #8');
function makeDojo(name, students){
	dojo = {};
	dojo.name = name;
	dojo.students = students;
	if (dojo.students > 50) 		{ dojo.hiring = true; }
	else if(dojo.students <= 0) 	{ dojo = "closed for now"; }
	return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));