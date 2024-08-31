//get all elements using quarySelector
const imgEl = document.querySelector('img')
const textEl = document.querySelector('.user-text')
const nameEl = document.querySelector('.user-name')

//add testimonal value using Object
const testimonialData = [
    {
        name:"Ava Joshmin",
        img_url:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Gree N's website is truly innovative, offering cutting-edge solutions that exceed expectations. I am thrilled with the seamless user experience and modern design. Highly recommend to anyone looking for a fresh approach to online presence."
    },
    {
        name:"Emily Jhonson",
        img_url:"https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Gree N's website is truly innovative, offering a seamless user experience and cutting-edge design. I highly recommend their services for anyone looking to elevate their online presence."
    },
    {
        name:"Emily Parker",
        img_url:"https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I am truly impressed by Gree N's innovative approach to website design. Their team's creativity and attention to detail have helped me create a unique online presence that stands out from the competition"
    },
]

let idx = 0;

//call the function
updateTetimonials()

//update Tetimonials value to the element using function
function updateTetimonials(){
    const {name,img_url,text} = testimonialData [idx];
    imgEl.src = img_url
    textEl.innerText = text
    nameEl.innerText =name
    idx++
    if(idx === testimonialData.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTetimonials();
    },10000)
}