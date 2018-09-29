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

const userSeed = [
  {
    id: 0,
    name: 'Jamie Jamieson',
    featured: 3
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
    name: 'Sam Dietrich',
    featured: 2
  },
  {
    id: 5,
    name: 'Patrick Ullrich',
    featured: 3
  }
]

const foodSeed = [
  {
    'id': 0,
    'name': 'Spinach Dip',
    'price': '9.99',
    'description': 'Break me off a piece of that spi-nach dip.',
    'discount': 15,
    'category': ['vegeterian', 'appetizer']
  },
  {
    'id': 1,
    'name': 'Chicken Wings',
    'price': '8.99',
    'description': 'Hot ones is a good show.',
    'discount': 5,
    'category': ['chicken', 'appetizer']
  },
  {
    'id': 2,
    'name': 'Garden Salad',
    'price': '12.99',
    'description': 'The most bland thing you can get.',
    'discount': 0,
    'category': ['vegeterian', 'appetizer']
  },
  {
    'id': 3,
    'name': 'Steak & Frites',
    'price': '23.99',
    'description': 'Top sirloin steak paired with cut potatoes.',
    'discount': 20,
    'category': ['meat', 'entree']
  },
  {
    'id': 4,
    'name': 'Linguine Chicken Ametriciana',
    'price': '18.99',
    'description': 'This is italy.',
    'discount': 10,
    'category': ['chicken', 'entree']
  },
  {
    'id': 5,
    'name': 'Chicken Caesar Salad',
    'price': '14.99',
    'description': 'A classic.',
    'discount': 0,
    'category': ['glutten', 'vegetarian']
  }
]

const drinkSeed = [
  {
    'id': 0,
    'name': 'Burt Reynolds',
    'description': 'Fizzy but fun.',
    'price': '4.99',
    'discount': 0
  },
  {
    'id': 1,
    'name': 'White Russian',
    'description': 'Fizzy but fun.',
    'price': '3.99',
    'discount': 10
  },
  {
    'id': 2,
    'name': 'Caesar',
    'description': 'Fizzy but fun.',
    'price': '7.00',
    'discount': 20
  },
  {
    'id': 3,
    'name': 'Pepsi',
    'description': 'Fizzy but fun.',
    'price': '1.99',
    'discount': 20
  },
  {
    'id': 4,
    'name': 'Ginger Ale',
    'description': 'Fizzy but fun.',
    'price': '1.99',
    'discount': 0
  },
  {
    'id': 5,
    'name': 'Fanta',
    'description': 'Fizzy but fun.',
    'price': '2.29',
    'discount': 0
  }
]

function seedUsers () {
  firebase.database().ref('users').set([...userSeed])
}

function seedFood () {
  firebase.database().ref('food').set([...foodSeed])
}

function seedDrinks () {
  firebase.database().ref('drinks').set([...drinkSeed])
}
// seedUsers()
// seedFood()
// seedDrinks()
