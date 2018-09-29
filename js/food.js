function getFood () {
  firebase.database().ref('food').on('value', snapshot => {
    const dataTitles = document.getElementsByClassName('data-title')
    const dataDescriptions = document.getElementsByClassName('data-description')
    const dataPrices = document.getElementsByClassName('data-price')
    for (var i = 0; i < dataTitles.length; i++) {
      dataTitles[i].innerHTML = snapshot.val()[i].name
      dataDescriptions[i].innerHTML = snapshot.val()[i].description
      dataPrices[i].innerHTML = snapshot.val()[i].price
    }
  })
}
