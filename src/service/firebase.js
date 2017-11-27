import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBm_xghmotbuYs_wPrcbMDqM-ucM_Qex3M',
  authDomain: 'cropchat-9779e.firebaseapp.com',
  databaseURL: 'https://cropchat-9779e.firebaseio.com',
  projectId: 'cropchat-9779e',
  storageBucket: 'cropchat-9779e.appspot.com',
  messagingSenderId: '427472067361'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
