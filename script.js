var t1 = gsap.timeline();

t1.from("#nav h3",{
    duration:1,
    opacity:0,
    x : 20,
    stagger:0.5,
    color:"red"
})
t1.from("#first #fp",{
    duration:1,
    opacity:0,  
    onStart:function(){
        $('#first #fp').textillate({in: {effect: 'bounceInUp'}})
    },
    stagger:1
})
t1.from("#first h1",{
    duration:1,
    opacity:0,
    onStart:function(){
        $('#first h1').textillate({in: {effect: 'bounceInDown'}})
    },
    stagger:1
})
t1.to("#first #box",{
    opacity:1,
    duration:0.3,
    stagger:1
})
t1.from("#first #box p ",{
    opacity:0,
    y:30,
    duration:0.5,
    stagger:1
})

t1.from("#second h1",{
    opacity: 0,
    onStart:function(){
        $('#second h1').textillate({in: {effect: 'fadeInUp'}})
    },
    scrollTrigger:{
          trigger: "#second h1",

          scroller : "body",
          start: "top 70%",
          end: "top 40%",
          scrub:2
    },
    y:40
    
})
t1.from("#second h2",{
    opacity: 0,
    onStart:function(){
        $('#second h2').textillate({in: {effect: 'bounceInUp', loop:true}})
    },
    scrollTrigger:{
          trigger: "#second h2",

          scroller : "body",
          start: "top 70%",
          end: "top 40%",
          scrub:2
    },
    y:40
    
})
t1.from("#second p",{
    opacity: 0,
    y:-50,
    scrollTrigger:{
          trigger: "#second p",

          scroller : "body",
          start: "top 70%",
          end: "top 40%",
          scrub:2
    },
    y:40  
})
t1.from("#second button",{
    duration:1,
    opacity:0,
    y: 20,
    scrollTrigger:{
        trigger: "#second button",
        scroller : "body",
        start: "top 90%",
        end: "top 50%",
        scrub:2
  },
    stagger:0.5
})
t1.from("#second .img",{
    duration:1,
    opacity:0,
    x: 10,
    scrollTrigger:{
        trigger: "#second .img",
        scroller : "body",
        start: "top 90%",
        end: "top 50%",
        scrub:2
  },
    stagger:0.5
})
t1.from(".thirds h1",{
    duration:1,
    opacity:0,
    onStart:function(){
        $('.thirds h1').textillate({in: {effect: 'fadeInUp', loop:true}})
    },
    scrollTrigger:{
        trigger: ".thirds h1",
        scroller : "body",
        start: "top 90%",
        end: "top 50%",
        scrub:3
  },
    stagger:0.5
})
t1.from("#baxaa",{
    duration:1,
    opacity:0,
    y: 30,
    scrollTrigger:{
        trigger: "#baxaa",
        scroller : "body",
        start: "top 90%",
        end: "top 42%",
        scrub:2
  },
    stagger:0.5
})
t1.from(".fone1",{
    duration:1,
    opacity:0,
    x: 30,
    scrollTrigger:{
        trigger: ".fone1",
        scroller : "body",
        start: "top 90%",
        end: "top 42%",
        scrub:2
  },
    stagger:0.5
})
t1.from("#baxaa h1",{
    duration:1,
    opacity:1,
    onStart:function(){
        $('#baxaa h1').textillate({in: {effect: 'fadeInDown', loop:true}})
    },
    scrollTrigger:{
        trigger: "#baxaa h1",
        scroller : "body",
        start: "top 90%",
        end: "top 50%",
        scrub:3
  },
    stagger:0.5
})
t1.from("#baxaa h2",{
    duration:1,
    opacity:1,
    onStart:function(){
        $('#baxaa h2').textillate({in: {effect: 'wobble', loop:true}})
    },
    scrollTrigger:{
        trigger: "#baxaa h2",
        scroller : "body",
        start: "top 90%",
        end: "top 50%",
        scrub:3,
  },
    stagger:0.5
})
