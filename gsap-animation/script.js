//get the box element using quaryselector
const boxEl = document.querySelector(".box")

//animation using gsap method
gsap.to(boxEl,{
    duration:2,
    x:400,
    backgroundColor:"#FE6503",
    borderRadius:"50%",
    rotation:360,
    yoyo:true,
    repeat:-1
})