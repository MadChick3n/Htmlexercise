const clock = document.getElementById('clock')
const start = document.getElementById('start')
const stop = document.getElementById('stop')

// 先宣告一個全域的timerID，一般用null值先指定
let timerID = null

start.addEventListener('click', function () {
  // setInverval是每x微秒，執行一次回調函式中的程式碼
  timerID = setInterval(function () {
    // 轉換為本地的(台灣時間字串
    clock.innerHTML = new Date().toLocaleTimeString()
  }, 1000)
})

stop.addEventListener('click', function () {
  // 利用timerID清除計時器
  if(timerID) clearInterval(timerID)
})