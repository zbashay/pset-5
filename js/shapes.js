window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

      document.getElementById("hello").onclick = sayHello;
      document.getElementById("rectangle").onclick = drawRectangle;
      document.getElementById("colored_rectangle").onclick = drawColoredRectangle;
      document.getElementById("triangle").onclick = drawTriangle;
      document.getElementById("smile").onclick = drawFace;
      document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */
 const sayHello = function() {
   const canvas = document.getElementById('student-canvas-1');
   const ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   do {
     var text = prompt("Message: ")
     if (text == null) {
       break;
     }
     if (text.length > 50) {
       alert("Your message is too long. Keep it under 50 characters")
     }
   } while(text.length > 50)

   if (text != null) {
     ctx.font = "48px sans-serif";
     ctx.strokeText(text, 30, 70, 994);
   }
 };

/*
 * Exercise 2.
 */

const drawRectangle = function() {
  const canvas = document.getElementById('student-canvas-2');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var width = 0;
  var height = 0;
  var x = 0;
  var y = 0;
  do {
    var width = prompt("Width: ")
    var height = prompt("Height: ")
    var x = prompt("X: ")
    var y = prompt("Y: ")
    if (width == null || height == null || x == null || y == null) {
      break;
    }
    if (width > 1024 || width < 1) {
      alert("Your width must be between 1 and 1024.")
    }
    else if (height > 512 || height < 1) {
      alert("Your height must be between 1 and 512.")
    }
    else if (x < 1 || x > 1024) {
      alert("Your x-coordinate must be between 1 and 1024.")
    }
    else if (y < 1 || y > 512) {
      alert("Your y-coordinate must be between 1 and 512.")
    }
    else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
      alert("One of your values is not a number.")
    }
    else if (Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512) {
      alert("Your rectangle won't fit on the canvas.")
    }
  } while (width > 1024 || width < 1 || height > 512 || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y) || Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512)

  if (!(width == null) && !(height == null) && !(x == null) && !(y == null)) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.closePath();
    ctx.stroke();
  }
};

/*
 * Exercise 3.
 */

  const drawColoredRectangle = function() {
    const canvas = document.getElementById('student-canvas-3');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    do {
      var color = (prompt("Color: "))
      if (color == null) {
        break;
      }
      color = String(color)
      var color_formatted = color.toUpperCase()
      if (color_formatted != "GREEN" && color_formatted != "BLACK" && color_formatted != "BLUE" && color_formatted != "ORANGE" && color_formatted != "PURPLE" && color_formatted != "RED" && color_formatted != "YELLOW") {
        alert(color + " is not a supported color.")
      }
    } while (color_formatted != "GREEN" && color_formatted != "BLACK" && color_formatted != "BLUE" && color_formatted != "ORANGE" && color_formatted != "PURPLE" && color_formatted != "RED" && color_formatted != "YELLOW")

    if (color != null) {
      ctx.fillStyle = color_formatted;
      ctx.fillRect(10, 10, 100, 50);
    }
};

/*
 * Exercise 4.
 */

  const drawTriangle = function() {
    const canvas = document.getElementById('student-canvas-4');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    do {
      var side1 = prompt("Side 1: ")
      var side2 = prompt("Side 2: ")
      var side3 = prompt("Side 3: ")

      var height = Math.min (side1, side2, side3)
      var hypotenuse = Math.max(side1, side2, side3)
      var base = Math.sqrt(hypotenuse*hypotenuse - height*height)

      if (base == 0 && height == 0 && hypotenuse == 0) {
        break;
      }
      side1 = Number(side1)
      side2 = Number(side2)
      side3 = Number(side3)
      if (base*base + height*height != hypotenuse*hypotenuse || base == 0 || height == 0 || hypotenuse == 0  || side1+side2+side3-hypotenuse-height != base) {
        alert("That's not a valid right triangle.")
      }
      if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        alert("One of your sides is not a number.")
      }
      if (base > 1024 || height > 512 || hypotenuse > 1310720) {
        alert("Your triangle won't fit on the canvas.")
      }
    }  while ((Math.floor(base)*Math.floor(base) + height*height != hypotenuse*hypotenuse) || isNaN(side1) || isNaN(side2) || isNaN(side3) || base > 1024 || height > 512 || hypotenuse > 1310720 || base == 0 || height == 0 || hypotenuse == 0)

    if ((base*base + height*height == hypotenuse*hypotenuse) && (base < 1024 && height < 512 && hypotenuse < 1145) && (base != 0 && height != 0 && hypotenuse != 0) && (base != null && height != null && hypotenuse != null)) {
      height = height + 25
      base = base + 25
      ctx.beginPath();
      ctx.moveTo(25, 25);
      ctx.lineTo(25, height);
      ctx.lineTo(base, height)
      ctx.lineTo(25, 25)
      ctx.stroke();
    };
  }

/*
 * Exercise 5.
 */

  const drawFace = function() {
    const canvas = document.getElementById('student-canvas-5');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    do {
      var radius = (prompt("Radius: "))
      if (radius == null) {
        break;
      }
      if (radius < 32) {
        alert("Your radius must be at least 32.")
      }
      if (isNaN(radius)) {
        alert("Your radius is not a number.")
      }
      if (radius > 256) {
        alert("Your smiley face won't fit on the canvas.")
      }
    } while (radius > 256 || isNaN(radius) || radius < 32)

    var radius_eyes = 0.15 * radius
    var radius_mouth = 0.7 * radius

    ctx.beginPath();
    ctx.arc(512, 256, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(512, 256, radius_mouth, 0, Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(512 - 0.4 * radius, 256 - 0.4 * radius, radius_eyes, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(512 + 0.4 * radius, 256 - 0.4* radius, radius_eyes, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
  };

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
const canvas = document.getElementById('student-canvas-6');
const ctx = canvas.getContext('2d');
var distance = 0
var height_1 = 0
var distance_modifier = 0
var height_modifier = 0
var counter = 5
ctx.clearRect(0, 0, canvas.width, canvas.height);

do {
  var side = (prompt("Side: "))
  if (side == null) {
    break;
  }
  if (side < 1) {
    alert("Your block size must be at least 1.")
  }
  if (side >= 101) {
    alert("Your pyramid won't fit on the canvas")
  }
  if (isNaN(side)) {
    alert("Your block size is not a number.")
  }
} while (isNaN(side) || side >= 101 || side < 1)

for (i = 5; i > 0; i--) {
  counter = i
  while(counter >= 1) {
    ctx.beginPath();
    ctx.rect(10 + Number(distance), (502 - side) - Number(height_1), Number(side), Number(side));
    ctx.stroke();
    ctx.closePath();
    distance = Number(distance) + Number(side)
    counter--
  }
  distance_modifier++
  distance = distance_modifier * (1/2 * side)
  height_modifier++
  height_1 = height_modifier * side
}
};
