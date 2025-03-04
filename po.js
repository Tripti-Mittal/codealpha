
gsap.from("a",{
    opacity:0,
    duration:1,
   stagger:0.7,
    y:-80,
    
    
})
gsap.from(".name",{
   x:-60,
    y:-250,
    stagger:1,
    duration:3,opacity:0
})
gsap.from(".ab",{
    x:-100,
    scale:1,
    scrollTrigger:{
        trigegr:".ab",
        scroller:"body",
        start:"top 30%",
        markers:true,
    }
})