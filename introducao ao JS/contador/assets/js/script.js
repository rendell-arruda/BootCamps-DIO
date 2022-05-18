// teste das implementações
let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0

const subtrair = document.getElementById('subtrair')
subtrair.addEventListener('click', decrement)

const acrescentar = document.getElementById('adicionar')
acrescentar.addEventListener('click', increment)

function decrement() {
  if (currentNumber < 0) {
    document.getElementById('decrement').disabled = true
  }

  currentNumber--
  currentNumberWrapper.innerHTML = currentNumber

  if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red'
  } else {
    currentNumberWrapper.style.color = '#efeff8'
  }
}

function increment() {
  if (currentNumber >= 10) {
    document.getElementById('increment').disabled = true
  }

  currentNumber++
  currentNumberWrapper.innerHTML = currentNumber

  if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red'
  } else {
    currentNumberWrapper.style.color = '#efeff8'
  }
}
