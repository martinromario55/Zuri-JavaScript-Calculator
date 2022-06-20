function display(value) {
  let inputVal = document.getElementById('textarea')
  inputVal.value += value
}

function calculate() {
  let value = document.getElementById('textarea').value
  let answer = eval(value)
  document.getElementById('textarea').value = answer
}

function clr() {
  document.getElementById('textarea').value = ''
}
