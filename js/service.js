var serviceModal = {}
let wmodal
let wamodal
let cmodal

let wInner
let waInner
let cInner

function initService () {
  setTimeout(() => {
    document.getElementById('waterBtn').addEventListener('click', waterFunction)
    document.getElementById('waitressBtn').addEventListener('click', waitressFunction)
    document.getElementById('cleanBtn').addEventListener('click', cleanFunction)
    wmodal = document.getElementById('waterModal')
    wamodal = document.getElementById('waitressModal')
    cmodal = document.getElementById('cleanModal')

    wInner = document.getElementById('wInner')
    waInner = document.getElementById('waInner')
    cInner = document.getElementById('cInner')
  }, 200)
}

var span = document.getElementsByClassName('close')[0]

function waterFunction () {
  wmodal.style.display = 'block'
}

function waitressFunction () {
  wamodal.style.display = 'block'
}

function cleanFunction () {
  cmodal.style.display = 'block'
}

window.onclick = function (event) {
  if (event.target == wmodal || event.target == wInner) {
    wmodal.style.display = 'none'
  }
  if (event.target == wamodal || event.target == waInner) {
    wamodal.style.display = 'none'
  }
  if (event.target == cmodal || event.target == cInner) {
    cmodal.style.display = 'none'
  }
}
