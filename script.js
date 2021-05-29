/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')

const ctx = canvas.getContext('2d')

function example1() {
  ctx.fillRect(25, 25, 100, 100)
  ctx.clearRect(45, 45, 60, 60)
  ctx.strokeRect(50, 50, 50, 50)
}

function drawRedTriangle() {
  ctx.beginPath()
  ctx.fillStyle = '#ff0000'
  ctx.moveTo(75, 50)
  ctx.lineTo(100, 75)
  ctx.lineTo(100, 25)
  ctx.fill()
}

function draw() {
  ctx.fillStyle = 'rgb(200, 0, 0)'
  ctx.fillRect(10, 10, 50, 50)

  ctx.fillStyle = 'rgba(0, 0, 200, 0.3)'
  ctx.fillRect(30, 30, 50, 50)
}

draw()
