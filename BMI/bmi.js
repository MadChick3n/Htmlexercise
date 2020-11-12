// const myHeight = document.getElementById("height").value;
// const myWeight = document.getElementById("weight").value;
const calc = document.getElementById("calc");
const bmiText = document.getElementById("bmiText");


calc.addEventListener('click',function(){
    const myHeight = document.getElementById("height").value;
    const myWeight = document.getElementById("weight").value;
    const height= Math.pow(myHeight/100,2);

    bmiText.innerText=myWeight/height;
})