const userId = 5
let user = {}
let featFood = {}

var featuredAmount = 1
var featuredAmountEle = {}
var foodAmountEles = []
var globalFoods = []

function getFood () {
  firebase.database().ref('users').on('value', users => {
    user = users.val().find(u => u.id === userId)
    firebase.database().ref('food').on('value', foods => {
      globalFoods = foods.val()
      const featuredTitle = document.getElementById('featured-title')
      const featuredPrice = document.getElementById('featured-price')
      const featuredDescription = document.getElementById('featured-description')

      featFood = foods.val().find(f => f.id === user.featured)
      featuredTitle.innerHTML = featFood.name
      featuredPrice.innerHTML = featFood.price
      featuredDescription.innerHTML = featFood.description
      $('.drink-card-container').css('background-image', `url('../img/ff${featFood.id}.png')`)

      const dataTitles = document.getElementsByClassName('data-title')
      const dataDescriptions = document.getElementsByClassName('data-description')
      const dataPrices = document.getElementsByClassName('data-price')
      const dataDiscount = document.getElementsByClassName('data-discount')
      for (var i = 0; i < dataTitles.length; i++) {
        dataTitles[i].innerHTML = foods.val()[i].name
        dataDescriptions[i].innerHTML = foods.val()[i].description
        dataPrices[i].innerHTML = foods.val()[i].price
        dataDiscount[i].innerHTML = foods.val()[i].discount ? `${foods.val()[i].discount}% off` : ``
      }
      featuredAmountEle = document.getElementById('featuredAmount')

      for (var i = 0; i < 6; i++) {
        foodAmountEles[i] = document.getElementById('foodAmount' + i)
      }
    })
  })
}

function collapseFeatured () {
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

var foodAmount = 1
function incrementFood (id) {
  if (foodAmount < 9) {
    foodAmount++
    foodAmountEles[id].innerHTML = '0' + foodAmount
  }
}

function decrementFood (id) {
  if (foodAmount > 1) {
    foodAmount--
    foodAmountEles[id].innerHTML = '0' + foodAmount
  }
}

function collapseFood (id) {
  foodAmount = 1
  for (var i = 0; i < 6; i++) {
    $('#collapse' + i).collapse('hide')
    foodAmountEles[i].innerHTML = '01'
  }
  $('#collapse' + id).collapse('show')
}

function order (id, type) {
  if (type === 'food') {
    const food = globalFoods.find(f => {
      return f.id === id
    })
    firebase.database().ref('orders/' + Date.now()).set({
      foodId: id,
      name: food.name,
      price: food.price,
      amount: foodAmount,
      userId: userId,
      type: 'food'
    })
    
    setTimeout(() => $('#collapse' + id).collapse('hide'), 500)
  } else {
    const drink = globalDrinks.find(f => {
      return f.id === id
    })
    firebase.database().ref('orders/' + Date.now()).set({
      foodId: id,
      name: drink.name,
      price: drink.price,
      amount: foodAmount,
      userId: userId,
      type: 'drink'
    })
    setTimeout(() => $('#collapse' + id).collapse('hide'), 500)
  }
}

function orderFeatured () {
  firebase.database().ref('orders/' + Date.now()).set({
    foodId: user.featured,
    name: featFood.name,
    price: featFood.price,
    amount: featuredAmount,
    userId: user.id,
    type: 'food'
  })
  changeFeatured(user.featured)
  setTimeout(() => $('#featuredCollapse').collapse('hide'), 500)
}

function orderFeaturedDrink () {
  firebase.database().ref('orders/' + Date.now()).set({
    foodId: 1,
    name: 'White Russian',
    price: 3.99,
    amount: featuredAmount,
    userId: userId,
    type: 'drink'
  })
  setTimeout(() => $('#featuredCollapse').collapse('hide'), 500)
}

$(function () {
  $('.btn').confettiButton({
    hoverOnly: true
  })
})


function changeFeatured(foodId) {
  if (foodId === 3) {
    firebase.database().ref("users/5").set({
      id: 5,
      name: 'Patrick Ullrich',
      featured: 4
    })
  }
}