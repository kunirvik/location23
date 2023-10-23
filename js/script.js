



   
//   //  window.onbeforeunload = function () {
//   //     window.scrollTo(0, 0);
//   //   };

  
    
    


//     // меню
    
// // const buttonMenu = document.querySelector('.menu-button');

// // const slideMenu = document.querySelector('.overlay');
// // const menuLink =  document.querySelector('.menu')


// // function openMenu (event){
// //   if(event.target = buttonMenu){
// //     buttonMenu.classList.add('hide')
// // menuLink.classList.remove('hide')
// //     slideMenu.classList.remove('hide')
  

    
// //   }

// // }
// // buttonMenu.addEventListener('click', openMenu)





// // function closeMenu(event){
// //   if(event.target = slideMenu ){
// //     buttonMenu.classList.remove('hide')
// //     slideMenu.classList.add('hide')
// //     menuLink.classList.add('hide')
 

// //   }
// // }
// // slideMenu.addEventListener('click', closeMenu)


// ////////////////////////////////////////////////////////////



// ScrollTrigger.saveStyles(".pusto2, #c, .zagolovok, .video01, .video02, .logotip, .description, .description2, .description3, .scoot ");

// if (ScrollTrigger.isTouch !== 2) {

//   // ScrollTrigger.matchMedia({
// //     "(min-width: 800px)": function() {
// // let tl001 = gsap.timeline({

// //   scrollTrigger:{
// //   trigger: ".pusto2",
// //   start: "top top",
// //   end: "1000px",

// //   scrub: true,
// //   }
  
  



// // });


// //   tl001.to('#c', {    
// //     y: -350,
// //     x: -850,
  
// //   scale: 0.25,
 
  
// // });



// //     },
// //     "(max-width: 799px) and (max-height: 899px)": function() {

// //       let tl667 = gsap.timeline({
      
// //         scrollTrigger:{
// //         trigger:"#c",
// //         start: "top",
// //         scrub: 1,
// //         end: "200vh ",
        
        
      
// //         }
// //       });
   
         
// //         tl667.to("#c", {  
// //           yPercent:-45,
// //        x:0,
// //         scale: 0.15,
 
// //       });
// //       },


// //       "(max-width: 799px) and (min-height: 799px)": function() {

// //         let tl6667 = gsap.timeline({
        
// //           scrollTrigger:{
// //           trigger:"#c",
// //           start: "top",
// //           scrub: 1,
// //           end: "200vh ",
          
          
        
// //           }
// //         });
     
           
// //           tl6667.to("#c", {  
// //             yPercent:-43,
// //          x:0,
// //           scale: 0.15,
   
// //         });
// //         },
  
// //   });


//   ScrollTrigger.matchMedia({
//     "(min-width: 800px)": function() {
// let tl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".video01",
//     start: "-200px",
//     end: "clamp(4000vh)",
//  toggleActions: "play none reset reset",
//  pin:  true,
//     pinSpacing:false,
//   markers:true,
 
//   }
// });
// tl3.from(".video01",{ y:100});
//     },
//     "(max-width: 799px) and (max-height: 799px)": function() {
    
//       let tl11 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".video01",
//           start: "-50px",
//        end:"1000px",
//        pin:  true,
       
        
      
//         }
//   });
//   tl11.from(".video01", { y:100,   } );
// },

// "(max-width: 799px) and (min-height: 799px)": function() {
    
//   let tl11 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".video01",
//       start: "-120px",
//    end:"1000px",
//    pin:  true,
   
    
  
//     }
// });
// tl11.from(".video01", { y:100,   } );
// },






// });



// ScrollTrigger.matchMedia({

//   "(max-width: 799px) and (max-height: 799px)": function() {
  
//     let tl11 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".logo-img",
//         start: "100px",
        
     
      
    
//       }
// });
// tl11.from(".logo-img", { y:100,   });
// },

// "(max-width: 799px) and (min-height: 799px)": function() {
  
// let tl11 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".logo-img",
//     start: "-120px",
 
//  pin:  true,
 
  

//   }
// });
// tl11.from(".logo-img", { y:100,   } );
// },


// });






  
// ScrollTrigger.matchMedia({
//   "(min-width: 800px)": function() {
// let tl4 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".video02",
//     start: "-200px",
//     end: "clamp(3000vh)",
  
//  pin:  true,
//     pinSpacing:false,
//   markers:true,
 
//   }

// });

// tl4.from(".video02", { y:100});
//   },
//   "(max-width: 799px) and (max-height: 799px)": function() {
    
//     let tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".video02",
//         start: "-50px",
//      end:"1000px",
//      pin:  true,
   
      
    
//       }
//     });
  
  
//     tl2.from(".video02", { y:300, opacity:0, } );
//       },
  

//       "(max-width: 799px) and (min-height: 799px)": function() {
    
//         let tl2 = gsap.timeline({
//           scrollTrigger: {
//             trigger: ".video02",
//             start: "-120px",
//          end:"1000px",
//          pin:  true,
       
          
        
//           }
//         });
      
      
//         tl2.from(".video02", { y:300, opacity:0, } );
//           },
  
// });


// ScrollTrigger.matchMedia({

//   "(min-width: 800px)": function() {

// let tl8 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".video03",
//     start: "-200px",
//     end: "clamp(2000vh)",
  
//  pin:  true,
//     pinSpacing:false,
//   markers:true,
 
//   }
// });

// tl8.from(".video03", { y:100});
//   },
//   "(max-width: 799px) and (max-height: 799px)": function() {
    
