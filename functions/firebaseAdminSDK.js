const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://stocksystem-22e6b.firebaseio.com'
});

const dumbData = [
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  },
  {
    "name": "Product",
    "category": "sdsadasd",
    "price": 223,
    "discount": 2,
    "quantity": 10,
    "imgUrls": [
      "https://i5.walmartimages.com/asr/18c68a76-5c17-44a8-ae19-d10178ee17f1_1.bedf0d2e3bf94ee698ff868145310434.jpeg"
    ],
    "description": "sssdsd"
  }
];


const createKeywords = string => (
    string.toLowerCase()
          .split('')
          .reduce(({ kwds, strAcc }, letter) => {
              const kwd = strAcc + letter;

              return { kwds: [...kwds, kwd], strAcc: kwd };
          }, { kwds: [''], strAcc: ''}).kwds
);

dumbData.forEach((doc, i) => {
    console.log(i);
    admin.firestore().collection('products').doc().set({ ...doc, keywords: createKeywords(doc.name), category: { default: 1, category: 'asdsd' }, timestamp: (+new Date())+i, name: 'product ' + (i+1)})
})


// admin.firestore().collection('products').listDocuments().then(x => x.forEach(doc => doc.delete()))

// set claims admin
// admin.auth().getUserByEmail('test@test.com').then(({ uid }) => 
//     admin.auth().setCustomUserClaims(uid, {
//       isAdmin: true
//     }).then(() => console.log('User is now admin.')).then(() => process.exit())
// ).catch(e => console.log(e));