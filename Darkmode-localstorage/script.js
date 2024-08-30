//get all element using querySelector
const labelEl = document.querySelector('.label')
const inputEl = document.querySelector('.input')
const bodyEl = document.querySelector('body')

//call the changeBakcolor() function using addEventListener,when input is checked
inputEl.addEventListener("input",()=>{
    changeBakcolor();
    updateLocalstorage();
})

//inputEl.checked defaultly i enter the value in false
inputEl.checked = JSON.parse(localStorage.getItem("bacval"))
changeBakcolor();
//change body background color
function changeBakcolor(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }
    else{
        bodyEl.style.background = "white";
    }
}


//add the checked value in localstorage
function updateLocalstorage(){
    localStorage.setItem("bacval",JSON.stringify(inputEl.checked))
}