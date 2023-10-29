// import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

// import {OBJLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/OBJLoader.js';




// function main() {
//   const canvas = document.querySelector('#c');
//   const renderer = new THREE.WebGLRenderer({canvas, alpha: true });
// renderer.setClearColor(0x000000, 0);
//   const fov = 45;
//   const aspect = 2;  //холст по умолчанию
//   const near = 0.1;
//   const far = 100;
//   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.set(0, 5, 20);

  

//   const scene = new THREE.Scene();
  

//   {
//     const skyColor = 0xC0C0C0;  // светло-синий
//     const groundColor = 0xBEBEBE;  // коричневато-оранжевый
//     const intensity = 1;
//     const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
//     scene.add(light);
//   }

//   {
//     const color = 0xFFFFFF;
//     const intensity = 1;
//     const light = new THREE.DirectionalLight(color, intensity);
//     light.position.set(0, 10, 0);
//     light.target.position.set(-5, 0, 0);
//     scene.add(light);
//     scene.add(light.target);
//   }
//   let ourObj;
//   {
//     const objLoader = new OBJLoader();
//     objLoader.load('models/park.obj', (object) => {
//       scene.add(object);
//       ourObj=object;
      
//       object.rotation.y = 150;

    

//     });
//   }

//   function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width, height, false);
//     }
//     return needResize;
//   }

//   function render() {

//     if (resizeRendererToDisplaySize(renderer)) {
//       const canvas = renderer.domElement;
//       camera.aspect = canvas.clientWidth / canvas.clientHeight;
//       camera.updateProjectionMatrix();
//     }
 
//     renderer.render(scene, camera);

   
//     requestAnimationFrame(render);

//     ourObj.rotation.y += 0.01

//  } 
//     renderer.render(scene, camera);
 

//   requestAnimationFrame(render);

// }
// main();




// //






// When scrolling, we run the function





import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
import { OBJLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/OBJLoader.js';
// import gsap from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js';
// import { ScrollTrigger } from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/ScrollTrigger.min.js';

document.addEventListener('DOMContentLoaded', function () {

async function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    const fov = 45;
    const aspect = 2;
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    // camera.position.set(0, 5, 20);
    // camera.position.set(0,0,5);
    
   
    const scene = new THREE.Scene();

    const skyColor = 0xFFFFFF;
    const groundColor = 0xFFFFFF;
    const intensity = 20;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);

    const color = 0xD300E0;
    const dirLightIntensity = 200;
    const dirLight = new THREE.DirectionalLight(color, dirLightIntensity);
    dirLight.position.set(50, 0, 50);
    dirLight.target.position.set(-5, 0, 0);
    scene.add(dirLight);
    scene.add(dirLight.target);

    const haloLight = new THREE.PointLight(0xffffff, 1, 10);
    haloLight.position.set(0, 0, 0);
    scene.add(haloLight);

    let ourObj;

    const objLoader = new OBJLoader();
    ourObj = await new Promise((resolve) => {
        objLoader.load('models/park.obj', (object) => {
            resolve(object);
        });
    });

    const textureLoader = new THREE.TextureLoader();
    const metalTexture = textureLoader.load('models/park.png');

    const metalMaterial = new THREE.MeshStandardMaterial({
        map: metalTexture,
        color: 0x67E01D,
        metalness: 0.98,
        roughness: 0
    });

    ourObj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = metalMaterial;
        }
    });
    
    ourObj.scale.set(0.05, 0.05, 0.05);
    ourObj.rotation.y = 250;
    // camera.lookAt(ourObj.position)
    ourObj.position.set(0, 0, 7);
    scene.add(ourObj);
    camera.lookAt(ourObj.position);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const highlightedMaterial = new THREE.MeshStandardMaterial({
        color: 0xFF0000, // Highlight color
        metalness: 0.98,
        roughness: 0
    });

    let highlightedObject = null;

    // Add a listener for mousemove events
    document.addEventListener('mousemove', (event) => {
        // Calculate mouse position relative to the canvas
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        // Update the raycaster with the mouse position
        raycaster.setFromCamera(mouse, camera);

        // Find intersected objects
        const intersects = raycaster.intersectObject(ourObj, true);

        // If there are intersections, highlight the first object
        if (intersects.length > 0) {
            if (highlightedObject) {
                highlightedObject.material = metalMaterial; // Revert the previous object
            }
            highlightedObject = intersects[0].object;
            highlightedObject.material = highlightedMaterial;
        } else if (highlightedObject) {
            // If no intersections, revert the highlighted object
            highlightedObject.material = metalMaterial;
            highlightedObject = null;
        }
    });

    
    // if (window.innerWidth > 799 && window.innerHeight > 800) {
    // Определите переменные для управления анимацией и меню
