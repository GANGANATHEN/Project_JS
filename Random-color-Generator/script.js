const containerEl = document.querySelector('.container')

for (let index = 0; index < 30; index++) {
    const colorcontainerEL = document.createElement('div')
    colorcontainerEL.classList.add('color-container')
    containerEl.appendChild(colorcontainerEL);
    // rendomColor()
}

const colorcontainerELs= document.querySelectorAll(".color-container")
// console.log(colorcontainerELs);


genearateColor()
function genearateColor(){
    colorcontainerELs.forEach((colorcontainerEL)=>{
        const newColorCode = randomColor();
        colorcontainerEL.style.backgroundColor ='#' + newColorCode;
        colorcontainerEL.innerText = '#' + newColorCode
    })
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length)
        colorCode += chars.substring(randomNum,randomNum+1) 
        // console.log(randomNum); 
    }
    return colorCode
}