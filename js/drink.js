let globalDrinks = []

function getDrink () {
  firebase.database().ref('drinks').on('value', snapshot => {
    globalDrinks = snapshot.val()
    const dataTitles = document.getElementsByClassName('data-title')
    const dataDescriptions = document.getElementsByClassName('data-description')
    const dataPrice = document.getElementsByClassName('data-price')
    const dataDiscount = document.getElementsByClassName('data-discount')

    for (var i = 0; i < dataTitles.length; i++) {
      dataTitles[i].innerHTML = snapshot.val()[i].name
      dataDescriptions[i].innerHTML = snapshot.val()[i].description
      dataPrice[i].innerHTML = snapshot.val()[i].price
      dataDiscount[i].innerHTML = snapshot.val()[i].discount ? `${snapshot.val()[i].discount}% off` : ``
    }

    featuredAmountEle = document.getElementById('featuredAmount')
    for (var i = 0; i < 6; i++) {
      foodAmountEles[i] = document.getElementById('foodAmount' + i)
    }
  })
}
