import firebase from 'firebase'
import 'firebase/auth'
import { initializeApp } from 'firebase/app'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC1zMkQZdCpUWbFmjASBomR3uhr_dHRaC0',
  authDomain: 'rntodoapp-f11a3.firebaseapp.com',
  projectId: 'rntodoapp-f11a3',
  storageBucket: 'rntodoapp-f11a3.appspot.com',
  messagingSenderId: '942454126807',
  appId: '1:942454126807:web:24d8dfaf2b7c7aba5b1892',
}

class Fire {
  constructor() {
    this.init(callback)
  }

  init(callback) {
    if (!firebase.apps.length) {
      initializeApp(firebaseConfig)
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback(null, user)
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch(error => {
            callback(error)
          })
      }
    })
  }

  getLists(callback) {
    let ref = firebase
      .firestore()
      .collection('users')
      .doc(this.userId)
      .collection('lists')

    this.unsubscribe = ref.onSnapshot(snapshot => {
      lists = []

      snapshot.forEach(doc => {
        lists.push({ id: doc.id, ...doc.data() })
      })

      callback(lists)
    })
  }

  get userId() {
    return firebase.auth().currentUser.uid
  }
}

export default Fire
