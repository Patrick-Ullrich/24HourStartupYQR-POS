function $id(id) {
  return document.getElementById(id);
}

function loadHTML(url, id) {
  return new Promise((resolve, reject) => {
    req = new XMLHttpRequest();
    req.open('GET', `./templates/${url}`);
    req.send();
    req.onload = () => {
      $id(id).innerHTML = req.responseText;
      resolve();
    };
  })
}

function bindNavigation() {
  const navigationLinks = document.querySelectorAll('[data-route]');
  // Main Nav
  for (let nav of navigationLinks) {
    nav.addEventListener('click', function (e) {
      e.preventDefault()
      const element = $id('animation-wrapper')
      element.classList.remove('fadeIn')
      element.classList.add('fadeOut')
      setTimeout(() => {
        window.location.hash = `!${nav.getAttribute('href')}`
      }, 500);
    })
  }

  const subNavigationLinks = document.querySelectorAll('[data-sub-route]');
  for (let nav of subNavigationLinks) {
    nav.addEventListener('click', function (e) {
      e.preventDefault()
      const elements = document.getElementsByClassName('animated sub');
      for (let element of elements) {
        element.classList.remove('fadeIn')
        element.classList.add('fadeOut')
      }
      setTimeout(() => {
        window.location.hash = `!${nav.getAttribute('href')}`
      }, 500);
    })
  }
}

router = new Navigo(null, true, '#!');
router.on({
  'landing': () => {
    loadHTML('landing.html', 'view').then(() => {
      bindNavigation()
    })
  },
  'drinks': () => {
    loadHTML('drinks.html', 'view').then(() => {
      bindNavigation()
    })
  },
  'bill': () => {
    loadHTML('bill.html', 'view').then(() => {
      bindNavigation()
    })
  },
  'food': () => {
    loadHTML('food.html', 'view').then(() => {
      bindNavigation()
    })
  },
  'service': () => {
    loadHTML('service.html', 'view').then(() => {
      bindNavigation()
    })
  },
  'foodDetail': () => {
    loadHTML('foodDetail.html', 'view').then(() => {
      bindNavigation()
    })
  }
});

// set the default route
router.on(() => {
  loadHTML('landing.html', 'view').then(() => {
    bindNavigation()
  });
});

// set the 404 route
router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });

router.resolve();