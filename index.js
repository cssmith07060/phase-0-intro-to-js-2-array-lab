// Write your solution here!


//Run the tests using npm test.
//Read the errors; vocalize what they're asking you to do.
//Write code; repeat steps 1 and 2 often until a test passes.
//Repeat as needed for the remaining tests.

var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}


function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat(){
  cats.pop();
  return cats;
}
function destructivelyRemoveFirstCat() {
  cats.shift()
  return cats
}
function prependCat(name) {
  //clone cats array
  var catsCopy = [...cats]
  catsCopy.unshift(name)
  return catsCopy;
}

function destructivelyRemoveCat(){
  cats.shift();
  return cats;
}

function appendCat(name){
  var name_1= [...cats,name];
  return name_1;
}

function prependcats(name){
  var name_2=[name, ...cats];
  return name_2
}

function removeLastCat(){
  var caats= cats.slice(0,cats.length-1);
  return caats;
}

function removeFirstCat(){
  var catts= cats.slice(1)
  return catts
}
 










