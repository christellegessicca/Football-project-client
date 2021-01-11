'use strict'
const store = require('./../store')

const onsignUpSuccess = function (response) {
  $('#message').text('Sign up Successful!')
  $('form').trigger(reset)

}

const onsignUpFailure = function (error) {
  $('#message').text('Sign up failed' + error.responseJSON.message)

}

const onSignInSuccess = function (response) {
  $('#message').text('Sign in Successful!')
  store.user = response.user
  $('form').trigger('reset')
  $('.authenticated').show()

}

const onSignInFailure = function (error) {
  $('#message').text('Please trying sigining in again!' + error.responseJSON.message)
  $('form').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('message').text('Password change successful!')
  $('form').trigger('reset')
}

const onChangePasswordFailure = function (error) {
  store.user = null
  $('message').text('Sign out was a success!')
  $('form').trigger('reset')
  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const onSignOutSuccess = function (response){
  store.user = null
  $('message').text('Sign out was a success!')
  $('form').trigger('reset')
  $('.unauthenticated').hide()
  $('on-auth').hide()
}

const onSignOutFailure = function (error){
  $('#message').text('Sign out Failed' + error.responseJSON.message)
}

module.exports = {
  onsignUpSuccess,
  onsignUpFailure,
  onSignInFailure,
  onSignInSuccess,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutFailure,
  onSignInSuccess
}
