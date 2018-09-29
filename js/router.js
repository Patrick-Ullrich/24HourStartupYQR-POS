function $id (id) {
  return document.getElementById(id)
}

function loadHTML (url, id) {
  return new Promise((resolve, reject) => {
    req = new XMLHttpRequest()
    req.open('GET', `./templates/${url}`)
    req.send()
    req.onload = () => {
      $id(id).innerHTML = req.responseText
      resolve()
    }
  })
}

function bindNavigation () {

  let imgPath = ''
  let name = ''
  switch(userId) {
    case 0: // jamie
      name = 'Jamie Jamieson'
      imgPath = '../img/Jamie Jamieson Headshot.png'
    break;
    case 1: // alison
      name = "Alison Lean"
      imgPath = '../img/Allison Lea Headshot.png'
    break;
    case 2: // Dustin
      name = "Dustin Coupal"
      imgPath = '../img/Dustin Coupal Headshot.png'
    break;
    case 3: // Eric
      name = "Eric Dillong"
      imgPath = '../img/Eric Dillon Headshot.png'
    break;
    case 4: // Sam
      name = "Sam Dietrich"
      imgPath = '../img/Sam_headshot.png'
    break;
    case 5: 
      name = 'Patrick Ullrich'
      imgPath = '../img/Patrick_headshot.png'
    break;
  }

  // Load header
  $id('user-img').src = imgPath
  $id('user-name').innerHTML = name

  const navigationLinks = document.querySelectorAll('[data-route]')
  // Main Nav
  for (let nav of navigationLinks) {
    nav.addEventListener('click', function (e) {
      e.preventDefault()
      const element = $id('animation-wrapper')
      element.classList.remove('fadeIn')
      // element.classList.add('fadeOut')
      setTimeout(() => {
        window.location.hash = `!${nav.getAttribute('href')}`
      }, 200)
    })
  }

  const subNavigationLinks = document.querySelectorAll('[data-sub-route]')
  for (let nav of subNavigationLinks) {
    nav.addEventListener('click', function (e) {
      e.preventDefault()
      const elements = document.getElementsByClassName('animated sub')
      for (let element of elements) {
        element.classList.remove('fadeIn')
        // element.classList.add('fadeOut')
      }
      setTimeout(() => {
        window.location.hash = `!${nav.getAttribute('href')}`
      }, 200)
    })
  }
}

router = new Navigo(null, true, '#!')
router.on({
  'landing': () => {
    loadHTML('landing.html', 'view').then(() => {
      bindNavigation()
    })
  },
  'drinks': () => {
    loadHTML('drinks.html', 'view').then(() => {
      bindNavigation()
      getDrink()
    })
  },
  'bill': () => {
    loadHTML('bill.html', 'view').then(() => {
      bindNavigation()
      getBill()
    })
  },
  'food': () => {
    loadHTML('food.html', 'view').then(() => {
      bindNavigation()
      getFood()
    })
  },
  'service': () => {
    loadHTML('service.html', 'view').then(() => {
      bindNavigation()
      initService()
    })
  },
  'transferBill': () => {
    loadHTML('transferBill.html', 'view').then(() => {
      bindNavigation()
      getPayment()
    })
  },
  'payment': () => {
    loadHTML('payment.html', 'view').then(() => {
      bindNavigation()
      getPayment()
    })
  },
  'confirm': () => {
    loadHTML('confirm.html', 'view').then(() => {
      bindNavigation()
      getPayment()
    })
  }
})

// set the default route
router.on(() => {
  loadHTML('landing.html', 'view').then(() => {
    bindNavigation()
  })
})

// set the 404 route
router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>' })

router.resolve()
