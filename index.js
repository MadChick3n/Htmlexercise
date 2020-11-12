const table99=document.getElementById('table99')

// let display='<tbody>'

// for(let i = 1; i<10;i++){
//     display+='<tr>'
//     for(let j=1;j<10;j++){
//         display +="<td>"
//         // const result = (i+1)*(j+1)
//         display += i
//         display +="x"
//         display += j
//         display +="="
//         display += i*j

//         display +="</td>"
//     }
// }

let display = ''

for (let i = 1; i < 10; i++) {
  display += '<tr>'
  for (let j = 1; j < 10; j++) {
    display += `<td>${i}x${j}=${i * j}</td>`
  }
  display += '</tr>'
}

table99.innerHTML = '<tbody>' + display + '</tbody>'

// table99.innerHTML=display