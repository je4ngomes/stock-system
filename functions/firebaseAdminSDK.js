const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://stocksystem-22e6b.firebaseio.com'
});

// set claims admin
admin.auth().getUserByEmail('test@test.com').then(({ uid }) => 
    admin.auth().setCustomUserClaims(uid, {
      isAdmin: true
    }).then(() => console.log('User is now admin.')).then(() => process.exit())
).catch(e => console.log(e));