let n = 1

document.getElementById('button').addEventListener('click', change)

function change () {
  n = parseInt(n)
  n = n + 1
  document.getElementById('number').innerHTML = n
}

document.getElementById('reset').addEventListener('click', change1)

function change1 () {
  document.getElementById('number').innerHTML = 1
}