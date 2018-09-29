const userId = 1

let featuredAmount = 1
let featuredAmountEle = {}

function getFood () {
  firebase.database().ref('users').on('value', users => {
    const user = users.val().find(u => u.id === userId)
    firebase.database().ref('food').on('value', foods => {
      const featuredTitle = document.getElementById('featured-title')
      const featuredPrice = document.getElementById('featured-price')
      const featuredDescription = document.getElementById('featured-description')
      const featFood = foods.val().find(f => f.id === user.featured)
      featuredTitle.innerHTML = featFood.name
      featuredPrice.innerHTML = featFood.price
      featuredDescription.innerHTML = featFood.description

      const dataTitles = document.getElementsByClassName('data-title')
      const dataDescriptions = document.getElementsByClassName('data-description')
      const dataPrices = document.getElementsByClassName('data-price')
      for (var i = 0; i < dataTitles.length; i++) {
        dataTitles[i].innerHTML = foods.val()[i].name
        dataDescriptions[i].foods = foods.val()[i].description
        dataPrices[i].innerHTML = foods.val()[i].price
      }
    })
  })

  // setTimeout(() => {
  //   firebase.database().ref('users/1').set({
  //     id: 1,
  //     name: 'Alison Lea',
  //     featured: 3
  //   })
  // }, 4000)
}

function collapseFeatured (e) {
  featuredAmount = 1
  featuredAmountEle.innerHTML = '0' + featuredAmount
  $('#featuredCollapse').collapse('toggle')
}

function decrementFeatured () {
  if (featuredAmount > 1) {
    featuredAmount--
    featuredAmountEle.innerHTML = '0' + featuredAmount
  }
}

function incrementFeatured () {
  if (featuredAmount < 9) {
    featuredAmount++
    featuredAmountEle.innerHTML = '0' + featuredAmount
  }
}

function orderFeatured () {
  setTimeout(() => $('#featuredCollapse').collapse('hide'), 500)
}

$(function () {
  featuredAmountEle = document.getElementById('featuredAmount')
  $('.btn').confettiButton({
    hoverOnly: true
  })
})
