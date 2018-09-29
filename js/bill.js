let subTotal = 0
let grandAmount = 0

function getBill() {
  firebase.database().ref('users').on('value', users => {
    user = users.val().find(u => u.id === userId)
    firebase.database().ref('orders').on('value', orders => {
      let drinksList = []
      let foodsList = []
      subTotal = 0
      grandAmount = 0
      for (let key in orders.val()) {
        let val = orders.val()[key]

        if (val.userId === userId) {
          if (val.type === 'drink') {
            drinksList.push(val)
          } else {
            foodsList.push(val)
          }
        }
      }

      for (let i = 0; i < drinksList.length; i++) {
        let drink = drinksList[i]
        drink.total = drink.amount * drink.price
        let drinkTemplate = `
        <div class="row my-2">
          <div class="col-6">
              <h2>
                  ${drink.name}
              </h2>
          </div>
          <div class="col-3 text-center">
              <h2>
                  ${drink.amount}
              </h2>
          </div>
          <div class="col-3 text-right">
              <h2>
                  ${drink.total.toFixed(2)}
              </h2>
          </div>
        </div>`
        $("#drinks").append(drinkTemplate)
        subTotal += drink.total
      }

      for (let i = 0; i < foodsList.length; i++) {
        let food = foodsList[i]
        food.total = food.amount * food.price
        let foodTemplate = `
        <div class="row my-2">
          <div class="col-6">
              <h2>
                  ${food.name}
              </h2>
          </div>
          <div class="col-3 text-center">
              <h2>
                  ${food.amount}
              </h2>
          </div>
          <div class="col-3 text-right">
              <h2>
                  ${food.total.toFixed(2)}
              </h2>
          </div>
        </div>`
        $("#foods").append(foodTemplate)
        subTotal += food.total
      }
      subTotal -= 5.12
      tip = 0.18 * subTotal
      grandAmount = subTotal + tip

      $("#totalAmount").text(grandAmount.toFixed(2))
      $("#subTotal").text(subTotal.toFixed(2))
    })
  })
}

function getPayment() {
  $("#subTotal").text(subTotal.toFixed(2))
  $("#totalAmount").text(grandAmount.toFixed(2))
}