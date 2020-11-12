const yearAndMonth = document.getElementById('yearAndMonth')
const title = document.getElementById('title')
const data = document.getElementById('data')

const now = new Date()

//用樣版字串的寫法
//yearAndMonth.innerHTML = `${now.getFullYear()}-${now.getMonth() + 1}`

//用分開定義年和日的寫法
const nowY = now.getFullYear()
//注意回傳為0~11
const nowM = now.getMonth() + 1

// 呈現在網頁上
yearAndMonth.innerHTML = nowY + '-' + nowM

// 星期幾的陣列
const weekList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

let weekTitleDisplay = ''

for (let i = 0; i < weekList.length; i++) {
  weekTitleDisplay += `<th>${weekList[i]}</th>`
}

// 呈現在網頁上
title.innerHTML = `<tr>${weekTitleDisplay}</tr>`

// 計算本月有幾天
const days = new Date(nowY,nowM, 0).getDate()

// 計算本月的第一天是星期幾，回傳0-6，0代表星期日，1-6代表星期一到六
const weekdayFirst = new Date('2020/10/1').getDay()

console.log(days, weekdayFirst)

const numberOfMember = days + weekdayFirst

// 產生這個準備呈現在網頁上的陣列
const dataTemp = []

for (let i = 0; i < numberOfMember; i++) {
  if (i < 4) {
    dataTemp.push('')
  } else {
    dataTemp.push(i - 3)
  }
}

console.log(dataTemp)

// 準備呈現在網頁上

let dataDisplay = '<tr>'

for (let i = 0; i < dataTemp.length; i++) {
  dataDisplay += `<td>${dataTemp[i]}</td>`

  // 每7個後面要加入一個換下一列的標記
  if ((i + 1) % 7 === 0) {
    dataDisplay += '</tr><tr>'
  }
}

dataDisplay += '</tr>'

console.log(dataDisplay)

// 呈現在網頁上
data.innerHTML = `${dataDisplay}`