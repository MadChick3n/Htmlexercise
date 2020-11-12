const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

// 注意：陳列索引值是從0開始,'one'是對應到索引值0
const pointTextList = ['one','two','three','four','five','six']


start.addEventListener('click',function(){
   const p = Math.floor(Math.random()*6)+1
   point.innerHTML = p +'點'
   dice.innerHTML = `<i class="fas fa-dice-${pointTextList[p - 1]}"></i>`
})