var tl=gsap.timeline({
    scrollTrigger:{
        trigger:"#home",
        start:"top top",
        scrub:1,
        pin:true,
    }
})

tl.to("#btm img",{
    rotate:"-180deg",
    scale:.6,
    stagger:.1,
    ease:Power1
},"same")

.to("#overlay>h1",{
    y:200,
    display:"none",
    ease: Power1,
    stagger:.1,
},"same")

.to("#nav1",{
    color:"white",
    stagger:.1,
},"same")

tl.from("#c-one",{
    stagger:.1,
    y:350,
    scale:0,
},"same")
.to("#centreming h3",{
    opacity:0,
    x:-16,
    stagger:.1,
},"same")

tl.to("#c-one",{
    opactiy:0,
    stagger:1,
},"one")
tl.to("#circle",{
    scale:0,
    stagger:.1,
},"one")
tl.from("#pf>h1",{
    display:"none",
    stagger:.1,
    y:200,
    rotate:"10deg",
},"one")
tl.from("#lbox",{
    y:830,
    stagger:.1,
    delay:.1
},"one")