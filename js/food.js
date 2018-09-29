const userId = 1

function getFood () {
  firebase.database().ref('users').on('value', users => {
    console.log(users.val())
    const user = users.val().find(u => u.id === userId)
    firebase.database().ref('food').on('value', foods => {
      const featuredTitle = document.getElementById('featured-title')
      const featuredPrice = document.getElementById('featured-price')
      const featFood = foods.val().find(f => f.id === user.featured)
      featuredTitle.innerHTML = featFood.name
      featuredPrice.innerHTML = featFood.price

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

  setTimeout(() => {
    firebase.database().ref('users/1').set({
      id: 1,
      name: 'Alison Lea',
      featured: 3
    })
  }, 4000)
}
