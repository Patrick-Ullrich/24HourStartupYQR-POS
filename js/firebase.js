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

var starCountRef = firebase.database().ref('users').on('value', function (snapshot) {
  console.log(snapshot.val())
  // updateStarCount(postElement, snapshot.val());
})
submit(123, 'test', 'test', 'sdfg')
