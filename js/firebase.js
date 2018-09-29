var orderId = 0
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDwTCS3AZL2P5Bx_Sn88tVTw3CShiYywfM',
  authDomain: 'restaurant-24hr.firebaseapp.com',
  databaseURL: 'https://restaurant-24hr.firebaseio.com',
  projectId: 'restaurant-24hr',
  storageBucket: 'restaurant-24hr.appspot.com',
  messagingSenderId: '283150124642'
}
firebase.initializeApp(config)

// Get a reference to the database service
var database = firebase.database()

function submit (userId, name, email, imageUrl) {
  orderId++
  firebase.database().ref('users/' + orderId).set({
    username: name,
    email: email,
    profile_picture: imageUrl
  })
}

function del () {
  firebase.database().ref('users/' + orderId).remove()
}

// var starCountRef = firebase.database().ref('users').on('value', function (snapshot) {
//   console.log(snapshot.val())
//   // updateStarCount(postElement, snapshot.val());
// })

const userSeed = [
  {
    id: 0,
    name: 'Jamie Jamieson',
    featured: 4
  },
  {
    id: 1,
    name: 'Alison Lea',
    featured: 4
  },
  {
    id: 2,
    name: 'Dustin Coupal',
    featured: 4
  },
  {
    id: 3,
    name: 'Eric Dillon',
    featured: 4
  },
  {
    id: 4,
    name: 'Jamie Jamieson',
    featured: 4
  },
  {
    id: 5,
    name: 'Jamie Jamieson',
    featured: 4
  }
]

function seedUsers () {
  firebase.database().ref('users').set([...userSeed])
}

const foodSeed = [
  {
    'id': 1,
    'name': 'Spinach Dip',
    'price': '9.99',
    'description': 'Break me off a piece of that spi-nach dip.',
    'category': ['vegeterian', 'appetizer']
  },
  {
    'id': 2,
    'name': 'Chicken Wings',
    'price': '8.99',
    'description': 'Hot ones is a good show.',
    'category': ['chicken', 'appetizer']
  },
  {
    'id': 3,
    'name': 'Garden Salad',
    'price': '12.99',
    'description': 'The most bland thing you can get.',
    'category': ['vegeterian','appetizer']
  },
  {
    'id': 4,
    'name': 'Steak & Frites',
    'price': '23.99',
    'description': 'Top sirloin steak paired with cut potatoes.',
    'category': ['meat', 'entree']
  },
  {
    'id': 5,
    'name': 'Linguine Chicken Ametriciana',
    'price': '18.99',
    'description': 'This is italy.',
    'category': ['chicken', 'entree']
  },
  {
    'id': 6,
    'name': 'Chicken Caesar Salad',
    'price': '14.99',
    'description': 'A classic.',
    'category': ['glutten', 'vegetarian']
  }
]

const drinkSeed = [
  {
    'id': 1,
    'title': 'Burt Reynolds',
    'description': 'Fizzy but fun.',
    'price': '4.99',
    'discount': 10
  },
  {
    'id': 2,
    'title': 'White Russian',
    'description': 'Fizzy but fun.',
    'price': '3.99',
    'discount': 0
  },
  {
    'id': 3,
    'title': 'Caesar',
    'description': 'Fizzy but fun.',
    'price': '7.00',
    'discount': 20
  },
  {
    'id': 4,
    'title': 'Pepsi',
    'description': 'Fizzy but fun.',
    'price': '1.99',
    'discount': 20
  },
  {
    'id': 5,
    'title': 'Ginger Ale',
    'description': 'Fizzy but fun.',
    'price': '1.99',
    'discount': 0
  },
  {
    'id': 6,
    'title': 'Fanta',
    'description': 'Fizzy but fun.',
    'price': '2.29',
    'discount': 0
  }
]

function seedFood () {
  firebase.database().ref('food').set([...foodSeed])
}

function seedDrinks() {
  firebase.database().ref('drinks').set([...drinkSeed])
}
// seedUsers()
// seedFood()
