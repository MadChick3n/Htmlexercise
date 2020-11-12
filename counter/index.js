const target= document.getElementById('target');
const plus = document.getElementById('plus');
const minus= document.getElementById('minus');
// // 1.得到目前網上的數字是多少
    // const nowNumber = + document.getElementById('target').innerHTML
    // // 2.將目前數字+1,然後呈現出來(記得要是數字不是字串)
    // document.getElementById('target').innerHTML = nowNumber + 1
plus.addEventListener('click',function(){
    target.innerHTML = +target.innerHTML+1;
})

minus.addEventListener('click',function(){
    target.innerHTML = +target.innerHTML-1;
})