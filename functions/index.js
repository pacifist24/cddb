const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()

exports.createBundle = functions.https.onRequest(async (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  // Query the 50 latest stories
  const tls = await db.collection('tls2').get()

  // Build the bundle from the query results
  const bundleBuffer = db.bundle('latest-tls').add('latest-tls-query', tls).build()

  // Cache the response for up to 5 minutes;
  // see https://firebase.google.com/docs/hosting/manage-cache
  response.set('Cache-Control', 'public, max-age=60, s-maxage=120')

  response.end(bundleBuffer)
})
