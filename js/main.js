const name = document.getElementById('name');
const password = document.getElementById('password');
const errorElement = document.getElementById('error');
const login_form = document.getElementById('form');


const result_email = document.getElementById('result_email');
const result_password = document.getElementById('result_password')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value.length <= 50) {
    messages.push('')
  }

  

  if (password.value.length <= 8) {
    messages.push('use more than 8 cods')
  }

  if (password.value.length >= 16) {
    messages.push('enter no more than 12 inputs')
    
  }else{
    messages.push('successful')
  }

  if (messages.length > 0) {
    e.preventDefault()
    result_password.innerText = messages.join('Login togri kiritildi ')
  }
})

