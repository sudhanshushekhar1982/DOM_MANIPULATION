// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0;i<smallImages.length;i++){
//     smallImages[i].scr = "spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// };
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll("div a"));

let para1 = document.createElement('p');
para1.innerText = "hey I'm red!";
document.querySelector("body").append(para1);
