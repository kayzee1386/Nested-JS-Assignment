//Part 1

var nestedData = {
    innerdata: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [2,3,5,7,11],
            fibonnaci: [1,1,2,3,5,8,13]
        },
        addSnack: function(snack){
            this.snack.push(snack);
            return this;
        }
    }
}

a. 
function newestData(){
var data = nestedData.innerData.numberData.primeNumbers
    for(var i = 0; i < data.length; i++){
        console.group(data[i])
    }
}
newestData();

b.
function fibonnaciNumber() {
    var evenNumbers = [];
    var fibonnaciEvenNumbers = nestedData.innerData.numberData.fibonnaci;
        for(var i = 0; i < fibonnaciEvenNumbers.length; i++){
            if(fibonnaciEvenNumbers[i] % 2 === 0){
                console.log(fibonnaciEvenNumbers[i]);
            }
        }  
}

c. 
var secondObject = nestedData.innerData.order[1];
console.log(secondObject);

d.
nestedData.innerData.addSnack("chocolate");

e. 

In a JavaScript function, the owner of the function is the default binding for "this".

So, in a function, "this" refers to the Global object.
The 'this' keyword refers to the object the function belongs to, or the window object if the function belongs to no object.


// Part 2
a. 

function addAnotherSpeaker() {
    var detailsOfObjects = nestedObject.speakers.push({name: "Kazeem"})
    console.log(detailsOfObjects)
}
addAnotherSpeaker()


b. 
function addLanguage(language, helloInLanguage) {
    nestedObject.data.languages[language] = {
        hello: helloInLanguage
    }
}

c. 
function addCountry(name, capital, population) {
    nestedObject.data.continents.europe.countries[name] = {
        capital: capital,
        population: population
    }
}

//Part 3
function rotate(arr, num){
    var amount = num % arr.length;
    for(var i=0; i< amount; i++){
      arr.unshift(arr.pop());
    }
    return arr;
}
rotate([1,2,3,4,5], 3)

//Part 4

function makeXOGrid(rows,amount){
    var finalArr = []
    var startArr = true
    for(var i=0; i<rows; i++){
        var newRow = []
        for(var j=0; j<amount; j++){
            if(startArr){
                newRow.push("X")
            }
            else {
                newRow.push("O")
            }
            startArr = !startArr
        }
        finalArr.push(newRow)
    }
    return finalArr;
}

makeXOGrid(2,4);
(2) [Array(4), Array(4)]
0: (4) ["X", "O", "X", "O"]
1: (4) ["X", "O", "X", "O"]