//     let selectedObject = null;
//     let isAnimating = false;
//     let rotationProgress = 0;
//     const rotationSpeed = 0.1;

//     const objectMenu = document.querySelector('#object-menu');
//     let isMenuOpen = false;

//     function positionMenu(event) {
//         const x = event.clientX;
//         const y = event.clientY;
//         const screenWidth = window.innerWidth;
//         const screenHeight = window.innerHeight;
    
//         // if (screenWidth <= 799 && screenHeight <= 800) {
//         //     objectMenu.style.left = "0px"; // Измените левое положение меню
//         //     objectMenu.style.top = "0px"// Добавьте класс для мобильной версии
//         // } else {
//         //       objectMenu.style.left = 1050+ "px";
//         // objectMenu.style.top = 15+ "px";
        
//         // }
//         objectMenu.style.left = 50+ "px";
//         objectMenu.style.top = 15+ "px"
//      objectMenu.style.display = "block";
//     }

//     function hideMenu() {
//         objectMenu.style.display = "none";
//     }

//     function onDocumentMouseClick(event) {
//         event.preventDefault();

//         if (isAnimating) return;

//         const intersects = getIntersects(event.clientX, event.clientY);

//         if (intersects.length > 0) {
//             selectedObject = intersects[0].object;

//             if (!isMenuOpen) {
//                 isAnimating = true;
//                 positionMenu(event);
//                 isMenuOpen = true;

//                 function animateRotation() {
//                     if (rotationProgress < Math.PI * 2) {
//                         rotationProgress += rotationSpeed;
//                         selectedObject.rotation.y += rotationSpeed;
//                         requestAnimationFrame(animateRotation);
//                     } else {
//                         isAnimating = false;
//                         rotationProgress = 0;
//                     }
//                 }

//                 animateRotation();
//             } else {
//                 hideMenu();
//                 isMenuOpen = false;
//             }
//         } else if (isMenuOpen) {
//             hideMenu();
//             isMenuOpen = false;
//         }
//     }

//     function getIntersects(x, y) {
//         const raycaster = new THREE.Raycaster();
//         const mouseVector = new THREE.Vector2();
//         mouseVector.x = (x / window.innerWidth) * 2 - 1;
//         mouseVector.y = -(y / window.innerHeight) * 2 + 1;
//         raycaster.setFromCamera(mouseVector, camera);
//         return raycaster.intersectObject(ourObj, true);
//     }

//     document.addEventListener("click", onDocumentMouseClick, false);

//     document.addEventListener("click", (event) => {
//         if (isMenuOpen && selectedObject) {
//             const intersects = getIntersects(event.clientX, event.clientY);

//             if (intersects.length === 0) {
//                 hideMenu();
//                 isMenuOpen = false;
//             }
//         }
//     });
//     // Инициализация анимации объекта при прокрутке
//     function initializeObjectAnimation() {

//         const tl001 = gsap.timeline({
//             scrollTrigger: {
//                 trigger: "#c",
//                 start: "top top",
//                 end: "1000px",
//                scrub:true,
//             }
//         });    

//   tl001.to(ourObj.scale, {
//     x: 0.015,
//     y: 0.015,
//     z: 0.015,
//    onComplete: () => {
    
//         ourObj.position.set(0, 0, 0); // Установите позицию объекта в центр экрана
//         camera.position.set(0, 3.5, 10); // Установите позицию камеры, чтобы она смотрела на объект
//         camera.lookAt(ourObj.position); // Установите направление камеры на объект
//     }
   
