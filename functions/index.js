const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addDefaultUserRole = functions.auth.user().onCreate(({ uid }) => 
    admin.auth().setCustomUserClaims(uid,{
        isAdmin: false,
    })
);