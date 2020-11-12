const name = document.getElementById('name')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const send = document.getElementById('send')
const message = document.getElementById('message')

send.addEventListener('click', function () {
  let error = ''
  //相當於 if(name.value === "")
  //利用空白字串是假家族的情況來判斷
  if (!name.value) error += ' 姓名沒填'
  if (!phone.value) error += ' 電話沒填'
  if (!address.value) error += ' 住址沒填'
  if (!username.value) error += ' 帳號沒填'
  if (!password.value) error += ' 密碼沒填'

  if (username.value.length < 6) error += ' 帳號至少要6位'
  if (password.value.length < 6) error += ' 密碼至少要6位'

  if (password.value !== password2.value) error += ' 兩次輸入的密碼不同'

  // 三元表達式來判斷有沒有錯誤訊息
  message.innerHTML = error
    ? '<span style="color:red">錯誤：' + error + '</span>'
    : '<span style="color:green">輸入完成準備送出</span>'
})