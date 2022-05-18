// teste das implementações
var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

let subtrair = document.getElementById('decrement')
let acrescentar = document.getElementById('increment')

subtrair.addEventListener('click', decrement)
acrescentar.addEventListener('click', increment)

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red'
  } else {
    currentNumberWrapper.style.color = '#efeff8'
  }
}
function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red'
  } else {
    currentNumberWrapper.style.color = '#efeff8'
  }
}
