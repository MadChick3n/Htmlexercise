const targetText = document.getElementById('target');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const apply = document.getElementById('apply');


// 寫一個函式,為了要補齊只有一位的時候前面的'0'
function decimal2Hex(d) {
    let hex = d.toString(16);
  
    // 補齊只有一位的時候的前面的'0'
    if (hex.length < 2) {
      hex = "0" + hex;
    }
  
    return hex;
  }
// targetText.style.color='blue';
apply.addEventListener('click',function(){
    let color = '#';
    color += (+one.value).toString(16);
    color += (+two.value).toString(16);
    color += (+three.value).toString(16);

    targetText.style.color= color;
    
})