const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes =  String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock(); // 인터벌 실행 전 보여줘야하기 때문
setInterval(getClock, 1000);  // 실시간으로 업데이트되는 시간을 확인할 수 있음.