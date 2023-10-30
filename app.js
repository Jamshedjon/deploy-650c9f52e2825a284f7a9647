// let obyect = {
//   ism: "Jamshed",
//   get getIsm() {
//     return this.ism;
//   },
//   set getIsm(qiymat) {
//     if (typeof this.ism == "number") {
//       throw new Error("sdjfsd");
//     } else {
//       this.ism = qiymat;
//     }
//   },
// };
// obyect.ism = 1231425;
// console.table(obyect.getIsm);

// const obyekt = {
//   ism: "Jamshed",
//   familiya: "Hasanjonov",
//   get fullName() {
//     return this.ism + " " + this.familiya;
//   },
//   set fullName(qiymat) {
//     const [ism, familiya] = qiymat.split(" ");
//     this.ism = ism;
//     this.familiya = familiya;
//   },
// };
// console.table(obyekt);
// console.log(`fullName:'${obyekt.fullName}'`);

// obyekt.fullName = "Java Script";
// console.table(obyekt);
// console.log(`fullName:'${obyekt.fullName}'`);

// const user = {
//   name: "",
//   set name(value) {
//     if (typeof value !== "string") {
//       throw new Error("Name must be a string");
//     }
//     this.name = value;
//   },
// };
// user.name = 123;

// function curryFunction(a) {
//   const add = (a2) => {
//     return curryFunction(`${a} ` + a2);
//   };
//   add.valueOf = () => a;

//   return add;
// }
// const result = curryFunction("There")("is")("no")("spoon.");
// console.log(result.valueOf());

// function ada(a) {
//   const add = (b) => {
//     return ada(`${a}` + b);
//   };
//   console.log(add.valueOf());
//   add.valueOf = () => a;
//   console.log((add.valueOf = () => a));
//   return add;
// }
// console.log(ada("df")("asda").valueOf());

// function sdfs(a) {
//   console.log("a1", a);
//   const sdf = (c) => {
//     console.log("c", c);
//     console.log("a2", a);
//     return sdfs(a + c);
//   };
//   sdf.valueOf = () => {
//     console.log("a3", a);
//     return a;
//   };
//   console.log((sdf.valueOf = () => a));
//   return sdf;
// }
// sdfs(1).valueOf();

// function ab(a) {
//   console.log("a1", a);
//   let b = (c) => {
//     console.log("c", c);
//     console.log("a2", a);
//     return ab(a + c);
//   };
//   console.log("a3", a);
//   b.sads = () => {
//     console.log("a4", a);
//     return a;
//   };
//   console.log("a5", a);
//   return b;
// }
// console.log(ab(2)(5)(9).sads());

// const curryUnaryFunction = (a2) => (a1) => (a3) => a1 + a2 + a3;
// console.log(curryUnaryFunction(1)(2)(3));

// function MyNumberType(n) {
//   this.number = n;
// }
// MyNumberType.prototype.valueOf = function () {
//   return this.number;
// };

// const object1 = new MyNumberType(4);

// console.log(object1 + 3);
// // Expected output: 7

// for (let i = 0; i < 4; i++) {
//   let letter = ``;
//   for (let i = 1; i <= 9; i++) {
//     for (let j = 0; j <= i; j++) {
//       letter = letter + "e";
//       console.log(letter);
//     }
//   }

//   let letter2 = letter;
//   for (let i = 9; i >= 1; i--) {
//     for (let j = 0; j <= i; j++) {
//       letter2 = letter2.replace("e", "");
//       console.log(letter2);
//     }
//   }
// }

// let object = {
//   ism: "Jamshid",
//   get getIsm() {
//     return this.ism;
//   },
//   set getIsm(a) {
//     if (typeof a !== "number") {
//       console.log("ss");
//       return (this.ism = a);
//     } else {
//       throw new Error("error");
//     }
//   },
// };
// object.ism = 11;
// console.log(object.getIsm);
// String.prototype.allIndexOf = function (toSearch) {
//   var indices = [];
//   for (
//     var pos = this.indexOf(toSearch);
//     pos !== -1;
//     pos = this.indexOf(toSearch, pos + 1)
//   ) {
//     indices.push(pos); /*from  ww  w. ja v a2 s .  c  om*/
//   }
//   return indices;
// };
// function keyDownHandler(e) {
//   if (e.keyCode === 39) {
//     rightPressed = true;
//   } else if (e.keyCode === 37) {
//     leftPressed = true;
//   }
// }
// function keyUpHandler(e) {
//   if (e.keyCode === 39) {
//     rightPressed = false;
//   } else if (e.keyCode === 37) {
//     leftPressed = false;
//   }
// }
//////////////////////////////////
// let box = document.getElementById("box");
// let ball = document.getElementById("ball");
// let tab = document.getElementById("tab");
// let posTab = 0;

// box.addEventListener("mousemove", (e) => {
//   tab.style.left = e.clientX - 108 + "px";
//   posTab = e.clientX;
// });

