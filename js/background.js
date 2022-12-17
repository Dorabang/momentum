// const images = ["0.jpg", "1.jpg", "2.jpg", '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const images = [];
for (let i = 0; i < 10; i++) {
  images.push(`${i}.jpg`);
}
// for 조건문에 10이라는 숫자 대신 넣을 수 있는 게 뭔가 없을까,,, length는 없는 원래 비어있는 요소라서 쓸 수 없음,,ㅜ

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `images/${chosenImage}`;

document.body.appendChild(bgImg);