//  }); 
//  tl001.to(ourObj.position, {
//     y: 3.5,
//     // onUpdate: () => {
//     //     camera.lookAt(ourObj.position); // Обновите направление камеры на объект
//     // }, // Сместите объект вверх (по вашему желанию)
//     // onUpdate: () => {
//     //     camera.lookAt(ourObj.position); // Обновите направление камеры на объект
//     // },
// });
// // tl001.to(ourObj.position, {
// //     x: 3.5, // Измените эту позицию на -2, чтобы объект сместился влево
// //     y: 1.5, // Измените эту позицию на 2, чтобы объект сместился вверх
// //      // onComplete: () => {
// //     //     // Установите позицию камеры на центр объекта
// //     //     // camera.position.copy(ourObj.position);
// //     //     // camera.lookAt(ourObj.position);
// //     // } // onComplete: () => {
// //     //         // Установите позицию камеры на центр объекта
// //     //         camera.lookAt(ourObj.position);
// //     //     }, // z: -16,
// // }, );
// // }, );
  


 
//     }
        


//     // Добавьте ScrollTrigger для анимации объекта
//     ScrollTrigger.create({
//         trigger: "#c",
//         start: "top top",
//         end: "1000px",
       
//         onToggle: self => {
//             if (self.isActive) {
//                 initializeObjectAnimation();
              
               
               
//             }
//         }
        
