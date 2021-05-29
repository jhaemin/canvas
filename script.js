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

function drawSmileyFace() {
  ctx.beginPath()
  /**
   * Outer circle
   * x, y of arc() is the center of a circle
   */
  ctx.arc(75, 75, 50, 0, -Math.PI * 2, true)
  ctx.moveTo(110, 75)
  ctx.arc(75, 75, 35, 0, Math.PI, false) // Mouth (clockwise)
  ctx.moveTo(65, 65)
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true)
  ctx.moveTo(95, 65)
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true)
  ctx.stroke()
}


  ctx.fillStyle = 'rgba(0, 0, 200, 0.3)'
  ctx.fillRect(30, 30, 50, 50)
}

draw()
