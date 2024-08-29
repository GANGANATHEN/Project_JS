//select body element using querySelector method
const bodyEl = document.querySelector('body');

//if curser move then call addEventListener
bodyEl.addEventListener("mousemove",(event)=>{

    //x and y position
    const Xpos = event.offsetX
    const Ypos = event.offsetY

    //create span element
    const spanEl = document.createElement('span');

    // add x and y position to span--style = left and top
    spanEl.style.left = Xpos + "px";
    spanEl.style.top = Ypos + "px";

    //add heart size in span using Math.random method
    const size = Math.random() * 15 // "15" increase the value to get the big size of heart
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"

    //append span in body
    bodyEl.appendChild(spanEl);

    //settimeout method to remove span
    setTimeout(()=>{
        spanEl.remove()
    },5000)
})