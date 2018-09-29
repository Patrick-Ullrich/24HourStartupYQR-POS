var serviceModal = {}

function initService () {
  setTimeout(() => {
    document.getElementById('waterBtn').addEventListener('click', waterFunction)
    document.getElementById('waitressBtn').addEventListener('click', waitressFunction)
    document.getElementById('cleanBtn').addEventListener('click', cleanFunction)
    wmodal = document.getElementById('waterModal')
    wamodal = document.getElementById('waitressModal')
    cmodal = document.getElementById('cleanModal')
  }, 200)
}

var span = document.getElementsByClassName("close")[0];

function waterFunction () {
    wmodal.style.display = 'block'
}

function waitressFunction () {
    wamodal.style.display = 'block'
}

function cleanFunction () {
    cmodal.style.display = 'block'
}

window.onclick = function(event) {
    if (event.target == waterModal) {
        waterModal.style.display = "none";
    }
    if (event.target == wamodal) {
        wamodal.style.display = "none";
    }
    if (event.target == cmodal) {
        cmodal.style.display = "none";
    }
}

