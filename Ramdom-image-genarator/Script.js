//select the img container and button using quaryselector
const imgContainerEl = document.querySelector(".img-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click",()=>{
    imgEle = 10;
    loadMore();
})

function loadMore(){
    for (let index = 0; index < imgEle; index++) {
        const imgEl = document.createElement("img");
        imgEl.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`
        imgContainerEl.appendChild(imgEl);
        
    }
}
