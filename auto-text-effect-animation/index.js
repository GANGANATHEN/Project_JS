// select the body element
const bodyEl = document.querySelector('body')

// create h1 Element
const h1El = document.createElement('h1');

//crete the text array
const career = ["Developer","Scientist","Doctor","Gree N"]

// career text index value
let careerText = 0;

// career text charecter value
careerCharValue = 0;

//write a function to change the career text
function changeText(){
    careerCharValue++;
    //write the contant what ever you want
    h1El.innerText = `Hi, ${career[careerText].slice(0,1) === "G" ? "My name is" : "i am a"} ${career[careerText].slice(0,careerCharValue)}`;

    //if careerCharValue and career[careerText].length is same it's move next career index
    if(careerCharValue === career[careerText].length){
        careerText++;
        //if careerText value is increase, then assign careerCharValue = 0
        careerCharValue = 0;
    }

    //if careerText and career.length value is same, then assign careerText index value is 0 so it will work infinitly
    if(careerText === career.length){
        careerText = 0;
    }

    //this method is text animation time
    setTimeout(changeText,700) //500 is a 5milsec
}

//call the function
changeText()

// append the h1 element in body
bodyEl.appendChild(h1El)