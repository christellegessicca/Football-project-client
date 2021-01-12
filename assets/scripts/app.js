'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/event')
const playerEvents = require('./players/event')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
//user listeners
  $('.authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // CRUD listeners
  $('#create').on('submit', playerEvents.onCreate)
  $('#update').on('submit', playerEvents.onUpdate)
  $('#destroy').on('submit', playerEvents.onDestroy)
  $('#show').on('click', playerEvents.onShow)
  $('#index').on('click', playerEvents.onIndexUser)
})
