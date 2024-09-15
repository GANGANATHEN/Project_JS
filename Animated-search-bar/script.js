const searchBarContainerEl = document.querySelector(".searchbar-container")
const magnifierEl = document.querySelector(".magnifier")


magnifierEl.addEventListener("click",()=>{
    searchBarContainerEl.classList.toggle("active")
})