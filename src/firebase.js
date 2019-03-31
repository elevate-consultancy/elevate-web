import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBJDkXPyJSQAr_MxStdsEi0-49cJmoFFAg',
  authDomain: 'elevate-website-1550999347142.firebaseapp.com',
  projectId: 'elevate-website-1550999347142',
}
firebase.initializeApp(config)

const db = firebase.firestore()

export default db
