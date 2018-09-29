var modal = {}
// $(document).ready(() => {
//   document.getElementById('water').addEventListener('click', waterFunction)
//   modal = document.getElementById('waterModal')
// })

setTimeout(() => {
  document.getElementById('water').addEventListener('click', waterFunction)
  modal = document.getElementById('waterModal')
}, 500)

//

var span = document.getElementsByClassName('close')[0]

function waterFunction () {
  modal.style.display = 'block'
}

// wBtn.onclick = function() {
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == waterModal) {
//         waterModal.style.display = "none";
//     }
// }
