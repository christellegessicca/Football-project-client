'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/event')
const playerEvents = require('./players/event')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

  $('.authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // CRUD actions
  $('#create').on('click', playerEvents.onCreate)
  $('#update').on('click', playerEvents.onUpdate)
  $('#destroy').on('click', playerEvents.onDestroy)

  //hide untill authenticated
  $('#on-auth').hide()

})
