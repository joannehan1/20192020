window.onload = function() {
	// myFunction();
  console.log("onload");
	// night();
};
var _first = true;
var _lost = true;
// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function appear() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


// function that moves yellow div to look like sunset
function night() {
  // console.log(first);
  // var first = true;
  if (_first == true) {
    const elem = document.getElementById("sunset");
    let pos = 0;
    var first = true;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 160) {
        clearInterval(id);
        _first = false;
      } else {
        pos++;
        elem.style.top = pos + "px";
        console.log(pos);
      }
    }
  }
}

function show() {
  var x = document.getElementById("two");
  var y = document.getElementById("onetwo");
  if (x.style.display === "none") {
    y.src='img/page123.png';
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function show2() {
  var z = document.getElementById("three");
  // var y = document.getElementById("onetwo");
  if (z.style.display === "none") {
    console.log("first");
    // y.src='img/page123.png';
    z.style.display = "block";
  } else {
    console.log("second");
    z.style.display = "none";
  }
}

function path() {
  // console.log(first);
  // var first = true;
  if (_lost == true) {
    const elem = document.getElementById("sunset");
    let pos = 0;
    var first = true;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 160) {
        clearInterval(id);
        _first = false;
      } else {
        pos++;
        elem.style.top = pos + "px";
        console.log(pos);
      }
    }
  }
}
