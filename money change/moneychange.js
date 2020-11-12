// 先統一得到目前的網頁上的要使用的dom元素物件
const moneyInput = document.getElementById('moneyInput');
const usd2twd = document.getElementById('usd2twd');
const twd2usd = document.getElementById('twd2usd');
const  moneyText= document.getElementById('moneyText');


usd2twd.addEventListener('click',function(){
    const money = +moneyInput.value;
    moneyText.innerHTML=(28.53*money).toFixed(0);
});

twd2usd.addEventListener('click',function(){
    const money= +moneyInput.value;
    moneyText.innerHTML=(money/28.53).toFixed(2);
})