//     let tl2 = gsap.timeline({
      
//       scrollTrigger: {
//         trigger: ".video03",
//         start: "-50px",
//         end:"1500px",
//      pin:  true,
      
      
    
//       }
//     });
  
  
//     tl2.from(".video03", { y:300, } );
//       },
  
//       "(max-width: 799px) and (min-height: 799px)": function() {
    
//         let tl2 = gsap.timeline({
//           scrollTrigger: {
//             trigger: ".video03",
//             start: "-120px",
//          end:"1000px",
//          pin:  true,
       
          
        
//           }
//         });
      
      
//         tl2.from(".video03", { y:300, opacity:0, } );
//           },

// });

// ScrollTrigger.matchMedia({
//   "(min-width: 800px)": function() {
// let tl6 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".logotip",
//     start: "-200px",
//     end: "clamp(3000vh)",
  
    
//  pin:  true,
//     pinSpacing:false,
//   markers:true,
 
//   }
// });

// tl6.from(".logotip", { y:100});
// },
// "(max-width: 799px)": function() {
    
//   let tl208 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".logotip",
//       start: "-600px",
//    end:"-500px",
      
    
  
//     }
//   });


//   tl208.to(".logotip", { y:-1000, duration:2.5  } );
//     },

// });
// ScrollTrigger.matchMedia({

//   "(min-width: 800px)": function() {
// let tl5 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".description",
//     start: "-300px",
//     end: "clamp(2000vh)",

//  pin:  true,
//     pinSpacing:false,
//   markers:true,
 
//   }
// });
// tl5.from(".description", {y:700, duration:1.5, scale: 0});

//   },
//   "(max-width: 799px) and (max-height: 799px)": function() {
    
//     let tl208 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".description",
//         start: "-590px",
   
//      pin:  true,
       
      
    
//       }
//     });
  
  
//     tl208.from(".description", {y:500 } );
//       },

//       "(max-width: 799px) and (min-height: 799px)": function() {
    
//         let tl208 = gsap.timeline({
//           scrollTrigger: {
//             trigger: ".description",
//             start: "-700px",
       
//          pin:  true,
           
          
        
//           }
//         });
      
      
//         tl208.from(".description", {y:500 } );
//           },
    
// });

// ScrollTrigger.matchMedia({

//   "(min-width: 800px)": function() {
// let tl55 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".description2",
//     start: "-425px",
//     end: "clamp(2000vh)",

//  pin:  true,
//     pinSpacing:false,
//   markers:true,
 
//   }
// });
// tl55.from(".description2", {y:700, duration:1.5 });
// },
// "(max-width: 799px) and (max-height: 799px)": function() {
    
//   let tl2081 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".description2",
//       start: "-590px",

//       pin:  true,
     
    
  
//     },
    
//       "(max-width: 799px) and (min-height: 799px)": function() {
    
//         let tl208 = gsap.timeline({
//           scrollTrigger: {
//             trigger: ".description",
//             start: "-700px",
       
//          pin:  true,
           
          
        
//           }
//         });
      
      
//         tl208.from(".description", {y:500 } );
//           },
//   });


//   tl2081.from(".description2", {y:500 } );
//     },
    
//     "(max-width: 799px) and (min-height: 799px)": function() {
    
//       let tl208 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".description2",
//           start: "-700px",
     
//        pin:  true,
         
        
      
//         }
//       });
    
    
//       tl208.from(".description2", {y:500 } );
//         },
// });


// ScrollTrigger.matchMedia({

//   "(min-width: 800px)": function() {

// let tl555 = gsap.timeline({
//  x:500,
//   scrollTrigger: {
//     trigger: ".description3",
//     start: "-550px",
//     end: "clamp(505vh)",

//  pin:  true,
//     pinSpacing:false,
//   markers:true,
 
//   }
// });
// tl555.from(".description3", {y:700, duration:1.5 });

//   },

//   "(max-width: 799px) and (max-height: 799px)": function() {
    
//     let tl228 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".description3",
//         start: "-590px",
     
//         pin:  true,
       
      
    
//       }
//     });
  
  
//     tl228.from(".description3", {y:500 } );
//       },

//       "(max-width: 799px) and (min-height: 799px)": function() {
    
//         let tl208 = gsap.timeline({
//           scrollTrigger: {
//             trigger: ".description3",
//             start: "-700px",
       
//          pin:  true,
           
          
        
//           }
//         });
      
      
//         tl208.from(".description3", {y:500 } );
//           },
// });





// ScrollTrigger.matchMedia({

//   "(min-width: 800px)": function() {

// let tl555 = gsap.timeline({
//  x:500,
//   scrollTrigger: {
//     trigger: "wrapper-main",
//     start: "1000px",
//     end: "clamp(505vh)",

//     scrub:true,
 
//   }
// });
// tl555.from(".menu-button", {y:100, duration:1.5 });

//   },

//   "(max-width: 799px) and (max-height: 799px)": function() {
 
//     let tl228 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".menu-button",
//         start: "-600px",
       
//         pin:  true,
       
      
    
//       }
//     });
  
  
//     tl228.from(".menu-button", {y:-500 } );
//       },

//       "(max-width: 799px) and (min-height: 799px)": function() {
    
//         let tl208 = gsap.timeline({
//           scrollTrigger: {
//             trigger: ".menu-button",
//             start: "-700px",
       
//          pin:  true,
           
          
        
//           }
//         });
      
      
//         tl208.from(".menu-button", {y:-500 } );
//           },
// });
// }