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
    'name': 'Fettucine Linguine',
    'price': '15.99',
    'description': 'A copy pasta.',
    'category': ['vegetarian', 'entree']
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
    'name': 'Chicken Parmesan',
    'price': '18.99',
    'description': 'This is italy.',
    'category': ['chicken', 'entree']
  },
  {
    'id': 6,
    'name': 'Black Bean Burger and Fries',
    'price': '17.99',
    'description': 'A delicious meat substitute.',
    'category': ['glutten', 'vegetarian']
  }
]

function seedFood () {
  firebase.database().ref('food').set([...foodSeed])
}
// seedUsers()
// seedFood()
