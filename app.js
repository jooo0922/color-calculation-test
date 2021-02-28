'use strict';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.width = 500;
canvas.height = 500;
canvas.style.backgroundColor = 'black'

const COLOR_SPEED = 0.12;
const savedRgb = parseInt('0xf3316e', 16);
let curRgb = parseInt('0x451966', 16); // 미리 16진수 색상값을 10진수로 바꿔놓음.

function calColor() {
  curRgb += (savedRgb - curRgb) * COLOR_SPEED; // 매 프레임마다 override할 curRgb를 계산 

  const int = Math.round(curRgb); // 계산 결과의 소수점 이하는 반올림
  curRgb = int; // 계산된 10진수 정수값을 curRgb에 override 해놓기
  const hexString = int.toString(16); // 계산된 결과값도 10진수 이므로 16진수 string으로 변환

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);

  ctx.beginPath();
  ctx.fillStyle = `#${hexString}`
  ctx.fillRect(-50, -50, 100, 100)

  ctx.restore();

  // requestAnimationFrame(calColor);
}

// requestAnimationFrame(calColor);
setInterval(calColor, 20); // 20ms 간격으로 색상값을 변환해줌.