// let x = 400,
//   y = 100,
//   xspeed = 10,
//   yspeed = 10;
// const ballMove = () => {
//   ball.style.left = x + "px";
//   ball.style.top = y + "px";

//   x += xspeed;
//   y += yspeed;

//   if (x + 40 == box.clientWidth || x == 0) {
//     xspeed = -xspeed;
//   }
//   if (
//     y + 40 == box.clientHeight - 20 ||
//     (y == 0 && !(x <= posTab && x >= posTab - 100))
//   ) {
//     yspeed = -yspeed;
//   }
//   if (x <= posTab + 100 && x >= posTab && y + 40 == box.clientHeight - 20) {
//     xspeed = -xspeed;
//     yspeed = +yspeed;
//   }
//   // if (
//   //   (xspeed == 10, yspeed == 10  && x <= posTab && x >= posTab - 100)
//   // ) {
//   //   yspeed = -yspeed;
//   //   xspeed = -xspeed;
//   //   console.log(19777777777777777777777777777777777777777777777777);
//   // }

//   console.log("x", x, "y", y, xspeed, yspeed);
// };
// // ball()
// setInterval(() => {
//   ballMove();
// }, 100);
let box = document.getElementById("box");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const box10 = document.getElementById("box10");
const box11 = document.getElementById("box11");
const box12 = document.getElementById("box12");
const box13 = document.getElementById("box13");
const box14 = document.getElementById("box14");
const box15 = document.getElementById("box15");
const box_free = document.getElementById("box_free");

box1.style.left = 300 + "px";
let row11top = (box1.style.top = 100 + "px");
box2.style.left = 500 + "px";
let row12top = (box2.style.top = 100 + "px");
box3.style.left = 700 + "px";
let row13top = (box3.style.top = 700 + "px");
box4.style.left = 700 + "px";
let row14top = (box4.style.top = 500 + "px");

box5.style.left = 500 + "px";
box5.style.top = 300 + "px";

box6.style.left = 300 + "px";
box6.style.top = 300 + "px";

box7.style.left = 100 + "px";
box7.style.top = 500 + "px";

box8.style.left = 700 + "px";
box8.style.top = 300 + "px";

box9.style.left = 500 + "px";
box9.style.top = 500 + "px";

box10.style.left = 300 + "px";
box10.style.top = 500 + "px";

box11.style.left = 100 + "px";
box11.style.top = 300 + "px";

box12.style.left = 100 + "px";
box12.style.top = 100 + "px";

box13.style.left = 300 + "px";
box13.style.top = 700 + "px";

box14.style.left = 500 + "px";
box14.style.top = 700 + "px";

box15.style.left = 700 + "px";
box15.style.top = 100 + "px";
let fy = 700;
let fx = 100;

// test

// test

box_free.style.left = fx + "px";
box_free.style.top = fy + "px";

document.addEventListener("click", (e) => {
  let y = e.target.offsetTop;
  let x = e.target.offsetLeft;

  let box = document.getElementById(`box${e.target.textContent}`);

  // y uchun
  if (y + 200 == fy && x == fx) {
    fy -= 200;
    box.style.top = y + 200 + "px";
  } else if (y - 200 == fy && x == fx) {
    fy += 200;
    box.style.top = y - 200 + "px";
  }

  // x uchun
  if (x + 200 == fx && y == fy) {
    fx -= 200;
    box.style.left = x + 200 + "px";
  } else if (x - 200 == fx && y == fy) {
    fx += 200;
    box.style.left = x - 200 + "px";
  }

  box_free.style.left = fx + "px";
  box_free.style.top = fy + "px";
  chackNum();
});

function chackNum() {
  const answer = box.children;
  let row1 = [answer[0], answer[1], answer[2], answer[3]];
  let row2 = [answer[4], answer[5], answer[6], answer[7]];
  let row3 = [answer[8], answer[9], answer[10], answer[11]];
  let row4 = [answer[12], answer[13], answer[14], answer[15]];
  let counter = 0;
  for (let i in row1) {
    if (row1[i].style.top == "100px") {
      counter++;
    }
  }
  for (let i in row2) {
    if (row2[i].style.top == "300px") {
      counter++;
    }
  }
  for (let i in row3) {
    if (row3[i].style.top == "500px") {
      counter++;
    }
  }
  for (let i in row4) {
    if (row4[i].style.top == "700px") {
      counter++;
    }
  }

  if (counter == 16) console.log("yutdingiz");
  console.log(counter);
  // for (let i in answer) {
  //   if (i > 4 && answer[i].style.top == "100px") {
  //     counter++;

  //     if (counter == 4) {
  //       console.log("1qator");
  //     }
  //   } else if (i > 8) {
  //   } else if (i > 12) {
  //   } else if (i > 16) {
  //   }
  // }
  // if (counter == 4) console.log("1qator bo'ldi");
}