//     });



          // }
          const cElement = document.querySelector('#c');
  const objectMenu = document.querySelector('.object-menu');
  const closeMenuButton = document.querySelector('#close-menu');

  // Функция для показа скрытого меню
  function showMenu() {
    objectMenu.style.display = 'block';
  }

  // Функция для скрытия скрытого меню
  function hideMenu() {
    objectMenu.style.display = 'none';
  }

  // Добавьте обработчик события клика на #c
  cElement.addEventListener('click', function () {
    showMenu();
  });

  // Добавьте обработчик события клика на кнопку закрытия меню
  closeMenuButton.addEventListener('click', function () {
    hideMenu();
  });

  // Добавьте обработчик события клика вне меню
  document.addEventListener('click', function (event) {
    if (event.target !== objectMenu && event.target !== cElement) {
      hideMenu();
    }
  });

    // Запуск рендеринга

      
      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
        return needResize;
    }

    function render() {
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        ourObj.rotation.y += 0.01
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

main();




ScrollTrigger.saveStyles(".pusto2, #c, .zagolovok, .video01, .video02, .logotip, .description, .description2, .description3, .scoot ");

if (ScrollTrigger.isTouch !== 2) {

  ScrollTrigger.matchMedia({
    
    "(min-width: 800px)": function() {
      let tl001 = gsap.timeline({
      
        scrollTrigger:{
        trigger: ".pusto2",
        start: "top top",
        end: "1000px",
      
        scrub: true,
        }
        
        
      
      
      
      });
      
      
        tl001.to('#c', {    
          yPercent:-40,
          xPercent:-45,
        
        scale: 0.25,
       
        
      });
      
          },
 
    "(max-width: 799px) and (max-height: 799px)": function() {
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#c",
    start: "top",
    scrub: 1,
    end: "200vh ",
 
  }
});
tl3.to("#c",{ yPercent:43,
  x:0,
   scale: 0.17,});
    }, 
  
    "(max-width: 799px) and (min-height: 799px)": function() {
      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#c",
          start: "top",
          scrub: 1,
          end: "200vh ",
       
        }
      });
      tl3.to("#c",{ yPercent:42,
        x:0,
         scale: 0.2,});
          }, })

    ScrollTrigger.matchMedia({
      
        "(min-width: 800px)": function() {
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video01",
        start: "-20%",
        end: "clamp(4000vh)",
     toggleActions: "play none reset reset",
     pin:  true,
        pinSpacing:false,
      markers:true,
     
      }
    });
    tl3.from(".video01",{ y:100});
        },

    
        "(max-width: 799px) and (max-height: 799px)": function() {
        
          let tl11 = gsap.timeline({
            scrollTrigger: {
              trigger: ".video01",
              start: "-7.5%",
           end:"850px",
           pin:  true,
           
            
          
            }
      });
      tl11.from(".video01", { y:100,   } );
    },
    
    "(max-width: 799px) and (min-height: 799px)": function() {
        
      let tl11 = gsap.timeline({
        scrollTrigger: {
          trigger: ".video01",
          start: "-10%",
       end:"950px",
       pin:  true,
       
        
      
        }
    });
    tl11.from(".video01", { y:100,   } );
    },
    
    
    
    
    
    
    });
    
        ScrollTrigger.matchMedia({
    
      "(min-width: 800px)": function() {
    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".description",
        start: "-80% 5%",
        end: "clamp(2000vh)",
    
     pin:  true,
        pinSpacing:false,
      markers:true,
     
      }
    });
    tl5.from(".description", {y:700, duration:1.5, scale: 0});
    
      },
      "(max-width: 799px) and (max-height: 799px)": function() {
        
        let tl208 = gsap.timeline({
          scrollTrigger: {
            trigger: ".description",
            start: "-440%",
       
         pin:  true,
           
          
        
          }
        });
      
      
        tl208.from(".description", {y:500, scale:0 } );
          },
    
          "(max-width: 799px) and (min-height: 799px)": function() {
        
            let tl208 = gsap.timeline({
              scrollTrigger: {
                trigger: ".description",
                start: "-600%",
           
             pin:  true,
               
              
            
              }
            });
          
          
            tl208.from(".description", {y:500, scale:0 } );
              },
        
    });
    
    
    ScrollTrigger.matchMedia({
    
      "(max-width: 799px) and (max-height: 799px)": function() {
      
        let tl11 = gsap.timeline({
          scrollTrigger: {
            trigger: ".logo-img",
            start: "100px",
            
         
          
        
          }
    });
    tl11.from(".logo-img", { y:100,   });
    },
    
    "(max-width: 799px) and (min-height: 799px)": function() {
      
    let tl11 = gsap.timeline({
      scrollTrigger: {
        trigger: ".logo-img",
        start: "-120px",
     
     pin:  true,
     
      
    
      }
    });
    tl11.from(".logo-img", { y:100,   } );
    },
    
    
    });
    
    
    
    
    
    
      
    ScrollTrigger.matchMedia({
      "(min-width: 800px)": function() {
    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video02",
        start: "-20%",
        end: "clamp(3000vh)",
      
     pin:  true,
        pinSpacing:false,
      markers:true,
     
      }
    
    });
    
    tl4.from(".video02", { y:100});
      },
      "(max-width: 799px) and (max-height: 799px)": function() {
        
        let tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".video02",
            start: "-7.5%",
         end:"700px",
         pin:  true,
       
          
        
          }
        });
      
      
        tl2.from(".video02", { y:300,  } );
          },
      
    
          "(max-width: 799px) and (min-height: 799px)": function() {
        
            let tl2 = gsap.timeline({
              scrollTrigger: {
                trigger: ".video02",
                start: "-10%",
             end:"540px",
             pin:  true,
           
              
            
              }
            });
          
          
            tl2.from(".video02", { y:300, opacity:0, } );
              },
      
    });
    
    
    ScrollTrigger.matchMedia({
    
      "(min-width: 800px)": function() {
    
    let tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video03",
        start: "-20%",
        end: "clamp(2100vh)",
      
     pin:  true,
        pinSpacing:false,
      markers:true,
     
      }
    });
    
    tl8.from(".video03", { y:100});
      },
      "(max-width: 799px) and (max-height: 799px)": function() {
        
        let tl2 = gsap.timeline({
          
          scrollTrigger: {
            trigger: ".video03",
            start: "-7.5%",
            end:"440px",
         pin:  true,
          
          
        
          }
        });
      
      
        tl2.from(".video03", { y:300, opacity:0 } );
          },
      
          "(max-width: 799px) and (min-height: 799px)": function() {
        
            let tl2 = gsap.timeline({
              scrollTrigger: {
                trigger: ".video03",
                start: "-10%",
             end:"500px",
             pin:  true,
           
              
            
              }
            });
          
          
            tl2.from(".video03", { y:300, opacity:0, } );
              },
    
    });
    
    ScrollTrigger.matchMedia({
      "(min-width: 800px)": function() {
    let tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".logotip",
        start: "-200px",
        end: "clamp(3000vh)",
      
        
     pin:  true,
        pinSpacing:false,
      markers:true,
     
      }
    });
    
    tl6.from(".logotip", { y:100});
    },
    "(max-width: 799px)": function() {
        
      let tl208 = gsap.timeline({
        scrollTrigger: {
          trigger: ".logotip",
          start: "-600px",
       end:"-500px",
          
        
      
        }
      });
    
    
      tl208.to(".logotip", { y:-1000, duration:2.5  } );
        },
    
    });

    ScrollTrigger.matchMedia({
    
      "(min-width: 800px)": function() {
    let tl55 = gsap.timeline({
      scrollTrigger: {
        trigger: ".description2",
        start: "-80% 25%",
        end: "clamp(2000vh)",
    
     pin:  true,
        pinSpacing:false,
      markers:true,
     
      }
    });
    tl55.from(".description2", {y:700, duration:1.5 });
    },
    "(max-width: 799px) and (max-height: 799px)": function() {
        
      let tl2081 = gsap.timeline({
        scrollTrigger: {
          trigger: ".description2",
          start: "-440%",
    
          pin:  true,
         
        
      
        },
        
          // "(max-width: 799px) and (min-height: 799px)": function() {
        
          //   let tl208 = gsap.timeline({
          //     scrollTrigger: {
          //       trigger: ".description",
          //       start: "-8%",
          //    pin:  true,
               
              
            
          //     }
          //   });
          
          
          //   tl208.from(".description", {y:500 } );
          //     },
      });
    
    
      tl2081.from(".description2", {y:500,  scale:0} );
        },
        
        "(max-width: 799px) and (min-height: 799px)": function() {
        
          let tl208 = gsap.timeline({
            scrollTrigger: {
              trigger: ".description2",
              start: "-400%",
         
           pin:  true,
             
            
          
            }
          });
        
        
          tl208.from(".description2", {y:500,   scale:0 } );
            },
    });
    
    
    ScrollTrigger.matchMedia({
    
      "(min-width: 800px)": function() {
    
    let tl555 = gsap.timeline({
      scrollTrigger: {
        trigger: ".description3",
        start: "-80% 45%",
        end: "clamp(2000vh)",
    
     pin:  true,
        pinSpacing:false,
      markers:true,
     
      }
    });
    tl555.from(".description3", {y:700, duration:1.5 });
    
      },
    
      "(max-width: 799px) and (max-height: 799px)": function() {
        
        let tl228 = gsap.timeline({
          scrollTrigger: {
            trigger: ".description3",
            start: "-490%",
         
            pin:  true,
           
          
        
          }
        });
      
      
        tl228.from(".description3", {y:500,  scale:0} );
          },
    
          "(max-width: 799px) and (min-height: 799px)": function() {
        
            let tl208 = gsap.timeline({
              scrollTrigger: {
                trigger: ".description3",
                start: "-510%",
           
             pin:  true,
               
              
            
              }
            });
          
          
            tl208.from(".description3", {y:500,  scale:0 } );
              },
    });
    
    
    
    
    
    ScrollTrigger.matchMedia({
    
      "(min-width: 800px)": function() {
    
    let tl555 = gsap.timeline({
     x:500,
      scrollTrigger: {
        trigger: "wrapper-main",
        start: "1000px",
        end: "clamp(505vh)",
    
        scrub:true,
     
      }
    });
    tl555.from(".menu-button", {y:100, duration:1.5 });
    
      },
    
      "(max-width: 799px) and (max-height: 799px)": function() {
     
        let tl228 = gsap.timeline({
          scrollTrigger: {
            trigger: ".menu-button",
            start: "-600px",
           
            pin:  true,
           
          
        
          }
        });
      
      
        tl228.from(".menu-button", {y:-500 } );
          },
    
          "(max-width: 799px) and (min-height: 799px)": function() {
        
            let tl208 = gsap.timeline({
              scrollTrigger: {
                trigger: ".menu-button",
                start: "-700px",
           
             pin:  true,
               
              
            
              }
            });
          
          
            tl208.from(".menu-button", {y:-500 } );
              },
    });
    }

});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};