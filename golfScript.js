//dets whenever mouse is moving all changes can be seen in mouse event
//kisi element ko multiple times select krna hoga toh
var h4all=document.querySelectorAll("#nav h4");
//if we used queryselector then it will only show 1 h4
//if i print this var it will give me nodelist: sligtly similar to array
h4all.forEach(function(elem){
    //console.log(elem)
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #95C11E";
        crsr.style.backgroundColor="#95C11E";
    })
});
var crsr=document.querySelector("#cursor");
var crsr_blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    //console.log(dets.x);//change in values as we move in x axis
    //console.log(dets.y);//for y axis
    //cursor aap left se chale jao dets.x px...ok
    crsr.style.left=dets.x+"px";
    crsr_blur.style.left=dets.x-200+"px";
    //cursor aap top se chale jao dets.y px...ok
    crsr.style.top=dets.y+"px";
    crsr_blur.style.top=dets.y-200+"px";
});


//gsap.to(element_name,any css property u wanna give)
gsap.to("#nav",{
    //color:"red",
    //y: 30,//moving nav in y axis 
    backgroundColor: "#000",
    //takes 3 secs to come in original form
    height:"110px",
    /*ye 2 properties apply hogi at time of scrolling*/
    duration:0.5,
    //1sec delayed to start duration
    delay:1,
    //start & end markers dikh rhe hai 
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        //start point ko set kr do top se -10%
        //halka scroll kr do & start end gayab
        //nav bar ko visible krne ke liye scroll down i.e start & end
        //end will be greater negative than star...start top decide krte hai kis point se animation apply ho jayega
        start:"top -10%",
        end:"top -11%",
        //scrub basically sare scrolling chizo ko kaaat deta hai
        //means scroll jaise kiya ye sab gsap properties dikhne lagegi
        //animation on nav on repeat pe chalao...jitna marzi scroll kro
        scrub:1,//true,1-5
    },
});

//jaise jaise niche jaa rahe ho color change ho raha hai

gsap.to("#main",{
    //bahut immediate ho rha hai 
    backgroundColor:"#000",
    //jara dhire dhire karo
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start: "top -25%",
        end: "top -100%",
        //niche scroll kroge ekdum se color change ho jayega 
        //isliye scrub lagao
        scrub: 2,
    },
});
gsap.from("#about-us img,#about-me",{
    //y axis mei uthke aye
    y:90,
    //initially
    opacity: 0,
    duration: 1,
    //ek ek krke aaao
    stagger: 0.1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers: true,
        start: "top 70%",
        end:"top 65%",
        scrub: 1,
    },
});
gsap.from(".card", {
    scale: 0.8,
    opacity:0,
    duration: 1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
});
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers: true,
        start: "top 55%",
        end:"top 45%",
        //a slight delay in animation is scrub
        scrub: 4,
    },
});
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers: true,
        start: "top 55%",
        end:"top 45%",
        //a slight delay in animation is scrub
        scrub: 4,
    },
});
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });
