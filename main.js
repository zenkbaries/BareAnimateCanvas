/////////////////////////////////
//  Canvas  /////////////////////
/////////////////////////////////

//  Canvas Declaration
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var bgColor = "#000000";
var scrW = window.innerWidth;
var scrH = window.innerHeight;

// set canvas size
c.width = window.innerWidth;
c.height = window.innerHeight;

// Clear screen
ctx.clearRect(0, 0, c.width, c.height);



/////////////////////////////////
//  Drawing  a frame  ///////////
/////////////////////////////////

//
//  Write declaration or function
//  here for draw to keep the scope
//  ()** need to rewrite this to make it more clear **)
//

function draw() {

//
//  Write code here to draw anything
//  and you can iterate to show movement
//  each time draw() are called
//

}

/////////////////////////////////
//  Animation  //////////////////
/////////////////////////////////


// Initalize the animationFrame
window.requestAnimFrame = (
  function() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  }
)();

// animate function
function animate() {
  requestAnimFrame(animate);
  draw();  ////// drawing a frame
}

//start animation
animate();
