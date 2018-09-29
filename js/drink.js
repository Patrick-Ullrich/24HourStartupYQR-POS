function getDrink() {
  firebase.database().ref('drink').on('value', snapshot => {
    const dataTitles = document.getElementsByClassName('data-title')
    const dataDescriptions = document.getElementsByClassName('data-description')
    const dataPrice = document.getElementsByClassName('data-price')
    const dataDiscount = document.getElementsByClassName('data-discount')

    for (var i = 0; i < dataTitles.length; i++) {
      dataTitles[i].innerHTML = drinks[i].title
      dataDescriptions[i].innerHTML = drinks[i].description
      dataPrice[i].innerHTML = drinks[i].price
      dataDiscount[i].innerHTML = drinks[i].discount ? `${drinks[i].discount}% off` : ``
    }
  })
}
