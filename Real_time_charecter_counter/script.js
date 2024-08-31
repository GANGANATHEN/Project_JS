//get all elements using getelementbyid method
const textareaEl = document.getElementById("text-area")
const charecterLimitEl = document.getElementById("charecter-limit")
const charecterRemainingEL = document.getElementById("charecter-remaining")


textareaEl.addEventListener("keyup",()=>{
    updateCharecterLimit()
})

updateCharecterLimit()

function updateCharecterLimit(){
    charecterLimitEl.innerText = textareaEl.value.length
    charecterRemainingEL.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length
}