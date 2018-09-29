var serviceModal = {}

function initService () {
  setTimeout(() => {
    document.getElementById('water').addEventListener('click', waterFunction)
    modal = document.getElementById('waterModal')
  }, 200)
}

function waterFunction () {
  modal.style.display = 'block'
}
